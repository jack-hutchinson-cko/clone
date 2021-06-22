import { Story, Meta } from '@storybook/react';
import { RequestTagProps } from '../Tag/types';
import LineCode from '../LineCode';
import LineCodeWrapper from './LineCodeWrapper';

export const LineCodeWrapperStory: Story<RequestTagProps & { code: string }> = ({ type, code }) => {
  return (
    <LineCodeWrapper type={type}>
      <LineCode>{code}</LineCode>
    </LineCodeWrapper>
  );
};

LineCodeWrapperStory.storyName = 'LineCodeWrapper';
LineCodeWrapperStory.args = {
  type: 'get',
  code: 'https://test.code.net',
};

export default {
  title: 'LineCodeWrapper',
  component: LineCodeWrapper,
} as Meta;
