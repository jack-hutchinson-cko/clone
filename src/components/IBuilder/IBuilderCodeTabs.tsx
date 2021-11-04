import React, { FC, useState, useCallback } from 'react';
import { get } from 'lodash';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconActionDownload, IconActionCheckmark, IconActionCopyIB } from 'src/components/Icons';
import { useTabs } from 'src/hooks/useTabs';
import {
  TabHeader,
  TabItem,
  ControlsPanel,
  ControlButton,
  TabsWrapper,
} from './IBuilderCodeTabs.styles';
import { getChildWithProps, getResultSourceCode, getSelectedLines } from './utils';
import { SelectedBlockType, MediaFilesType, CodeControlStateType } from './types';

type Props = {
  selectedBlock: SelectedBlockType;
  onChangeTab: () => void;
  mediaFiles: MediaFilesType;
  codeControlState: CodeControlStateType;
};

const timeout = 3000;

const IBuilderCodeTabs: FC<Props> = ({
  children,
  selectedBlock,
  onChangeTab,
  mediaFiles,
  codeControlState,
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { titles, activeTab, setActiveTab } = useTabs({
    children,
    selectedTab: selectedBlock.tab,
    titleKey: 'displayTitle',
  });

  const selectedChild = React.Children.toArray(children)[activeTab] || null;
  const sourceCode = getResultSourceCode({ child: selectedChild, codeControlState });
  const codeTitle = get(selectedChild, 'props.title');
  const childWithProps =
    codeTitle === selectedBlock.tab
      ? getChildWithProps(selectedChild, {
          selectedLines: getSelectedLines({ selectedBlock, codeTitle, codeControlState }),
          sourceCode,
        })
      : getChildWithProps(selectedChild, { sourceCode });

  const onToggleHandler = useCallback(() => {
    setIsCopied(!isCopied);

    const timer = setTimeout(() => setIsCopied(isCopied), timeout);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleDownload = () => {
    const zip = new JSZip();

    React.Children.toArray(children).forEach((child) => {
      const { title: name } = get(child, 'props', {});
      const content = getResultSourceCode({ child, codeControlState });

      zip.file(name, content);
    });

    if (mediaFiles && mediaFiles.length) {
      mediaFiles.forEach(({ name, src }) => {
        zip.file(name, src, { base64: true });
      });
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'example-checkout-files.zip');
    });
  };

  const handelTabClick = (index: number) => () => {
    setActiveTab(index);
    onChangeTab();
  };

  return (
    <>
      <TabHeader>
        <TabsWrapper>
          {titles.map((tabItem, index) => (
            <TabItem key={tabItem} isSelected={index === activeTab} onClick={handelTabClick(index)}>
              {tabItem}
            </TabItem>
          ))}
        </TabsWrapper>
        <ControlsPanel>
          {isCopied ? (
            <ControlButton>
              <IconActionCheckmark />
            </ControlButton>
          ) : (
            <CopyToClipboard text={sourceCode} onCopy={onToggleHandler}>
              <ControlButton>
                <IconActionCopyIB />
              </ControlButton>
            </CopyToClipboard>
          )}
          <ControlButton onClick={handleDownload}>
            <IconActionDownload />
          </ControlButton>
        </ControlsPanel>
      </TabHeader>
      {childWithProps}
    </>
  );
};

IBuilderCodeTabs.displayName = 'IBuilderCodeTabs';

export default IBuilderCodeTabs;
