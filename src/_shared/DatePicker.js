import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export function DatePicker({ handleChange, value }) {
  return <DayPicker onDayClick={handleChange} selectedDays={!!value ? value : undefined} />
}
