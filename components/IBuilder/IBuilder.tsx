import React, { useState, FC, ReactNode } from 'react';
import { get } from 'lodash';
import { getChildComponentName, getChildWithProps } from './utils';
import { FrameWorkSwitcher } from './IBuilder.styles';
import { SelectedFramework } from './types';
import FrameWorkSwitcherPortal from './FrameworkSwitcherPortal';

const getInnerComponents = (
  children: ReactNode,
): {
  iBuilderHeaderComponent: ReactNode;
  iBuilderFrameWorksComponent: ReactNode;
  iBuilderFrameWorksComponents: ReactNode;
} => {
  let iBuilderFrameWorksComponent = null;
  let iBuilderHeaderComponent = null;
  const iBuilderFrameWorksComponents: ReactNode[] = [];

  React.Children.toArray(children).forEach((child) => {
    const componentName = getChildComponentName(child);

    if (componentName === 'IBuilderHeader') {
      iBuilderHeaderComponent = child;
    } else if (componentName === 'IBuilderFrameWorks') {
      iBuilderFrameWorksComponent = child;
    } else if (componentName === 'IBuilderFrameworkTab') {
      iBuilderFrameWorksComponents.push(child);
    }
  });

  return { iBuilderHeaderComponent, iBuilderFrameWorksComponent, iBuilderFrameWorksComponents };
};

const getFrameworkTab = ({
  iBuilderFrameWorksComponents,
  iBuilderHeaderComponent,
  selectedFrameworks,
}: {
  iBuilderFrameWorksComponents: ReactNode;
  iBuilderHeaderComponent: ReactNode;
  selectedFrameworks: SelectedFramework;
}): ReactNode => {
  if (iBuilderFrameWorksComponents) {
    const frameWorkTabComponent = React.Children.toArray(iBuilderFrameWorksComponents).find(
      (frameWorkTab) =>
        get(frameWorkTab, 'props.frontEnd') === selectedFrameworks.frontEnd &&
        get(frameWorkTab, 'props.backEnd') === selectedFrameworks.backEnd,
    );

    return getChildWithProps(frameWorkTabComponent, {
      headerComponent: iBuilderHeaderComponent,
    });
  }

  return null;
};

const getDefaultSelectedFrameWorks = (
  iBuilderFrameWorksComponent: ReactNode,
): SelectedFramework => {
  const [frontEnd, backEnd] = get(iBuilderFrameWorksComponent, 'props.default', []);

  return { frontEnd, backEnd };
};

const IBuilder: FC = ({ children }) => {
  const { iBuilderHeaderComponent, iBuilderFrameWorksComponent, iBuilderFrameWorksComponents } =
    getInnerComponents(children);

  const [selectedFrameworks, setSelectedFrameWorks] = useState(
    getDefaultSelectedFrameWorks(iBuilderFrameWorksComponent),
  );

  const frameWorkTab = getFrameworkTab({
    iBuilderFrameWorksComponents,
    iBuilderHeaderComponent,
    selectedFrameworks,
  });

  const iBuilderFrameWorks = getChildWithProps(iBuilderFrameWorksComponent, {
    selectedFrameworks,
    setSelectedFrameWorks,
  });

  const isBrowser = typeof window !== 'undefined';

  return (
    <div>
      {isBrowser ? (
        <FrameWorkSwitcherPortal rootId="framework-switcher">
          <FrameWorkSwitcher>{iBuilderFrameWorks}</FrameWorkSwitcher>
        </FrameWorkSwitcherPortal>
      ) : null}
      <div>{frameWorkTab}</div>
    </div>
  );
};

export default IBuilder;
