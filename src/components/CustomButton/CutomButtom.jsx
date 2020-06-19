import React from 'react'
import './CustomButton.scss'

export default function CutomButtom({children, ...otherProps}) {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  )
}
