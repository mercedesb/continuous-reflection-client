import React from 'react'

export function RadioToggle({ name, label, value, checked, handleChange, title, children }) {
  const activeClasses = 'border-purple-600'
  const inactiveClasses = 'border-purple-100'

  return (
    <label for={name} className='inline-flex items-center cursor-pointer'>
      <span className='relative'>
        <div
          className={`flex justify-center items-center w-40 h-32  rounded-md shadow-inner border-4  ${
            checked ? activeClasses : inactiveClasses
          }`}
        >
          {children}
          <span>{label}</span>
        </div>
        <input
          type='radio'
          title={title}
          id={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          className='absolute opacity-0 w-0 h-0'
        />
      </span>
    </label>
  )
}
