import { Story, Meta } from '@storybook/react';

import ButtonLink from 'components/ButtonLink';
import ContentPanel from './ContentPanel';

export const ContentPanelDefaultStory: Story = () => {
  return (
    <ContentPanel variant="default" title="Frames" imgSrc="/docs/Collect payment/Frames.svg">
      <p>
        Frames is a highly customizable payment form, which allows customers to enter their payment
        details directly on your checkout page or in your app. We process these and exchange them
        for a secure, single-use token. You can then use this token to request a payment, without
        having to process or store any sensitive information yourself.
      </p>

      <a href="https://docs.checkout.com/integrate/frames">Learn more for web</a>
      <br />
      <a href="https://docs.checkout.com/integrate/frames-for-android">Learn more for mobile </a>
    </ContentPanel>
  );
};

export const ContentPanelHeadingStory: Story = () => {
  return (
    <ContentPanel
      variant="heading"
      title="Marketplace API reference"
      imgSrc="/docs/Collect payment/SDKs.svg"
    >
      <p>
        Our API reference lists all the endpoints and methods provided in the Marketplace solution.
      </p>
      <ButtonLink href="https://api-reference.checkout.com/preview/crusoe/#tag/Marketplace">
        Learn more
      </ButtonLink>
    </ContentPanel>
  );
};

export const ContentPanelECommerceStory: Story = () => {
  return (
    <ContentPanel
      variant="eCommerce"
      imgWidth={200}
      title="Magento 2"
      imgSrc="/docs/Integrate/SDKs/magento.svg"
    >
      <p>Integrating commerce, content and community to create engaging Web experiences.</p>

      <ul>
        <li>
          <a href="https://github.com/checkout/checkout-magento2-plugin">Get plugin ›</a>
        </li>
        <li>
          <a href="/integrate/e-commerce-platforms/magento-2">View installation guide ›</a>
        </li>
      </ul>
    </ContentPanel>
  );
};

ContentPanelDefaultStory.storyName = 'Default Content Panel';
ContentPanelDefaultStory.storyName = 'Heading Content Panel';
ContentPanelDefaultStory.storyName = 'eCommerce Content Panel';

export default {
  title: 'ContentPanel',
  component: ContentPanel,
} as Meta;