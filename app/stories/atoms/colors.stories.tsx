import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Color } from './colors'

export default {
  title: 'Atoms/Color',
  component: Color,
} as ComponentMeta<typeof Color>

export const Palette = () => {
  const colors = [
    ['#7C5DFA', 'rgb(124, 93, 250)', 'hsl(252, 94%, 67%)'],
    ['#9277FF', 'rgb(149, 119, 255)', 'hsl(252, 100%, 73%)'],
    ['#1E2139', 'rgb(30, 33, 57)', 'hsl(233, 31%, 17%)'],
    ['#252945', 'rgb(37, 41, 69)', 'hsl(233, 30%, 21%)'],
    ['#DFE3FA', 'rgb(223, 227, 250)', 'hsl(231, 73%, 93%)'],
    ['#888EB0', 'rgb(136, 142, 176)', 'hsl(231, 20%, 61%)'],
    ['#7E88C3', 'rgb(126, 136, 195)', 'hsl(231, 37%, 63%)'],
    ['#0C0E16', 'rgb(12, 14, 22)', 'hsl(228, 29%, 7%)'],
    ['#EC5757', 'rgb(236, 87, 87)', 'hsl(0, 80%, 63%)'],
    ['#FF9797', 'rgb(255, 151, 151)', 'hsl(0, 100%, 80%)'],
    ['#F8F8FB', 'rgb(248, 248, 251)', 'hsl(240, 27%, 98%)'],
    ['#141625', 'rgb(20, 22, 37)', 'hsl(233, 30%, 11%)'],
  ]

  return (
    <div className="grid grid-cols-4 gap-3 w-[67rem]">
      {colors.map((c, i) => (
        <Color key={i} hex={c[0]} rgb={c[1]} hsl={c[2]} />
      ))}
    </div>
  )
}
