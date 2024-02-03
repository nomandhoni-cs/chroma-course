import React from 'react'
import Button from '../Button/Button'
import './BannerText.css'
export const BannerText = ({heading, highlitedWord, subheading}) => {
  return (
    <div className='banner-text' >
        <h1>{heading}<span className='highlited-word'>{highlitedWord}</span></h1>
        <br />
        <h3>{subheading}</h3>
        <br />
        <Button text={'Explore'} styleClass='filledBtn' />
        </div>
  )
}
