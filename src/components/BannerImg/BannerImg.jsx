import React from 'react'
import './BannerImg.css'
export const BannerImg = ({halfBanner}) => {
  return (
    <div className="banner-img">
    <img src={halfBanner} alt="" />
    </div>
  )
}

