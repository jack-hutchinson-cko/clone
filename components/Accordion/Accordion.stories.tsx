import { Story, Meta } from '@storybook/react';
import React from 'react';
import { AccordionProps } from './types';
import Accordion, { AccordionHead, AccordionBody } from '.';

export const AccordionStory: Story<AccordionProps & { content: string | JSX.Element }> = ({
  content,
  ...args
}) => {
  return (
    <>
      <Accordion {...args}>{content}</Accordion>
      <Accordion {...args}>{content}</Accordion>
      <Accordion {...args}>{content}</Accordion>
    </>
  );
};

AccordionStory.storyName = 'Accordion';
AccordionStory.args = {
  title: 'Example title',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, exercitationem',
};

export const AccordionCustomStory: Story<
  AccordionProps & { titleCustom: string | JSX.Element; content: string | JSX.Element }
> = ({ titleCustom, content }) => {
  return (
    <>
      <Accordion>
        <AccordionHead>{titleCustom}</AccordionHead>
        <AccordionBody>{content}</AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHead>{titleCustom}</AccordionHead>
        <AccordionBody>{content}</AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHead>{titleCustom}</AccordionHead>
        <AccordionBody>{content}</AccordionBody>
      </Accordion>
    </>
  );
};

AccordionCustomStory.storyName = 'Accordion Custom';
AccordionCustomStory.args = {
  titleCustom: <div>Title in div</div>,
  content: <p>Content in Paragraph</p>,
};

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta;
