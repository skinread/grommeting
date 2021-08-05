import React from 'react';
import { CheckBox } from 'grommet';

export default {
  title: 'Controls/Inputs/Checkbox',
  component: CheckBox,
  args: {
    label: 'Checkbox label',
  },
};

const Template = (args) => <CheckBox {...args} />;

export const Checkbox = Template.bind({});
