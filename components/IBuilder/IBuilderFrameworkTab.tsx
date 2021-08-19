import React, { FC, useState, ReactNode, useEffect, useRef } from 'react';
import TwoColumn from 'components/TwoColumn';
import usePrevState from 'hooks/usePrevState';
import { getChildComponentName, getChildWithProps } from './utils';
import IBuilderCodeTabs from './IBuilderCodeTabs';
import { MainWrapper, CodeTabWrapper } from './IBuilderFrameworkTab.styles';
import { SelectedBlockType, RegisterDescriptionElementType } from './types';

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
} => {
  let codePreviewComponent = null;
  let currentStep = 1;
  let currentDescriptionId = 0;
  const codeTabsComponents: ReactNode[] = [];
  const descriptionComponents: ReactNode[] = [];

  React.Children.toArray(children).forEach((child) => {
    const componentName = getChildComponentName(child);

    if (componentName === 'IBuilderCodePreview') {
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
      codeTabsComponents.push(child);
    }
  });

  return { codePreviewComponent, codeTabsComponents, descriptionComponents };
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

  const { codePreviewComponent, codeTabsComponents, descriptionComponents } = getInnerComponents({
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
        <CodeTabWrapper>
          <div>{codePreviewComponent}</div>
          <IBuilderCodeTabs onChangeTab={handelChangeTab} selectedBlock={selectedBlock}>
            {codeTabsComponents}
          </IBuilderCodeTabs>
        </CodeTabWrapper>
      </TwoColumn>
    </MainWrapper>
  );
};

IBuilderFrameworkTab.displayName = 'IBuilderFrameworkTab';

export default IBuilderFrameworkTab;
