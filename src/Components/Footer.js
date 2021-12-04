import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Logo from '../assets/modlogo.svg'

export function Footer(){
    return(
        <Container fluid style = {{ backgroundColor: '#ffc107', maxWidth: '100vw', width: '100%', overflow: 'hidden' }}>
            <Row>
                <Col md = {4} xs = {12} className = 'm-auto' style = {{ maxWidth: '30%' }}>
                    <img
                        className = 'd-block mx-auto'
                        src = {Logo}
                        alt = 'logo'
                        width = '150px'
                        height = '150px'
                    />
                </Col>
                <Col md = {8} xs = {12} className = 'm-auto' style = {{ maxWidth: '70%'}}>
                    <p>2001—2021 Міністерство оборони України</p>
                    <p>Матеріали на сайті розміщені на умовах ліцензії Creative Commons Attribution 4.0 International, якщо не вказано іншого.</p>
                </Col>
            </Row>
        </Container>
    )
}