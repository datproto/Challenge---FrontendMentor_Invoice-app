import Image from 'next/image'
import { Moon, Sun } from '@/components/atoms/Icon'
import { useTheme } from 'next-themes'

function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex xl:flex-col justify-between w-full h-auto xl:w-auto xl:h-screen bg-[#373B53] dark:bg-navi-200 xl:rounded-r-2xl fixed">
      <div className="relative flex items-center justify-center w-[72px] h-[72px] bg-purple-200 rounded-r-2xl">
        <Image
          src="/assets/logo.svg"
          width="28px"
          height="26px"
          alt="logo"
          className="z-10"
        />
        <div className="absolute bottom-0 z-0 w-full bg-purple-100 rounded-tl-2xl rounded-br-2xl h-1/2"></div>
      </div>

      <div
        id="nav-user"
        className="flex xl:flex-col divide-[#494E6E] divide-x xl:divide-x-0 xl:divide-y"
      >
        <div className="w-[72px] h-[72px] flex items-center justify-center">
          {theme === 'light' ? (
            <Moon
              onClick={() => setTheme('dark')}
              className="cursor-pointer fill-blueGray-300 hover:fill-blueGray-100"
            />
          ) : (
            <Sun
              onClick={() => setTheme('light')}
              className="cursor-pointer fill-blueGray-300 hover:fill-blueGray-100"
            />
          )}
        </div>
        <div className="w-[72px] h-[72px] flex items-center justify-center">
          <Image
            src="/assets/image-avatar.jpg"
            width={40}
            height={40}
            alt="avatar"
            className="scale-[80%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
