import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Header from '@/components/molecules/Header'

import data from '@/public/mock/data.json'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Mobile = () => <Header d={data} />
