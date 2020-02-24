import React from 'react'
import { DisplayField } from '_shared'

export function ProfessionalDevelopmentEntry({ entry }) {
  const { content } = entry

  return (
    <React.Fragment>
      <DisplayField label='Mood' name='mood' value={content.mood} />
      <DisplayField label='Today I Learned' name='todayILearned' value={content.todayILearned} />
      <DisplayField label='Goal Check-in' name='goalProgress' value={content.goalProgress} />
      <DisplayField label='Celebrations' name='celebrations' value={content.celebrations} />
    </React.Fragment>
  )
}
