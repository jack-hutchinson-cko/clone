import { Story, Meta } from '@storybook/react';

import SideBar from 'src/components/SideBar';
import { sectionList } from 'src/mocks/faqSection';

import SectionList from './SectionList';

export const SectionListStory: Story = () => {
  return <SideBar menuWidget={<SectionList activeItem="My account" list={sectionList} />} />;
};

SectionListStory.storyName = 'SectionList';

export default {
  title: 'SectionList',
  components: SectionList,
} as Meta;
