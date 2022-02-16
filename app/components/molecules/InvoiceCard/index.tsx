import { Text } from '@/components/atoms/Text'
import { FormatDate, FormatPrice } from '@/components/atoms/Helpers'
import Image from 'next/image'

interface InvoiceCardProps {
  sku: string
  dueDate: number | any
  owner: string
  amount: number
  status: string
}

const InvoiceCard = ({
  sku,
  dueDate,
  owner,
  amount,
  status,
}: InvoiceCardProps) => {
  return (
    <div className="flex max-w-[703px] flex-wrap p-6 bg-white rounded-lg gap-y-6 md:grid md:gap-0 dark:bg-navi-200 md:grid-rows-1 md:grid-cols-5 xl:py-4">
      <div className="flex w-1/2 md:items-center md:w-auto">
        <Text tag="h4">
          <span className="text-blueGray-300">#</span>
          {sku}
        </Text>
      </div>
      <div className="items-center hidden md:flex">
        <Text
          tag="p"
          customClass="text-blueGray-300 dark:text-blueGray-100 type-1"
        >
          <span className="text-blueGray-200 dark:text-blueGray-100">Due</span>{' '}
          <FormatDate d={dueDate} />
        </Text>
      </div>
      <div className="flex justify-end w-1/2 md:justify-start md:items-center md:justify-self-start md:w-auto">
        <Text tag="p" customClass="text-[#858BB2] dark:text-white type-1">
          {owner}
        </Text>
      </div>
      <div className="flex flex-col justify-center w-1/2 gap-2 md:gap-0 md:w-auto">
        <Text
          tag="p"
          customClass="text-blueGray-300 dark:text-blueGray-100 type-1 md:hidden"
        >
          <span className="text-blueGray-200 dark:text-blueGray-100">Due</span>{' '}
          <FormatDate d={dueDate} />
        </Text>
        <Text tag="h3">
          <FormatPrice amount={amount} />
        </Text>
      </div>
      <div className="flex justify-end w-1/2 md:justify-start md:w-auto md:items-center md:gap-5 justify-self-end md:justify-self-start">
        <div
          className={`
        ${
          status === 'paid'
            ? 'bg-[#33D69F]/[5.71%]'
            : status === 'pending'
            ? 'bg-[#FF8F00]/[5.71%]'
            : 'bg-[#373B53]/[5.71%] dark:bg-blueGray-100/[5.71%]'
        }
        py-3 px-[18px] w-[104px] max-w-[104px] rounded-md
        flex items-center justify-center gap-2
      `}
        >
          <div
            className={`
            ${
              status === 'paid'
                ? 'bg-[#33D69F]'
                : status === 'pending'
                ? 'bg-[#FF8F00]'
                : 'bg-[#373B53] dark:bg-blueGray-100'
            }
            p-1 rounded-full
          `}
          />
          <Text
            tag="h4"
            customClass={`
            ${
              status === 'paid'
                ? 'text-[#33D69F]'
                : status === 'pending'
                ? 'text-[#FF8F00]'
                : 'text-[#373B53] dark:text-blueGray-100'
            } capitalize
          `}
          >
            {status}
          </Text>
        </div>
        <div className="hidden md:block">
          <Image
            src="/assets/icon-arrow-right.svg"
            width={7}
            height={10}
            alt="arrow-right"
            className="w-1 h-2"
          />
        </div>
      </div>
    </div>
  )
}

export default InvoiceCard
