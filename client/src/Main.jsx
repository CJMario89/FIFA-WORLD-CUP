import './scss/Main.scss'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import FrontCover from './components/Part1/FrontCover'
import FIFATeams from './components/Part2/FIFATeams'
import TokenSales from './components/Part3/TokenSales'
import Tokenomics from './components/Part4/Tokenomics'
import Roadmap from './components/Part5/Roadmap'
import TokenGuide from './components/Part6/TokenGuide'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import { selectWalletStatus } from './features/WalletSlice'
import AlertMsg from './components/Message/AlertMsg'

const Main = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [autoConnect, setAutoConnect] = useState(null);
    const walletStatus = useSelector(selectWalletStatus);

    useEffect(()=>{
        const wallet_address = localStorage.getItem('wallet_address')
        const providerName = localStorage.getItem('providerName')
        
        if(wallet_address !== null && providerName !== null  && walletStatus === 'unconnected'){
            setAutoConnect({
                account: localStorage.getItem('wallet_address'),
                providerName: localStorage.getItem('providerName')
            });
        }
        setWalletConnected(()=>(walletStatus === 'unconnected' ? false : true));

    }, [walletStatus])

  return (
    <div className='Main'>
        <AlertMsg/>
        <Navbar autoConnect={autoConnect} walletConnected={walletConnected}/>
        <FrontCover/>
        <FIFATeams/>
        <TokenSales/>
        <Tokenomics/>
        <Roadmap/>
        <TokenGuide/>
        <Footer/>
    </div>
  )
}

export default Main