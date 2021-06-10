/* eslint-disable react/no-array-index-key */
import { Story, Meta } from '@storybook/react';
import { Table, TableHead, TableHeadSticky, TableBody, TableRow, TableCell } from '@cko/primitives';

export const TableStory: Story = () => {
  return (
    <Table>
      <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
      <TableBody>
        <TableRow>
          <TableCell>Value for 1</TableCell>
          <TableCell>Value for 2</TableCell>
          <TableCell>Value for 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Value for 1</TableCell>
          <TableCell>Value for 2</TableCell>
          <TableCell>Value for 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Value for 1</TableCell>
          <TableCell>Value for 2</TableCell>
          <TableCell>Value for 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Value for 1</TableCell>
          <TableCell>Value for 2</TableCell>
          <TableCell>Value for 3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

TableStory.storyName = 'Table';
TableStory.argTypes = {
  tableLayout: {
    description: `
    "inherit" | "initial" | "auto" | "fixed" | undefined`,
  },
};

export const TableHeadStory: Story = (args) => {
  return (
    <Table>
      <TableHead {...args} />
      <TableBody>
        <TableRow>
          <TableCell>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nemo!
          </TableCell>
          <TableCell>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore porro ex deleniti
            laborum expedita fugiat.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

TableHeadStory.storyName = 'TableHead';
TableHeadStory.args = {
  headers: ['Some title 1', 'Some title 2'],
};
TableHeadStory.argTypes = {
  headers: {
    description: `
    string[] | undefined`,
  },
};

export const TableHeadStickyStory: Story = (args) => {
  return (
    <div style={{ height: '150px', overflowY: 'auto' }}>
      <Table>
        <TableHeadSticky {...args} />
        <TableBody>
          <TableRow>
            <TableCell>Value for 1</TableCell>
            <TableCell>Value for 2</TableCell>
            <TableCell>Value for 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value for 1</TableCell>
            <TableCell>Value for 2</TableCell>
            <TableCell>Value for 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value for 1</TableCell>
            <TableCell>Value for 2</TableCell>
            <TableCell>Value for 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value for 1</TableCell>
            <TableCell>Value for 2</TableCell>
            <TableCell>Value for 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
TableHeadStickyStory.storyName = 'TableHeadSticky';
TableHeadStickyStory.args = TableHeadStory.args;
TableHeadStickyStory.argTypes = {
  headers: {
    description: `
    string[] | undefined`,
  },
};

export const TableBodyStory: Story = () => {
  return (
    <Table>
      <TableHead headers={['Title 1', 'Title 2']} />
      <TableBody>
        <TableRow>
          <TableCell>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nemo!
          </TableCell>
          <TableCell>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore porro ex deleniti
            laborum expedita fugiat.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
TableBodyStory.storyName = 'TableBody';

export const TableRowStory: Story = () => {
  const tableItems: Array<{ id: number; active: boolean; data: string[] }> = [
    { id: 1, active: false, data: ['Value for 1', 'Value for 2', 'Value for 3'] },
    { id: 2, active: false, data: ['Value for 1', 'Value for 2', 'Value for 3'] },
    { id: 3, active: true, data: ['Value for 1', 'Value for 2', 'Value for 3'] },
    { id: 4, active: false, data: ['Value for 1', 'Value for 2', 'Value for 3'] },
  ];

  return (
    <Table>
      <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
      <TableBody>
        {tableItems.map(({ id, active, data }) => {
          return (
            <TableRow key={id} active={active}>
              {data.map((cell, ind) => (
                <TableCell key={ind}>{cell}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
TableRowStory.storyName = 'TableRow';
TableRowStory.argTypes = {
  active: {
    description: `
    boolean | undefined`,
  },
  onInteraction: {
    description: `
    Function | undefined`,
  },
};

export const TableCellStory: Story = () => {
  return (
    <Table>
      <TableHead headers={['1', '2']} />
      <TableBody>
        <TableRow>
          <TableCell>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nemo!
          </TableCell>
          <TableCell>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore porro ex deleniti
            laborum expedita fugiat.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

TableCellStory.storyName = 'TableCell';
TableCellStory.argTypes = {
  as: {
    defaultValue: 'th',
    description: `
    td" | "th" | undefined`,
  },
};

export default {
  title: 'Table',
  component: Table,
} as Meta;
