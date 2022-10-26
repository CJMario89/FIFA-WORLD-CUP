import './scss/Roadmap.scss'
import React from 'react'
import Phase from './Phase'
import soccer from '../../assets/images/part5/soccer1.png'
import { useRef } from 'react'

const Roadmap = () => {
    const phase1DOM = useRef(null);

    // setInterval(()=>{
    //     console.log(phase1DOM?.current.getBoundingClientRect())
    //     //.y == 500
    // })

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
  return (
    <div className='Roadmap'>
        <div className='RoadmapContainer'>
            <div className='RoadmapTitle'>
                FIFA TOKEN’S&ensp;<span style={{color: '#F9DC44'}}>ROADMAP</span>
            </div>
            <div className='phase1 Phases' ref={phase1DOM}>
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
        </div>
    </div>
  )
}

export default Roadmap