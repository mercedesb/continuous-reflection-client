import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import { LONG_DATE_FORMAT } from 'utils'
import { InputWrapper } from './InputWrapper'
import { InputLabel } from './InputLabel'
import 'react-day-picker/lib/style.css'
import './_styles/DatePicker.css'

export function DatePicker({ name, handleChange, value, label }) {
  return (
    <InputWrapper>
      <InputLabel name={name} label={label} className='w-1/6' />

      <DayPickerInput
        name={name}
        onDayChange={handleChange}
        value={!!value ? value : undefined}
        selectedDay={!!value ? value : undefined}
        formatDate={formatDate}
        parseDate={parseDate}
        format={LONG_DATE_FORMAT}
        placeholder={`${formatDate(new Date(), LONG_DATE_FORMAT)}`}
      />
    </InputWrapper>
  )
}
