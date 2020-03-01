import React, { useContext } from 'react'
import { DisplayField } from '_shared'
import { MoodsContext } from 'contexts'

export function ProfessionalDevelopmentEntry({ entry }) {
  const { moods } = React.useContext(MoodsContext)
  const { content } = entry
  const mood = moods && moods.find(m => m.value === content.mood)

  return (
    <React.Fragment>
      <DisplayField label='Mood' name='mood' value={mood ? mood.label : content.mood} />
      <DisplayField label='Today I Learned' name='todayILearned' value={content.todayILearned} />
      <DisplayField label='Goal Check-in' name='goalProgress' value={content.goalProgress} />
      <DisplayField label='Celebrations' name='celebrations' value={content.celebrations} />
    </React.Fragment>
  )
}
