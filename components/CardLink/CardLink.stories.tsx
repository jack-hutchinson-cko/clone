import { Story, Meta } from '@storybook/react';
import ArrowLink from 'components/ArrowLink';
import CardLink, { Props } from './CardLink';

export const CardLinkStory: Story<Props & { href: string; linkName: string }> = ({
  href,
  linkName,
  ...args
}) => {
  return (
    <CardLink {...args}>
      <ArrowLink title={linkName} href={href} />
    </CardLink>
  );
};

CardLinkStory.args = {
  srcImg:
    'https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/#How_To_Set_Background_Text_Color',
  title: 'Android',
  href: 'https://assets.checkout.com/docs/downloads/multi_iframes_new.zip',
  linkName: 'View on GitHub',
};

export default {
  title: 'CardLink',
  component: CardLink,
} as Meta;
