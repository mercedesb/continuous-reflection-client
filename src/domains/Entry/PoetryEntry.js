import React from 'react'

export function PoetryEntry({ entry }) {
  const { content } = entry

  return (
    <div>
      <p>{content.poem}</p>
    </div>
  )
}
