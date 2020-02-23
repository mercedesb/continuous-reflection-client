import React from 'react'

export function ProfessionalDevelopmentEntry({ entry }) {
  const { content } = entry

  return (
    <React.Fragment>
      <div>
        <p>{content.mood}</p>
      </div>
      <div>
        <p>{content.todayILearned}</p>
      </div>
      <div>
        <p>{content.goalProgress}</p>
      </div>
      <div>
        <p>{content.celebrations}</p>
      </div>
    </React.Fragment>
  )
}
