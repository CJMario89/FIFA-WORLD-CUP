import './scss/TokenGuide.scss'
import React from 'react'
import TokenGuideContentImage from '../../assets/images/part6/TokenGuideContentImage.png'
import Guide from './Guide'
import { v4 as uuidv4 } from 'uuid'

const TokenGuide = () => {

    const guides = [
        {
            'image': require(`../../assets/images/part6/guide1.png`),
            'title': 'Download & setup MetaMask or TrustWallet',
            'description': 'Download MetaMask (a crypto wallet in form of a browser extension) or TrustWallet (an app for your phone). After that, you will have to add the Binance Smart Chain to your network list. (Click here for a step-by-step tutorial)'
        },
        {
            'image': require(`../../assets/images/part6/guide2.png`),
            'title': 'Buy and send BNB to MetaMask',
            'description': 'Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a "0x"'
        },
        {
            'image': require(`../../assets/images/part6/guide3.png`),
            'title': 'Head on to PancakeSwap and swap for FIFA',
            'description': 'Click here to head on over to PancakeSwap or use this address (Address Will Be Updated Here After Swap Ends) to select FIFFA token. Set the slippage tolerance to 5% (sometimes it may be a bit more, depending on how much demand there is)'
        },
        {
            'image': require(`../../assets/images/part6/guide4.png`),
            'title': 'View FIFA and HODL',
            'description': 'Swap BNB for FIFA. Now you need to add FIFFA token to your MetaMask (Tutorial here) or Trust Wallet to view your $FIFA. Lastly HODL!'
        }
    ]

  return (
    <div className='TokenGuide'>
        <div className='TokenGuideContainer'>
            <div className='TokenGuideTitle'>
                <span style={{color: '#F9DC44'}}>HOW TO BUY&ensp;</span> FIFFA TOKENS
            </div>
            <div className='TokenGuideContent'>
                <div className='TokenGuideContentImage'>
                    <img src={TokenGuideContentImage} alt=""></img>
                </div>
                <div className='TokenGuideContentText'>
                    {
                        guides.map((guide)=>{
                            return(
                                <Guide guide={guide} key={uuidv4()}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TokenGuide