import './scss/Navbar.scss'
import React from 'react'
import logo from '../assets/images/logo.png'
import { useEffect } from 'react'

const Navbar = () => {
    let HideScrollToTopTimeoutId = '';
    useEffect(()=>{
        window.addEventListener("scroll", (e)=>{
            if(window.scrollY > 200){
                document.querySelector(".Navbar").classList.add("HideNavbar");
            }else{
                document.querySelector(".Navbar").classList.remove("HideNavbar");
            }

            document.querySelector(".ScrollToTop").classList.remove("HideScrollToTop");

            if(HideScrollToTopTimeoutId !== ''){
                clearTimeout(HideScrollToTopTimeoutId);
            }
            HideScrollToTopTimeoutId = setTimeout(()=>{
                document.querySelector(".ScrollToTop").classList.add("HideScrollToTop");
            }, 500)
        })
    })
  return (
    <>
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
        <div className='ScrollToTop HideScrollToTop' onClick={()=>{window.scrollTo({'top':0, 'behavior':'smooth'})}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
        </div>
    </>
  )
}

export default Navbar