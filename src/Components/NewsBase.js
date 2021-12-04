import React from 'react'
import { Media, Row, Col } from 'react-bootstrap'

export function NewsBase(props){
    return(
        <Row>
            <Col lg = {3}>
            <Media className = 'mb-4'>
            <img
                width = '100%'
                height = '100%'
                className = 'm-0'
                src = {props.img}
                alt = 'img'
                onClick = {() => window.open(props.url)}
            />
        </Media>
            </Col>
            <Col>
            <Media.Body>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </Media.Body>
            </Col>
        </Row>
    )
}