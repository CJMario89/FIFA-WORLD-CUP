import './scss/TokenGuide.scss'
import React, { useEffect } from 'react'
import TokenGuideContentImage from '../../assets/images/part6/TokenGuideContentImage.png'
import Guide from './Guide'
import { v4 as uuidv4 } from 'uuid'

const TokenGuide = () => {

    const guides = [
        {
            'image': require(`../../assets/images/part6/guide1.png`),
            'title': 'Download & setup MetaMask or TrustWallet',
            'description': <div><span className="link" onClick={()=>{window.open('https://metamask.io/', '_blank');}}>Download MetaMask</span> (a crypto wallet in form of a browser extension) or TrustWallet (an app for your phone). After that, you will have to add the Binance Smart Chain to your network list. (<span className="link" onClick={()=>{window.open("https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain", "_blank")}}>Click here</span> for a step-by-step tutorial)</div>
        },
        {
            'image': require(`../../assets/images/part6/guide2.png`),
            'title': 'Buy and send BNB to MetaMask',
            'description': 'Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a "0x"'
        },
        {
            'image': require(`../../assets/images/part6/guide3.png`),
            'title': 'Head on to PancakeSwap and swap for FIFA',
            'description': <div><span className='link' onClick={()=>{window.open(`https://pancakeswap.finance/swap?outputCurrency=${window.contractAddress}&chainId=97`, "_blank")}}>Click here</span> to head on over to PancakeSwap or use this address (Address Will Be Updated Here After Swap Ends) to select FIFFA token. Set the slippage tolerance to 5% (sometimes it may be a bit more, depending on how much demand there is)</div>
        },
        {
            'image': require(`../../assets/images/part6/guide4.png`),
            'title': 'View FIFA and HODL',
            'description': 'Swap BNB for FIFA. Now you need to add FIFFA token to your MetaMask or Trust Wallet to view your $FIFA. Lastly HODL!'
        }
    ]

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(document.querySelector(".TokenGuideContainer").getBoundingClientRect().top < 550){
                let i = 0;
                document.querySelectorAll(".Guide").forEach((dom)=>{
                    setTimeout(()=>{
                        dom.classList.add("ShowGuide");
                    }, i * 600)
                    i++;
                })
            }
        })
    }, [])
    

  return (
    <div className='TokenGuide'>
        <div className='TokenGuideContainer' id='TokenGuideContainer'>
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