import { Story, Meta } from '@storybook/react';
import Tabs from './Tabs';
import TabHead, { Props } from './TabHead';
import TabBody from './TabBody';
import TabRow from './TabRow';

export const TabsStory: Story<Props & { tabItems: JSX.Element[] | string[] }> = ({
  headers,
  activeTab,
  tabItems,
}) => {
  return (
    <Tabs>
      <TabHead headers={headers} activeTab={activeTab} />
      <TabBody>
        {tabItems.map((tabItem, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <TabRow key={index}>{tabItem}</TabRow>
        ))}
      </TabBody>
    </Tabs>
  );
};

export default {
  title: 'Tabs',
  component: TabHead,
  argTypes: {
    headers: {
      description: 'Array of titles',
    },
    activeTab: {
      defaultValue: 0,
      description: 'Index of the active tab from which to start rendering (optional)',
    },
  },
  args: {
    headers: ['Title 1', 'Title 2', 'Title 3', 'Title 4'],
    activeTab: 1,
    tabItems: [
      `1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita delectus odio
      ratione placeat blanditiis, quia, sequi inventore in earum voluptate tenetur? Eos deserunt
      error nobis possimus.`,
      `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores
      exercitationem natus, veritatis, excepturi facere quasi neque commodi, temporibus atque
      voluptatum doloribus id consequatur in cupiditate officia. Iusto, libero voluptatem.`,
      `3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis reiciendis recusandae
      libero fugit iusto, eum quos dolor! Doloremque ex inventore quam ab totam sint perferendis`,
      `4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nihil eveniet sint placeat,
      ipsa ex quis, expedita animi perferendis doloremque rem illo rerum dolor. Voluptate iure
      dolorem eos veritatis iste!`,
    ],
  },
} as Meta;
