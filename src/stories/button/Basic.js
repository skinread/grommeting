import React from 'react';
import { Button } from 'grommet';

export default {
  title: 'Controls/Button',
  component: Button,
  args: {
    label: 'Button Label',
    reverse: false,
  },
  argTypes: {
    label: {},
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      default: {
        value: 'medium',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Reverse = Template.bind({});
Reverse.args = {
  reverse: true,
};
