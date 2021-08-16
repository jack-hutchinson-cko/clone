import React, { FC, useState, ReactNode } from 'react';
import TwoColumn from 'components/TwoColumn';
import { getChildComponentName, getChildWithProps } from './utils';
import IBuilderCodeTabs from './IBuilderCodeTabs';
import { MainWrapper, CodeTabWrapper } from './IBuilderFrameworkTab.styles';
import { SelectedBlockType } from './types';

const getInnerComponents = ({
  children,
  selectedBlock,
  setSelectedBlock,
}: {
  children: ReactNode;
  selectedBlock: SelectedBlockType;
  setSelectedBlock: (param: SelectedBlockType) => void;
}): {
  codePreviewComponent: ReactNode;
  codeTabsComponents: ReactNode;
  descriptionComponents: ReactNode;
} => {
  let codePreviewComponent = null;
  let currentStep = 1;
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
      descriptionComponents.push(getChildWithProps(child, { selectedBlock, setSelectedBlock }));
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
  const { codePreviewComponent, codeTabsComponents, descriptionComponents } = getInnerComponents({
    children,
    selectedBlock,
    setSelectedBlock,
  });

  return (
    <MainWrapper>
      <TwoColumn gap={24} columSize={{ desktop: [40, 60] }}>
        <div>
          <div>{headerComponent || null}</div>
          <div>{descriptionComponents}</div>
        </div>
        <CodeTabWrapper>
          <div>{codePreviewComponent}</div>
          <IBuilderCodeTabs selectedBlock={selectedBlock}>{codeTabsComponents}</IBuilderCodeTabs>
        </CodeTabWrapper>
      </TwoColumn>
    </MainWrapper>
  );
};

IBuilderFrameworkTab.displayName = 'IBuilderFrameworkTab';

export default IBuilderFrameworkTab;
