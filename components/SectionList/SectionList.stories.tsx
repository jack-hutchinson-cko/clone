import { Story, Meta } from '@storybook/react';

import SideBar from 'components/SideBar';
import { sectionList } from 'mocks/faqSection';

import SectionList from './SectionList';

export const SectionListStory: Story = () => {
  return <SideBar menuWidget={<SectionList activeItem="My account" list={sectionList} />} />;
};

SectionListStory.storyName = 'SectionList';

export default {
  title: 'SectionList',
  components: SectionList,
} as Meta;
