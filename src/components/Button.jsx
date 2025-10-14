import React from 'react'

const Button = ({name,style}) => {
  return (
    <button className={`${style} p-2 rounded-xl`}>{name}</button>
  )
}

export default Button