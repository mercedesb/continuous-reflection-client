import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import { DATE_FORMAT } from 'utils'
import { InputWrapper } from './InputWrapper'
import { InputLabel } from './InputLabel'
import 'react-day-picker/lib/style.css'
import './_styles/DatePicker.css'

export function DatePicker({ name, handleChange, value, label }) {
  return (
    <InputWrapper>
      <InputLabel name={name} label={label} />

      <DayPickerInput
        name={name}
        onDayChange={handleChange}
        selectedDays={!!value ? value : undefined}
        formatDate={formatDate}
        parseDate={parseDate}
        format={DATE_FORMAT}
        placeholder={`${formatDate(new Date(), DATE_FORMAT)}`}
      />
    </InputWrapper>
  )
}
