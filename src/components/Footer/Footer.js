import React from 'react'
import { BsStarFill, BsGithub, BsInfoSquareFill, BsFileLockFill, BsBriefcaseFill } from 'react-icons/bs';
import { FaScroll, FaGithubSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';
import { GiCrafting } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
export const Footer = () => {
    const thisYear = new Date();
  return (
    <footer>
        <Container>
            <Row>
                <Col xl={4}>
                    <ul>
                        <li><a href="/"><BsInfoSquareFill /> About Us</a></li>
                        <li><a href="/"><BsFileLockFill /> Privacy</a></li>
                        <li><a href="/"><FaScroll /> Sitemap</a></li>
                    </ul>
                </Col>
                <Col xl={4}>
                    <ul>
                        <li><a href="/"><AiOutlineFileDone /> Terms and Policies</a></li>
                        <li><a href="/"><GiCrafting /> Make Course</a></li>
                        <li><a href="/"><BsBriefcaseFill /> Career</a></li>
                    </ul>
                </Col>
                <Col xl={4}>
                    <ul>
                        <li><a href="https://github.com/nomandhoni-cs/chroma-course" rel="noreferrer" target="_blank"><FaGithubSquare /> GitHub</a></li>
                        <li><a href="/"><FaTwitterSquare /> Twitter</a></li>
                        <li><a href="/"><FaLinkedin /> LinkedIn</a></li>
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
