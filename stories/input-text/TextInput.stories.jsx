import React from 'react';
import { TextInput } from 'grommet';

export default {
  title: 'Controls/Inputs/Text',
  component: TextInput,
  args: {
    placeholder: 'Type your text here',
  },
};

const Template = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
