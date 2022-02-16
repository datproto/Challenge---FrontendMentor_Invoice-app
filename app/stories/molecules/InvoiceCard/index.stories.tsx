import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InvoiceCard from '@/components/molecules/InvoiceCard'

import data from '@/public/mock/data.json'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/InvoiceCard',
  component: InvoiceCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    sku: { name: 'string' },
    dueDate: { name: 'number' },
    owner: { name: 'string' },
    amount: { name: 'number' },
    status: { name: 'string' },
  },
} as ComponentMeta<typeof InvoiceCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvoiceCard> = () => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((d, k) => (
        <InvoiceCard
          key={k}
          sku={d.id}
          dueDate={d.paymentDue}
          owner={d.clientName}
          amount={d.total}
          status={d.status}
        />
      ))}
    </div>
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sku: 'RT3080',
  dueDate: 1647561600000,
  owner: 'Dat Proto',
  amount: 56000,
  status: 'pending',
}
