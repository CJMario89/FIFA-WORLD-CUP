import './scss/Roadmap.scss'
import React from 'react'
import Phase from './Phase'
import soccer from '../../assets/images/part5/soccer1.png'
import { useRef } from 'react'
import { useEffect } from 'react'

const Roadmap = () => {

    const phase1 = {
        title: 'PHASE 1',
        content: [
            'Concept design',
            'Roadmap',
            'Whitepaper',
            'Website',
            'Social Media Channels',
            'Community building',
            'Marketing Strategy',
            'Presale on Pinksale'
        ]
    }
    const phase2 = {
        title: 'PHASE 2',
        content: [
            'Website',
            'PancakeSwap Launch',
            'Liquidity Pool Lock',
            'Roadmap Update',
            'Whitepaper V2',
            'Logo on TWT',
            'Coingecko and CMC',
            'Listed Pancakeswap'
        ]
    }

    const phase3 = {
        title: 'PHASE 3',
        content: [
            'Listed Hotbit',
            'Listed Soon Xt.Com',
            'Listed Soon Latoken',
            'Listed Soon Coinsbit',
            'Listed Soon Cointiger',
            'Listing Soon Probit',
            'Listing Soon Okex'
        ]
    }

    const phase4 = {
        title: 'PHASE 4',
        content: [
            'Listing Soon Gate.io',
            'Listing Soon Bithumb',
            'Listing Soon Huobi',
            'Listing Soon Lbank',
            'Listing Soon Kucoin',
            'Listing Soon MEXC',
            'Listing Soon Binance'
        ]
    }

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(document.querySelector(".RoadmapContainer").getBoundingClientRect().top < 550){
                let i = 0;
                document.querySelectorAll(".Dashed").forEach((dom)=>{
                    setTimeout(()=>{
                        dom.classList.add("DashedAnimation");
                    }, i * 250)
                    if(i === 0){
                        setTimeout(()=>{
                            document.querySelector(".phase1").querySelector(".Phase").classList.add("ShowPhase");
                        }, i * 250)
                    }
                    if(i === 1){
                        setTimeout(()=>{
                            document.querySelector(".phase2").querySelector(".Phase").classList.add("ShowPhase");
                        }, i * 250)
                    }
                    if(i === 15){
                        setTimeout(()=>{
                            document.querySelector(".phase3").querySelector(".Phase").classList.add("ShowPhase");
                        }, i * 250)
                    }
                    if(i === 16){
                        setTimeout(()=>{
                            document.querySelector(".phase4").querySelector(".Phase").classList.add("ShowPhase");
                        }, i * 250)
                    }
                    i++;
                })
            }  
        })
    }, [])

  return (
    <div className='Roadmap'>
        <div className='RoadmapContainer'>
            <div className='RoadmapTitle'>
                FIFA TOKEN’S&ensp;<span style={{color: '#F9DC44'}}>ROADMAP</span>
            </div>
            <div className='phase1 Phases'>
                <Phase phase={phase1} soccer={soccer}/>
            </div>
            <div className='phase2 Phases'>
                <Phase phase={phase2} soccer={soccer}/>
            </div>
            <div className='phase3 Phases'>
                <Phase phase={phase3} soccer={soccer}/>
            </div>
            <div className='phase4 Phases'>
                <Phase phase={phase4} soccer={soccer}/>
            </div>
            <div className='Dashed12'>
                <div className='Dashed'></div>
            </div>
            <div className='Dashed23_1'><div className='Dashed'></div></div>
            <div className='Dashed23_2'><div className='Dashed'></div></div>
            <div className='Dashed23_3'><div className='Dashed'></div></div>
            <div className='Dashed23_4'><div className='Dashed'></div></div>
            <div className='Dashed23_5'><div className='Dashed'></div></div>
            <div className='Dashed23_6'><div className='Dashed'></div></div>
            <div className='Dashed23_7'><div className='Dashed'></div></div>
            <div className='Dashed23_8'><div className='Dashed'></div></div>
            <div className='Dashed23_9'><div className='Dashed'></div></div>
            <div className='Dashed23_10'><div className='Dashed'></div></div>
            <div className='Dashed23_11'><div className='Dashed'></div></div>
            <div className='Dashed23_12'><div className='Dashed'></div></div>
            <div className='Dashed23_13'><div className='Dashed'></div></div>
            <div className='Dashed23_14'><div className='Dashed'></div></div>
            <div className='Dashed23_15'><div className='Dashed'></div></div>
            <div className='Dashed34'>
                <div className='Dashed'></div>
            </div>
        </div>
    </div>
  )
}

export default Roadmap