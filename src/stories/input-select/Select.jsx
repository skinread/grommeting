import React from 'react';
import { Select as GrommetSelect } from 'grommet';

export default {
  title: 'Controls/Inputs/Select',
  component: GrommetSelect,
  args: {
    options: ['item one', 'item two', 'item three', 'item four'],
    placeholder: 'Select an option',
  },
};

const Template = (args) => <GrommetSelect {...args} width="100%" />;

export const Select = Template.bind({});
