import './scss/TokenSales.scss'
import React from 'react'
import soccer from '../../assets/images/part2/soccer.png'
import FIFA from '../../assets/images/part2/FIFA.png'
import { v4 as uuidv4 } from 'uuid'

const TokenSales = () => {


    const providers = [];
    for(var i = 1; i < 8; i++){
        const img = require(`../../assets/images/part2/part2_${i}.png`);
        providers.push(img);
    }
  return (
    <div className='TokenSales'>
        <div className='TokenSalesContainer'>
            <div className='TokenSalesDescription'>
                <div className='TokenSalesDescriptionTitle'>
                    FIFA WORLD CUP 2022’S<br/>
                    <span style={{color: '#EEC73C'}}>TOKEN SALE</span>
                </div>
                <div className='TokenSalesDescriptionContent'>
                    Listing Price: 1 FIFFA = 0.0001 USD<br/>
                    Liquidity will add on the Pancakeswap exchanges at Nov 20, 2022.<br/>
                    <br/>
                    Airdrop & Pre-Sale Ends in
                </div>
                <div className='TokenSalesLaunched'>
                    5d  ：  6h  ：  48m  ：  15s
                </div>
                <div className='TokenSalesAddress'>
                    0x8C6060B7ba14c0Fbb88adE1F5f41cD0383CEc4f3
                </div>
                <div className='TokenSalesDescriptionImg'>
                    <img src={FIFA} alt=""></img>
                    <img src={soccer} alt=""></img>
                </div>
            </div>
            <div className='TokenSalesAPI'>
                <div className='TokenSalesAPIDescription'>
                    Buy FIFFA<br/>
                    Buy 0.01 BNB = 1000,000 FIFA<br/>
                    Buy 1 BNB = 100,000,000 FIFA<br/>
                    Buy 10 BNB = 1,000,000,000 FIFA
                </div>
                <input className='TokenSalesAPIInput' defaultValue="0.5"></input>
                <div className='TokenSalesAPIBuy'>
                    🔥BUY FIFFA
                </div>
                <div className='TokenSalesAPIFreemint'>
                    <span>
                        💰 CLAIM FREE $FIFFA
                    </span>
                </div>
                <div className='TokenSalesAPIReferral'>
                    <div className='TokenSalesAPIReferralTitle'>
                        GENERATE REFERRAL LINK
                    </div>
                    <input className='TokenSalesAPIReferralURL' defaultValue={window.location.host+'/?ref=address'} disabled></input>
                    <div className='TokenSalesAPIReferralCopy'>
                        COPY LINK
                    </div>
                </div>
            </div>
        </div>
        <div className='TokenSalesProviders'>
            {
                providers.map((img, index)=>{
                    return(
                        <div className='ProviderImg' key={uuidv4()}>
                            {index === 1 || index === 2 || index === 3 || index === 4? <img src={img} alt='' style={{width: '57%'}}></img> : <img src={img} alt=''></img>} 
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TokenSales