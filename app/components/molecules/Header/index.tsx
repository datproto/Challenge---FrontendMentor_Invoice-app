import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { Text } from '@/components/atoms/Text'
import React from 'react'

interface HeaderProps {
  d: any
}

function Header({ d }: HeaderProps) {
  const count = d.length

  return (
    <div className="flex items-center justify-between gap-20">
      <div className="flex flex-col gap-1">
        <Text tag="h2">Invoices</Text>
        <Text tag="p" customClass="type-2 text-blueGray-200">
          {count} invoices
        </Text>
      </div>
      <div className="flex items-center gap-5">
        <Input
          type="dropdown"
          items={['Draft', 'Pending', 'Paid']}
          customInput="border-0"
          placeholder="Filter"
        />
        <Button type="1st">
          <div className="flex">
            New <span className="hidden md:block ml-[3px]"> Invoice</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Header
