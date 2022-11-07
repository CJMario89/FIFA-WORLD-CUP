import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { returnRemainSupply } from '../../features/ContractInteraction';

const TokenRemain = () => {
    const [tokenRemain, setTokenRemain] = useState((0).toLocaleString());
    
    const ShowRemainToken = async()=>{
        const token = await returnRemainSupply();
        setTokenRemain(parseInt(token).toLocaleString());
    }
    useEffect(()=>{
        ShowRemainToken();
        const tokenRemainInterval = setInterval(async()=>{
            ShowRemainToken();
        }, 1000)
        return(()=>{
            clearInterval(tokenRemainInterval);
        })
    }, []);
  return (
    <div>
        <span style={{'color': 'rgb(238, 199, 60)'}}>{tokenRemain}</span> / 1,000,000,000<br/>
        FIFFA Remaining
    </div>
  )
}

export default TokenRemain