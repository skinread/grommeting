import React from 'react';
import { RadioButton as GrommetRadioButton } from 'grommet';

export default {
  title: 'Controls/Inputs/Radio Button',
  component: GrommetRadioButton,
  args: {
    label: 'Radio button label',
  },
};

const Template = (args) => <GrommetRadioButton {...args} checked />;

export const RadioButton = Template.bind({});
