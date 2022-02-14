import React from 'react'

interface TextProps {
  tag: keyof JSX.IntrinsicElements
  children: React.ReactNode
  customClass?: string
}

function Text({ tag: Tag = 'h1', children, customClass, ...rest }: TextProps) {
  return (
    <Tag className={customClass} {...rest}>
      {children}
    </Tag>
  )
}

export { Text }
