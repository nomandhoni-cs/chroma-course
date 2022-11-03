import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BannerImg } from '../BannerImg/BannerImg.js'
import { BannerText } from '../BannerText/BannerText.js'


export const Body = ({halfBanner, courseList}) => {
  // courseList.map((course) => {
  //   console.log(course);
  // })
  return (
    <div className='container'>
        <div className="top-banner">
        <Row>
            <Col xl={6}>
                <BannerText heading={'Looking for learn Something new?'}/>
            </Col>
            <Col xl={6}>
                <BannerImg halfBanner={halfBanner} />
            </Col>
        </Row>
        </div>
    </div>

  )
}