import { expect, test } from 'claude-code/testing'

import { paintDraft } from './decorate'

test('paints a typed draft white on orange and keeps earlier runs', () => {
  const out = paintDraft({ text: 'hello', cursor: 5, decorations: [{ start: 0, end: 1, bold: true }] })
  expect(out.decorations).toEqual([
    { start: 0, end: 1, bold: true },
    { start: 0, end: 5, backgroundColor: '#C2410C', color: 'white' },
  ])
})

test('leaves an empty draft unpainted', () => {
  const box = { text: '', cursor: 0 }
  expect(paintDraft(box)).toBe(box)
})
