import React from 'react'
import { Wrapper, PageHeader } from '_shared'
import { MoodOverTime } from './MoodOverTime'

export function HomeContainer() {
  // get journals that user configured to use for dashboard
  // render dashboard components that user configured for home page
  // pass journals into each dashboard component
  // dashboard component responsible for fetching further data necessary to render what they want
  // TODO: consider performance of that design
  return (
    <Wrapper>
      <PageHeader>
        <h1>Welcome to Continuous Reflection!</h1>
      </PageHeader>
      <MoodOverTime journals={[{ id: 30 }, { id: 31 }]} />
    </Wrapper>
  )
}
