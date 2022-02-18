import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Input from '@/components/atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const Text = () => <Input type="text" />

export const Dropdown = () => (
  <div className="h-80">
    <Input
      type="dropdown"
      items={[
        'Net 1 Day',
        'Net 7 Days',
        'Net 14 Days',
        <div key="any">Something</div>,
      ]}
    />
  </div>
)

export const Calendar = () => (
  <div className="h-80">
    <Input type="date" />
  </div>
)
