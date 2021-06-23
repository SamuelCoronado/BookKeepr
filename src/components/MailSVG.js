import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap';

import MailSVG from '../mailSVG.svg'

const ContactSVG = () => {

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
        <img src={MailSVG} alt="" ref={logo} className="w-4/6 h-4/6 hidden md:block mb-5"/>
    )
}

export default ContactSVG
