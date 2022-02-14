interface ColorProps {
  hex: string
  rgb: string
  hsl: string
}

export const Color = ({
  hex = '#fff',
  rgb = '255,255,255',
  hsl = '255,100,100',
}: ColorProps) => {
  return (
    <div className="flex flex-col w-64 gap-6 p-5 border border-blueGray-100 rounded-2xl">
      <div
        className="flex items-start justify-start p-4 pt-16 text-white font-medium rounded-2xl"
        style={{ backgroundColor: hex }}
      >
        {hex}
      </div>
      <div className="flex flex-col text-sm gap-2">
        <div className="flex items-center gap-4 font-medium">
          <span className="w-10 text-blueGray-200">RGB</span>
          <span className="text-dark">{rgb}</span>
        </div>
        <div className="flex items-center gap-4 font-medium">
          <span className="w-10 text-blueGray-200">HSL</span>
          <span className="text-dark">{hsl}</span>
        </div>
      </div>
    </div>
  )
}
