import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Button from '@/components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const First = () => <Button type="1st">New Invoice</Button>

export const Second = () => <Button type="2nd">Mark as Paid</Button>

export const Third = () => <Button type="3rd">Edit</Button>

export const Fourth = () => <Button type="4th">Save as Draft</Button>

export const Fifth = () => <Button type="5th">Delete</Button>

export const Sixth = () => <Button type="6th">+ Add New Item</Button>
