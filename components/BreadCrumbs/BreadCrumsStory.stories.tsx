import { Story, Meta } from '@storybook/react'
import BreadCrumbs, { Props } from './BreadCrumbs'

const Template: Story<Props> = (args) => <BreadCrumbs {...args} />

export const BreadCrumbsStory = Template.bind({})
BreadCrumbsStory.args = {
  breadCrumbsItem: [
    { name: 'path1', url: 'path1' },
    { name: 'path2', url: 'path1/path2' },
  ],
}

export default {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
} as Meta
