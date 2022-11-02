import React from 'react'
import './Button.css'
const Button = ({link, onClick, text, styleClass}) => {
  return (
    <>
    <a href={link} onClick={onClick} className={`btn ${styleClass}`}>
        {text}
    </a>
    </>
  )
}

export default Button
