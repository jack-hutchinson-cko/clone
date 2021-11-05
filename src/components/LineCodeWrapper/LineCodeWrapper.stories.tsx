import { Story, Meta } from '@storybook/react';

import { RequestTagProps } from '../Tag/types';
import LineCode from '../LineCode';
import LineCodeWrapper from '.';

export const LineCodeWrapperStory: Story<RequestTagProps & { code: string }> = ({ type, code }) => {
  return (
    <LineCodeWrapper type={type}>
      <LineCode>{code}</LineCode>
    </LineCodeWrapper>
  );
};

LineCodeWrapperStory.storyName = 'LineCodeWrapper';

export default {
  title: 'LineCodeWrapper',
  component: LineCodeWrapper,
  args: {
    type: 'get',
    code: 'https://test.code.net',
  },
} as Meta;
