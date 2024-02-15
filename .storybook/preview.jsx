/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { Global } from '@emotion/react';
import { bodyStyles } from '../src/shared/global';

const decorators = [
  (Story) => (
    <>
      <Global styles={bodyStyles} />
      <Story />
    </>
  ),
];

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

const preview = {
  parameters,
  decorators,
};

export default preview;
