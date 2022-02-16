import React from 'react'

interface PriceProps {
  cur?: string
  amount: number
}

function Price({ cur, amount }: PriceProps) {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: cur,
  }).format(amount)

  return <>{price}</>
}

Price.defaultProps = {
  cur: 'USD',
  amount: 0,
}

export { Price }
