import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap';

import ShelfSVG from '../shelfSVG.svg'

const HeroSVG = () => {

    let logo = useRef(null);


    useEffect(() => {
        const element = logo.current;

         gsap.fromTo(
            element,
            {
                opacity: 0,
                x: 200,
                duration: 2
            },
            {
                opacity: 1,
                x: 0 
            }
    )
    }, [])

    return (
        <img src={ShelfSVG} alt="" ref={logo} className="w-3/6 h-3/6 hidden md:block"/>
    )
}

export default HeroSVG
