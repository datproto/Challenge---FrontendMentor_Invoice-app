import React from 'react'

import { Text } from '@/components/atoms/Text'

interface TypoProps {
  title: string
  tag: keyof JSX.IntrinsicElements
  customClass?: string
  children: React.ReactNode
}

const Typo = ({ tag, title, customClass, children }: TypoProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Text tag="p" customClass="text-blueGray-300 type-2">
        {title}
      </Text>
      <Text tag={tag} customClass={customClass}>
        {children}
      </Text>
    </div>
  )
}

export default Typo
