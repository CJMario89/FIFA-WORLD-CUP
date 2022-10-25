import './scss/Navbar.scss'
import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='NavbarLeft'>
            <img src={logo} alt=''></img>
            <div className='NavbarOption'>
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

        <div className='NavbarRight'>
            <div className='NavbarTelegram'>
                Telegram 🎉
            </div>
            <div className=' NavbarConnectWallet'>
                CONNECT WALLET  🚀
            </div>
        </div>
        
    </div>
  )
}

export default Navbar