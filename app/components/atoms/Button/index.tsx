import React from 'react'

import { Text } from '@/components/atoms/Text'
import Image from 'next/image'

interface ButtonProps {
  type?: string
  customClass?: string
  children: React.ReactNode
}

const Btn = ({ customClass, children }: ButtonProps) => {
  return (
    <button className={`flex items-center p-[6px] md:p-2 ${customClass}`}>
      {children}
    </button>
  )
}

const BtnFisrt = ({ children }: ButtonProps) => {
  return (
    <Btn customClass="flex bg-purple-200 hover:bg-purple-100 rounded-full gap-4">
      <div className="flex items-center justify-center rounded-full p-[11px] text-white bg-white">
        <Image src="assets/icon-plus.svg" width={11} height={11} alt="icon" />
      </div>
      <div className="pr-2">
        <Text tag="h4" customClass="text-white">
          {children}
        </Text>
      </div>
    </Btn>
  )
}

const BtnSecond = ({ children }: ButtonProps) => {
  return (
    <Btn customClass="flex bg-purple-200 hover:bg-purple-100 rounded-full gap-4">
      <div className="py-2 px-4">
        <Text tag="h4" customClass="text-white">
          {children}
        </Text>
      </div>
    </Btn>
  )
}

const BtnThird = ({ children }: ButtonProps) => {
  return (
    <Btn customClass="group flex bg-[#F9FAFE] hover:bg-blueGray-100 dark:bg-navi-100 dark:hover:bg-white rounded-full gap-4">
      <div className="py-2 px-4">
        <Text
          tag="h4"
          customClass="text-blueGray-300 dark:text-blueGray-100 dark:group-hover:text-blueGray-300"
        >
          {children}
        </Text>
      </div>
    </Btn>
  )
}

const BtnFourth = ({ children }: ButtonProps) => {
  return (
    <Btn customClass="flex bg-[#373B53] hover:bg-dark dark:bg-navi-100 dark:hover:bg-navi-200 rounded-full gap-4">
      <div className="py-2 px-4">
        <Text tag="h4" customClass="text-blueGray-200 dark:text-blueGray-100">
          {children}
        </Text>
      </div>
    </Btn>
  )
}

const BtnFifth = ({ children }: ButtonProps) => {
  return (
    <Btn customClass="flex bg-red-200 hover:bg-red-100 rounded-full gap-4">
      <div className="py-2 px-4">
        <Text tag="h4" customClass="text-white">
          {children}
        </Text>
      </div>
    </Btn>
  )
}

const BtnSixth = ({ children }: ButtonProps) => {
  return (
    <Btn customClass="group w-full flex bg-[#F9FAFE] hover:bg-blueGray-100 rounded-full gap-4">
      <div className="py-2 w-full flex justify-center">
        <Text tag="h4" customClass="text-blueGray-300">
          {children}
        </Text>
      </div>
    </Btn>
  )
}

const Button = ({ type, children }: ButtonProps) => {
  const chooseBtn = (t?: string) => {
    switch (t) {
      case '1st':
        return <BtnFisrt>{children}</BtnFisrt>
      case '2nd':
        return <BtnSecond>{children}</BtnSecond>
      case '3rd':
        return <BtnThird>{children}</BtnThird>
      case '4th':
        return <BtnFourth>{children}</BtnFourth>
      case '5th':
        return <BtnFifth>{children}</BtnFifth>
      case '6th':
        return <BtnSixth>{children}</BtnSixth>
      default:
        return <BtnFisrt>{children}</BtnFisrt>
    }
  }

  return <>{chooseBtn(type)}</>
}

export default Button
