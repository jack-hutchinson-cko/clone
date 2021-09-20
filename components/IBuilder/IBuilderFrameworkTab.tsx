import React, { FC, useState, ReactNode, useEffect, useRef } from 'react';
import { get } from 'lodash';
import TwoColumn from 'components/TwoColumn';
import usePrevState from 'hooks/usePrevState';
import { getChildComponentName, getChildWithProps } from './utils';
import IBuilderCodeTabs from './IBuilderCodeTabs';
import { MainWrapper, CodeTabWrapper, Portal } from './IBuilderFrameworkTab.styles';
import { SelectedBlockType, RegisterDescriptionElementType, MediaFilesType } from './types';

const HEADER_HEIGHT = 80;

const getInnerComponents = ({
  children,
  selectedBlock,
  setSelectedBlock,
  registerDescriptionElement,
}: {
  children: ReactNode;
  selectedBlock: SelectedBlockType;
  setSelectedBlock: (param: SelectedBlockType) => void;
  registerDescriptionElement: (param: RegisterDescriptionElementType) => void;
}): {
  codePreviewComponent: ReactNode;
  codeTabsComponents: ReactNode;
  descriptionComponents: ReactNode;
  mediaFiles: MediaFilesType;
  mediaSource: string;
} => {
  let codePreviewComponent = null;
  let currentStep = 1;
  let currentDescriptionId = 0;
  let mediaFiles: MediaFilesType = [];
  let mediaSource = '';
  const codeTabsComponents: ReactNode[] = [];
  const descriptionComponents: ReactNode[] = [];
  const codeMap: { [key: string]: string } = {};

  React.Children.toArray(children).forEach((child) => {
    const componentName = getChildComponentName(child);

    if (componentName === 'IBuilderCodePreview' || componentName === 'IBuilderFormPreview') {
      codePreviewComponent = child;
    } else if (componentName === 'IBuilderStep') {
      descriptionComponents.push(getChildWithProps(child, { currentStep }));
      currentStep += 1;
    } else if (componentName === 'IBuilderDescriptionCard') {
      descriptionComponents.push(
        getChildWithProps(child, {
          selectedBlock,
          setSelectedBlock,
          registerDescriptionElement,
          id: currentDescriptionId,
        }),
      );
      currentDescriptionId += 1;
    } else if (componentName === 'IBuilderCodeTab') {
      const title = get(child, 'props.title');
      const code = get(child, 'props.children.props.children.props.children');

      if (title && code) {
        codeMap[title] = code;
      }

      codeTabsComponents.push(child);
    } else if (componentName === 'IBuilderMedia') {
      mediaFiles = get(child, 'props.mediaFiles', []);
      mediaSource = get(child, 'props.mediaSource', []);
    }
  });

  codePreviewComponent = getChildWithProps(codePreviewComponent, {
    codeMap,
  });

  return {
    codePreviewComponent,
    codeTabsComponents,
    descriptionComponents,
    mediaFiles,
    mediaSource,
  };
};

type Props = {
  headerComponent: ReactNode;
};

const IBuilderFrameworkTab: FC<Props> = ({ children, headerComponent }) => {
  const [selectedBlock, setSelectedBlock] = useState<SelectedBlockType>({});
  const descriptionElementsData = useRef<RegisterDescriptionElementType[]>([]);
  const prevState = usePrevState(selectedBlock);
  const registerDescriptionElement = (data: RegisterDescriptionElementType) => {
    descriptionElementsData.current.push(data);
  };

  const {
    codePreviewComponent,
    codeTabsComponents,
    descriptionComponents,
    mediaFiles,
    mediaSource,
  } = getInnerComponents({
    children,
    selectedBlock,
    setSelectedBlock,
    registerDescriptionElement,
  });

  useEffect(() => {
    const onScrollHandler = () => {
      const descriptionElements = descriptionElementsData.current;
      if (descriptionElements.length) {
        const descriptionItem = descriptionElements.find(({ blockItemRef }) => {
          if (blockItemRef.current) {
            const { top } = blockItemRef.current.getBoundingClientRect();
            return top >= HEADER_HEIGHT;
          }
          return false;
        });

        if (descriptionItem && prevState.id !== descriptionItem.blockItem.id) {
          setSelectedBlock(descriptionItem.blockItem);
        }
      }
    };

    document.addEventListener('scroll', onScrollHandler);
    return () => document.removeEventListener('scroll', onScrollHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelChangeTab = () => {
    setSelectedBlock({});
  };

  return (
    <MainWrapper>
      <TwoColumn gap={24} columSize={{ desktop: [40, 60] }}>
        <div>
          <div>{headerComponent || null}</div>
          <div>{descriptionComponents}</div>
        </div>
        <>
          <Portal id="framework-switcher" />
          <CodeTabWrapper>
            <div>{codePreviewComponent}</div>
            <IBuilderCodeTabs
              onChangeTab={handelChangeTab}
              selectedBlock={selectedBlock}
              mediaFiles={mediaFiles}
              mediaSource={mediaSource}
            >
              {codeTabsComponents}
            </IBuilderCodeTabs>
          </CodeTabWrapper>
        </>
      </TwoColumn>
    </MainWrapper>
  );
};

IBuilderFrameworkTab.displayName = 'IBuilderFrameworkTab';

export default IBuilderFrameworkTab;
