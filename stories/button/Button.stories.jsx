import React from 'react';
import { Button } from 'grommet';

export default {
  title: 'Controls/Button',
  component: Button,
  args: {
    label: 'Button Label',
    primary: false,
  },
  argTypes: {
    label: {},
    primary: {},
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
