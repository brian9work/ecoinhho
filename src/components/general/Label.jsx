import React from 'react'

export default function Label({children, inputName}) {
  return (
      <label htmlFor={inputName} className={`block text-base md:text-lg font-medium text-gray-700`}>{children}</label>
  )
}
