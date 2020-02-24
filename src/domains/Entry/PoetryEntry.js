import React from 'react'
import { DisplayField } from '_shared'

export function PoetryEntry({ entry }) {
  const { content } = entry

  return <DisplayField label='Poem' name='poem' value={content.poem} />
}
