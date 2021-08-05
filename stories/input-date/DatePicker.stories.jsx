import React from 'react';
import { DateInput } from 'grommet';

export default {
  title: 'Controls/Inputs/Date Picker',
  component: DateInput,
  args: {
    label: 'Checkbox label',
    format: 'dd/mm/yyyy',
  },
};

const Template = (args) => <DateInput {...args} />;

export const DatePicker = Template.bind({});
