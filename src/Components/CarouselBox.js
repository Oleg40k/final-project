import React from 'react'
import { Carousel } from 'react-bootstrap'
import firstSlide from '../assets/femida.jpg'
import secondSlide from '../assets/male-lawyer.jpg'
import thirdSlide from '../assets/justice.jpg'
import { Item } from './CarouselImage'

export function CarouselBox(){
    return(
        <Carousel>
            <Carousel.Item>
                <Item src = {firstSlide} alt = 'first'/>
            </Carousel.Item>
            <Carousel.Item>
                <Item src = {secondSlide} alt = 'second'/>
            </Carousel.Item>
            <Carousel.Item>
                <Item src = {thirdSlide} alt = 'third'/>
            </Carousel.Item>
        </Carousel>
    )
}