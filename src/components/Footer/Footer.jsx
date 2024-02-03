import React from 'react'
import { BsStarFill, BsGithub, BsInfoSquareFill, BsFileLockFill, BsBriefcaseFill } from 'react-icons/bs';
import { FaScroll, FaGithubSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';
import { GiCrafting } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { NavLink } from 'react-router-dom';
export const Footer = () => {
    const thisYear = new Date();
  return (
    <footer>
        <Container>
            <Row>
                <Col xl={4}>
                    <ul>
                        <li><NavLink to="/about" style={({isActive})=> {
                      return {color:isActive? '#04f06a': ''}}}><BsInfoSquareFill /> About</NavLink></li>
                        <li><NavLink to="/privacy" style={({isActive})=> {
                      return {color:isActive? '#04f06a': ''}}}><BsFileLockFill /> Privacy</NavLink></li>
                        <li><NavLink to="/sitemap" style={({isActive})=> {
                      return {color:isActive? '#04f06a': ''}}}><FaScroll /> Sitemap</NavLink></li>
                    </ul>
                </Col>
                <Col xl={4}>
                    <ul>
                        <li><NavLink to="/terms" style={({isActive})=> {
                      return {color:isActive? '#04f06a': ''}}}><AiOutlineFileDone /> Terms and Policies</NavLink>
                        </li>
                        <li><NavLink to="/make-course" style={({isActive})=> {
                      return {color:isActive? '#04f06a': ''}}}><GiCrafting /> Make Course</NavLink>
                        </li>
                        <li><NavLink to="/career" style={({isActive})=> {
                      return {color:isActive? '#04f06a': ''}}}><BsBriefcaseFill /> Career</NavLink>
                        </li>
                    </ul>
                </Col>
                <Col xl={4}>
                    <ul>
                        <li><a href="https://github.com/nomandhoni-cs/chroma-course" rel="noreferrer" target="_blank"><FaGithubSquare /> GitHub</a></li>
                        <li><a href="https://twitter.com/nomandhoni"><FaTwitterSquare /> Twitter</a></li>
                        <li><a href="https://linkedin.com/in/nomandhoni"><FaLinkedin /> LinkedIn</a></li>
                    </ul>
                </Col>
            </Row>
            <div className='text-center'>
            <h5>If you like my project give a <BsStarFill /> on <a href="https://github.com/nomandhoni-cs/chroma-course" target='_blank' rel="noreferrer" > <BsGithub /></a></h5>
        </div>
        </Container>
        <section className='copyright text-center'><h4>Copyright {thisYear.getYear() + 1900}</h4></section>
    </footer>
  )
}
