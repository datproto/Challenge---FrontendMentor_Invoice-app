import React from 'react'

interface HeaderProps {
  d: any
}

function Header({ d }: HeaderProps) {
  const count = d.length

  return <div>{count}</div>
}

export default Header
