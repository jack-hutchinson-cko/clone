import { Story, Meta } from '@storybook/react';

import { SectionTag } from 'components/Tag';
import SectionLink from './SectionLink';

export const SectionLinkStory: Story = ({ title, titleUrl, description }) => {
  return (
    <SectionLink title={title} titleUrl={titleUrl} description={description}>
      <SectionTag title="Integration" url="/faq/integration" />
    </SectionLink>
  );
};

SectionLinkStory.storyName = 'SectionLink';
SectionLinkStory.args = {
  title: 'How do I add a new payment method to my account?',
  titleUrl: '/faq/integration/how-do-i-add-a-new-payment-method-to-my-account',
  description:
    "Typically, this means that the customer's card issuing bank (or the acquirer) has declined the transaction. For example, if...",
};

export default {
  title: 'SectionLink',
  component: SectionLink,
} as Meta;
