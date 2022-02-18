import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typo from './typo'

export default {
  title: 'Atoms/Typo',
  component: Typo,
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'title',
    },
    tag: {
      name: 'tag',
      defaultValue: 'h1',
      description: 'Tag for text element',
      options: ['h1', 'h2', 'h3', 'h4', 'p'],
      control: { type: 'select' },
    },
    customClass: {
      name: 'Custom P',
      type: { name: 'string', required: false },
      defaultValue: '',
    },
    children: {
      name: 'content',
      defaultValue: 'Aliquam porttitor mauris sit amet orci Aenean',
    },
  },
} as ComponentMeta<typeof Typo>

const Template: ComponentStory<typeof Typo> = (args) => (
  <Typo title={args.title} tag={args.tag} customClass={args.customClass}>
    {args.children}
  </Typo>
)

export const H1 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  title: 'H1  |  Spartan Bold  |  32px  |  36px Line  |  -1 Spacing',
}

export const H2 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H2.args = {
  tag: 'h2',
  title: 'H2  |  Spartan Bold  |  20px  |  22px Line  |  -0.63 Spacing',
}

export const H3 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H3.args = {
  tag: 'h3',
  title: 'H3  |  Spartan Bold  |  16px  |  24px Line  |  -0.8 Spacing',
}

export const H4 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H4.args = {
  tag: 'h4',
  title: 'H4  |  Spartan Bold  |  12px  |  15px Line  |  -0.25 Spacing',
}

export const P = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
P.args = {
  tag: 'p',
  customClass: 'type-1',
  title: 'Body 1  |  Spartan Medium  |  12px  |  15px Line  |  -0,25 Spacing',
  children:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.\
    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
}
