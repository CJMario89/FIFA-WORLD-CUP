import './scss/Footer.scss'
import React from 'react'
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='FooterLeft'>
            <img src={logo} alt=''></img>
            <div className='FooterOption'>
                <div>
                    TOKENOMICS
                </div>
                <div>
                    ROADMAP
                </div>
                <div>
                    HOW TO BUY
                </div>
                <div>
                    WHITEPAPER
                </div>
            </div>
        </div>

        <div className='FooterRight'>
            
        </div>
        
    </div>
  )
}

export default Footer