import { Story, Meta } from '@storybook/react';

import Tabs, { Tab } from '.';

export const TabsStory: Story = () => {
  return (
    <Tabs>
      <Tab title="Title 1">
        1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita delectus odio
        ratione placeat blanditiis, quia, sequi inventore in earum voluptate tenetur? Eos deserunt
        error nobis possimus.
      </Tab>
      <Tab title="Title 2" active>
        2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores
        exercitationem natus, veritatis, excepturi facere quasi neque commodi, temporibus atque
        voluptatum doloribus id consequatur in cupiditate officia. Iusto, libero voluptatem.
      </Tab>
      <Tab title="Title 3">
        3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis reiciendis
        recusandae libero fugit iusto, eum quos dolor! Doloremque ex inventore quam ab totam sint
        perferendis
      </Tab>
      <Tab title="Title 4">
        4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nihil eveniet sint
        placeat, ipsa ex quis, expedita animi perferendis doloremque rem illo rerum dolor. Voluptate
        iure dolorem eos veritatis iste!
      </Tab>
    </Tabs>
  );
};

TabsStory.storyName = 'Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
} as Meta;
