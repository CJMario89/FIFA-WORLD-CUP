import './scss/Navbar.scss'
import React, { useRef, useState } from 'react'
import logo from '../assets/images/logo.png'
import { useEffect } from 'react'
import WalletConnector from './Connector/WalletConnector'
import { useDispatch, useSelector } from 'react-redux'
import { removeWallet, selectWallet } from '../features/WalletSlice'
import { alertMsg } from '../features/MessageSlice'

const Navbar = (prop) => {
    const { autoConnect, walletConnected } = prop;
    const [walletBlockShowingFlag, setWalletBlockShowingFlag] = useState(()=>{
        const flag = autoConnect !== null ? true : false;
        if(flag){
            return autoConnect.account !== 'null' ? true : false;
        }
        return flag;
    });
    
    const dispatch = useDispatch();
    const wallet = useSelector(selectWallet);
    const [disconnectButton, setDisconnectButton] = useState(false);
    const lastScrollY = useRef(0);

    const walletBlockClass = walletBlockShowingFlag ? 'walletBlock walletBlockFadeIn' : 'walletBlock'

    const disconnectWallet = ()=>{
        dispatch(removeWallet());
        dispatch(alertMsg("disconnected"));
    }
    
    useEffect(()=>{
        setWalletBlockShowingFlag(()=>{
            const flag = autoConnect !== null ? true : false;
            if(flag){
                return autoConnect.account !== 'null' ? true : false;
            }
            return flag;
        });
    }, [autoConnect])


    let HideScrollToTopTimeoutId = '';
    useEffect(()=>{
        window.addEventListener("scroll", (e)=>{
            if(window.scrollY < 200 || window.scrollY < lastScrollY.current){
                document.querySelector(".Navbar").classList.remove("HideNavbar");
            }else{
                document.querySelector(".Navbar").classList.add("HideNavbar");
            }

            document.querySelector(".ScrollToTop").classList.remove("HideScrollToTop");

            if(HideScrollToTopTimeoutId !== ''){
                clearTimeout(HideScrollToTopTimeoutId);
            }
            HideScrollToTopTimeoutId = setTimeout(()=>{
                document.querySelector(".ScrollToTop").classList.add("HideScrollToTop");
            }, 500)

            lastScrollY.current = window.scrollY;
        })

        window.addEventListener("click", (e)=>{
            if(e.target.closest(".NavbarConnectWallet") === null){
                setDisconnectButton(false);
            }
        })
    }, [])

    // console.log(walletBlockShowingFlag)
  return (
    <>
        <div className='Navbar'>
            <div className='NavbarLeft'>
                <img src={logo} alt='' className='Logo'></img>
                <div className='NavbarOption'>
                    <div onClick={()=>{document.getElementById("TokenomicsContainer").scrollIntoView({behavior: 'smooth'})}}>
                        TOKENOMICS
                    </div>
                    <div onClick={()=>{document.getElementById("RoadmapContainer").scrollIntoView({behavior: 'smooth'})}}>
                        ROADMAP
                    </div>
                    <div onClick={()=>{document.getElementById("TokenGuideContainer").scrollIntoView({behavior: 'smooth'})}}>
                        HOW TO BUY
                    </div>
                    <div>
                        WHITEPAPER
                    </div>
                </div>
            </div>

            <div className='NavbarRight'>
                <div className='NavbarTelegram' style={{'display':'none'}}>
                    Telegram 🎉
                </div>
                {!walletConnected ? 
                    <div className=' NavbarConnectWallet' onClick={()=>{setWalletBlockShowingFlag(prev=>!prev)}}>
                        CONNECT WALLET
                    </div>
                    :
                    <>
                        <div className='NavbarConnectWallet' onClick={()=>{setDisconnectButton(prev=>!prev)}}>
                            {`${wallet.address.slice(0, 7)}...${wallet.address.slice(-5)}`}
                        </div>
                        {disconnectButton ? <div className='DisconnectButton' onClick={()=>{disconnectWallet()}}>Disconnect Wallet</div>: null }
                    </>
                }
                
            </div>
        </div>
        <div className='ScrollToTop HideScrollToTop' onClick={()=>{window.scrollTo({'top':0, 'behavior':'smooth'})}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
        </div>
         {walletBlockShowingFlag ? <WalletConnector onWalletBackgroundClick={()=>setWalletBlockShowingFlag(false)} autoConnect={autoConnect} walletBlockClass={walletBlockClass} /> : null }
    </>
  )
}

export default Navbar