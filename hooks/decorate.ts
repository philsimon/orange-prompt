export const ORANGE = '#C2410C'

type Box = { text: string; cursor: number; decorations?: Array<Record<string, unknown>> }

// Paints the whole draft white on orange. An empty draft gets no run, so the box stays plain until you type.
export const paintDraft = <T extends Box>(box: T): T => {
  if (box.text === '') return box
  const run = { start: 0, end: box.text.length, backgroundColor: ORANGE, color: 'white' }
  return { ...box, decorations: [...(box.decorations ?? []), run] }
}
