import './scss/Tokenomics.scss'
import React, { useEffect } from 'react'
import TokenomicsRule from './TokenomicsRule';
import { v4 as uuidv4 } from 'uuid';


const Tokenomics = () => {

const Rules = [
    {
        'title': '10% OF THE TOKEN',
        'description': '10% of the token mining is given to the top 5% of the token holders',
        'image': require(`../../assets/images/part3/Rule1.png`)
    },
    {
        'title': '5% OF THE TOKEN',
        'description': '5% of the token mining is given to the top 20% of the token holders',
        'image': require(`../../assets/images/part3/Rule2.png`)
    },
    {
        'title': '3% OF THE TOKEN',
        'description': '3% of the token mining is given to the top 80% of the token holders',
        'image': require(`../../assets/images/part3/Rule3.png`)
    },
    {
        'title': '10,000,000,000 TOTAL SUPPLY',
        'description': 'FIFFA has a 10B total supply.',
        'image': require(`../../assets/images/part3/Rule4.png`)
    },
    {
        'title': 'LIQUIDITY ARE SAFE',
        'description': 'Initial Liquidity has been locked for 6 months',
        'image': require(`../../assets/images/part3/Rule5.png`)
    },
    {
        'title': 'MARKETING WALLET',
        'description': 'We hold a 2% Marketing Wallet.But It has been locked for 3 months',
        'image': require(`../../assets/images/part3/Rule6.png`)
    },
];


useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(document.querySelector(".TokenomicsContainer").getBoundingClientRect().top < 550){
            let i = 0;
            document.querySelectorAll(".TokenomicsRule").forEach((dom)=>{
                setTimeout(()=>{
                    dom.classList.add("ShowTokenomicsRule");
                }, i * 600)
                i++;
            })
        }  
    })
}, [])

  return (
    <div className='Tokenomics'>
        <div className='TokenomicsContainer'>
            <div className='TokenomicsTitle'>
                FIFA WORLD CUP 2022’S <span style={{color: '#F9DC44'}}>TOKENOMICS</span>
            </div>
            <div className='TokenomicsRules'>
                {
                    Rules.map((rule)=>{
                        return(
                            <TokenomicsRule rule={rule} key={uuidv4()}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Tokenomics