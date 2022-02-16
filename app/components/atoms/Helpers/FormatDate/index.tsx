import React from 'react'

interface DateTimeProps {
  d: number | any
}

function DateTime({ d }: DateTimeProps) {
  let dConvert
  if (typeof d === 'string') {
    dConvert = parseInt(d)
  } else {
    dConvert = d
  }

  const dateRaw = new Date(dConvert)

  const day = dateRaw.getDate()
  const month = dateRaw.getMonth()
  const year = dateRaw.getFullYear()

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return (
    <>
      {day} {months[month]} {year}
    </>
  )
}

export { DateTime }
