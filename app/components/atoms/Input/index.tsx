import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

// import _ from 'lodash'

import './styles.css'

interface InputProps {
  type?: 'dropdown' | 'date' | 'text' | 'email'
  label?: string
  error?: string
  items?: any[]
}

const InputText = ({}) => {
  return (
    <>
      <input type="text" />
    </>
  )
}

const InputEmail = ({}) => {
  return (
    <>
      <input type="email" />
    </>
  )
}

const InputDropdown = ({ items }: InputProps) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [value, setValue] = useState('Net 30 days')
  const choice = (value: string, index: any) => {
    setActive((active) => (active === index ? null : index))
    setValue(value)
    setOpen(!open)
  }
  return (
    <>
      <div
        className="flex items-center justify-between input group-hover:outline-purple-200"
        onClick={() => setOpen(!open)}
      >
        {value}
        <Image
          src="assets/icon-arrow-down.svg"
          width={11}
          height={7}
          alt="arrow-down-icon"
        />
      </div>
      {open && (
        <div className="absolute dropdown">
          {items &&
            items.map((i, k) => (
              <div
                key={k}
                className={`${active === k && 'active'}`}
                onClick={() => choice(i, k)}
              >
                {i}
              </div>
            ))}
        </div>
      )}
    </>
  )
}

const InputDate = ({}) => {
  const [startDate, setStartDate] = useState(new Date())
  // const years = _.range(1990, new Date().getFullYear() + 1, 1)
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

  const CustomDateInput = ({
    value,
    onClick,
  }: {
    value?: any
    onClick?: any
  }) => (
    <div
      className="flex items-center justify-between input group-hover:outline-purple-200"
      onClick={onClick}
    >
      {value}
      <Image
        src="assets/icon-calendar.svg"
        width={16}
        height={16}
        alt="arrow-calendar"
      />
    </div>
  )

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
      customInput={<CustomDateInput />}
      renderCustomHeader={({
        date,
      }: // changeYear,
      // changeMonth,
      // decreaseMonth,
      // increaseMonth,
      // prevMonthButtonDisabled,
      // nextMonthButtonDisabled,
      {
        date?: any
        changeYear?: any
        changeMonth?: any
        decreaseMonth?: any
        increaseMonth?: any
        prevMonthButtonDisabled?: any
        nextMonthButtonDisabled?: any
      }) => (
        <div className="flex justify-between w-full">
          <Image
            src="assets/icon-arrow-left.svg"
            width={14}
            height={7}
            className="scale-50"
            alt="arrow"
          />
          <div className="flex items-center justify-center gap-1">
            <Text tag="h4">{months[new Date(date).getMonth()]}</Text>
            <Text tag="h4">{new Date(date).getFullYear()}</Text>
          </div>
          <Image
            src="assets/icon-arrow-right.svg"
            width={14}
            height={7}
            className="scale-50"
            alt="arrow"
          />
        </div>
      )}
    />
  )
}

function Input({ type, label, items }: InputProps) {
  const chooseInput = (t?: string) => {
    switch (t) {
      case 'text':
        return <InputText />
      case 'email':
        return <InputEmail />
      case 'dropdown':
        return <InputDropdown items={items} />
      case 'date':
        return <InputDate />
      default:
        return <InputText />
    }
  }

  return (
    <div
      className={`${
        type === 'dropdown' && 'group'
      } relative flex flex-col gap-2.5`}
    >
      <label>
        <Text tag="h4" customClass="text-blueGray-300 dark:text-white">
          {label}
        </Text>
      </label>
      {chooseInput(type)}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  label: 'Field',
  error: 'No error',
}

export default Input
