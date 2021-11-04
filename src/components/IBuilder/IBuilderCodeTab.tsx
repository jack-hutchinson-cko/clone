import React, { FC, useRef, useEffect } from 'react';
import { get } from 'lodash';
import { MDXCodeSample } from 'src/components/CodeSample';
import { TabBody } from './IBuilderCodeTabs.styles';

type Props = {
  selectedLines?: never[];
  sourceCode: string;
};

const HEIGHT_OF_THE_LINE = 24;

const IBuilderCodeTab: FC<Props> = ({ children, selectedLines = [], sourceCode }) => {
  const tabBody = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (selectedLines[0] && tabBody.current) {
      tabBody.current.scrollTo(0, (selectedLines[0] - 1) * HEIGHT_OF_THE_LINE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLines[0]]);

  const { withBorder, withControls, isCollapsible, isEditMode, className } = get(
    children,
    'props.children.props',
    {},
  );

  return (
    <TabBody ref={tabBody}>
      <MDXCodeSample
        className={className}
        withBorder={withBorder}
        withControls={withControls}
        isCollapsible={isCollapsible}
        isEditMode={isEditMode}
        selectedLines={selectedLines}
      >
        {sourceCode}
      </MDXCodeSample>
    </TabBody>
  );
};

IBuilderCodeTab.displayName = 'IBuilderCodeTab';

export default IBuilderCodeTab;
