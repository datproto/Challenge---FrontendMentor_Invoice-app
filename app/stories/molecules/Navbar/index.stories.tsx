import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Navbar from '@/components/molecules/Navbar'

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

export const Mobile = () => (
  <div className="max-w-[639px] xl:max-w-none xl:h-96">
    <Navbar />
  </div>
)
