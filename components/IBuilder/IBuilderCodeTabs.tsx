import React, { FC, useState, useCallback } from 'react';
import { get } from 'lodash';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconActionDownload, IconActionCopy, IconActionCheckmark } from '@cko/icons';

import { useTabs } from 'hooks/useTabs';
import { TabHeader, TabItem, ControlsPanel, ControlButton } from './IBuilderCodeTabs.styles';
import { getChildWithProps, getSouceCodeFromMdxTab } from './utils';
import { SelectedBlockType, MediaFilesType } from './types';

type Props = {
  selectedBlock: SelectedBlockType;
  onChangeTab: () => void;
  mediaFiles: MediaFilesType;
  mediaSource: string;
};

const timeout = 3000;

const IBuilderCodeTabs: FC<Props> = ({
  children,
  selectedBlock,
  onChangeTab,
  mediaFiles,
  mediaSource = '',
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { titles, activeTab, setActiveTab } = useTabs({ children, selectedTab: selectedBlock.tab });

  const selectedChild = React.Children.toArray(children)[activeTab] || null;
  const sourceCode = getSouceCodeFromMdxTab(selectedChild);
  const childWithProps =
    get(selectedChild, 'props.title') === selectedBlock.tab
      ? getChildWithProps(selectedChild, { selectedLines: selectedBlock.lines })
      : selectedChild;

  const onToggleHandler = useCallback(() => {
    setIsCopied(!isCopied);

    const timer = setTimeout(() => setIsCopied(isCopied), timeout);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleDownload = () => {
    const zip = new JSZip();

    React.Children.toArray(children).forEach((child) => {
      const name = get(child, 'props.title');
      const content = getSouceCodeFromMdxTab(child);

      zip.file(name, content);
    });

    if (mediaSource) {
      let mediaFolder = zip;
      mediaSource.split('/').forEach((currentFolderName) => {
        mediaFolder = mediaFolder.folder(currentFolderName) as JSZip;
      });

      mediaFiles.forEach(({ name, src }) => {
        mediaFolder.file(name, src, { base64: true });
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
        {titles.map((tabItem, index) => (
          <TabItem key={tabItem} isSelected={index === activeTab} onClick={handelTabClick(index)}>
            {tabItem}
          </TabItem>
        ))}
        <ControlsPanel>
          {isCopied ? (
            <ControlButton>
              <IconActionCheckmark />
            </ControlButton>
          ) : (
            <CopyToClipboard text={sourceCode} onCopy={onToggleHandler}>
              <ControlButton>
                <IconActionCopy />
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
