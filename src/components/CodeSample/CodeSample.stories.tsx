import { Story, Meta } from '@storybook/react';
import CodeSample from './CodeSample';
import { CodeSampleProps } from './type';

const Template: Story<CodeSampleProps> = (args) => <CodeSample {...args} />;

export const CodeSampleStory = Template.bind({});

CodeSampleStory.args = {
  code: `{
    "destination": {
      "type": "token",
      "token": "tok_ihvkileifkzebkgnhkskbglyte",
      "first_name" : "John",
      "last_name" : "Smith"
    },
    "amount": 1000,
    "currency": "GBP",
    "fund_transfer_type": "FD",
    "reference": "ORD-5023-4E89",
    "processing": {
      "senderInformation": {
        "reference": "87654321",
        "accountNumber": "12345678",
        "firstName": "ABC",
        "lastName": "International",
        "address": "1 High Street",
        "city": "London",
        "country": "GB",
        "sourceOfFunds": "DepositAccount"
      }
    }  
  }`,
  language: 'javascript',
};

export default {
  title: 'CodeSample',
  component: CodeSample,
} as Meta;
