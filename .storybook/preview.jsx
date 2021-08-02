import React from 'react';
import { addDecorator } from '@storybook/react';
import { Grommet } from 'grommet';
import { Theme } from '../src/themes/heyhubble';

addDecorator(Story => (
  <Grommet theme={Theme}>
    <Story />
  </Grommet>
));

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: {
  //     method: 'alphabetical',
  //     order: ['All'],
  //   },
  // },
  paddings: {
    default: 'Medium',
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
  },
};
