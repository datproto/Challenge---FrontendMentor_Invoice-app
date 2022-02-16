import * as NextImage from 'next/image'
import { setupWorker, rest } from 'msw'

import '@/styles/globals.css'

if (typeof global.process === 'undefined') {
  const worker = setupWorker(
    rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
      return res(ctx.json({ name: 'John Doe' }))
    })
  )
  worker.start()
}

const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  )
})

const customViewports = {
  sm: {
    name: 'Mobile',
    styles: {
      width: '640px',
      height: '360px',
    },
  },
  md: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  lg: {
    name: 'Tablet - Large',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  xl: {
    name: 'Laptop',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  '2xl': {
    name: 'Desktop',
    styles: {
      width: '1536',
      height: '864px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  // layout: 'fullscreen',
}