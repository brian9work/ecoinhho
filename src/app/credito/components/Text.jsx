import React from 'react'

export function Title({children}) {
    return (
      <h2 className='text-3xl font-bold mb-4'>{children}</h2>
    )
  }
  export function SubTitle({children}) {
    return (
      <h2 className="text-2xl font-semibold">{children}</h2>
    )
  }
