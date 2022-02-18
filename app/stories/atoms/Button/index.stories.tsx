import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '@/components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      name: 'Button type',
      options: ['1st', '2nd', '3rd', '4th', '5th', '6th'],
    },
    children: {
      name: 'Content',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button type={args.type}>{args.children}</Button>
)

export const First = Template.bind({})
First.args = {
  type: '1st',
  children: 'New Invoice',
}

export const Second = Template.bind({})
Second.args = {
  type: '2nd',
  children: 'Mark as Paid',
}

export const Third = Template.bind({})
Third.args = {
  type: '3rd',
  children: 'Edit',
}

export const Fourth = Template.bind({})
Fourth.args = {
  type: '4th',
  children: 'Save as Draft',
}

export const Fifth = Template.bind({})
Fifth.args = {
  type: '5th',
  children: 'Delete',
}

export const Sixth = Template.bind({})
Sixth.args = {
  type: '6th',
  children: '+ Add New Item',
}
