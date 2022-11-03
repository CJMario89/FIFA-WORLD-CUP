import React, { useEffect, useState } from 'react'
import { returnStopMintTime } from '../../features/ContractInteraction';

const RemainTime = () => {
    const [remainTime, setRemainTime] = useState('0d  ：  0h  ：  0m  ：  0s');

    useEffect(()=>{
        let stopMintTime = 0;
        const updateTime = setInterval(async()=>{
            if(stopMintTime === 0){
                stopMintTime = await returnStopMintTime();
            }
            const now = Date.now() / 1000;
            if(stopMintTime - now > 0){
                const remainTimeStamp = stopMintTime - now;
                const days = Math.floor(remainTimeStamp / 86400);
                const hours = Math.floor((remainTimeStamp - days * 86400) / 3600);
                const minutes = Math.floor((remainTimeStamp - days * 86400 - hours * 3600) / 60);
                const seconds = Math.floor(remainTimeStamp - days * 86400 - hours * 3600 - minutes * 60);
                setRemainTime(`${days}d  ：  ${hours}h  ：  ${minutes}m  ：  ${seconds}s`);
            }
        }, 1000)

        return(async()=>{
            clearInterval(updateTime);
        })
    }, []);
  return (
    <>{remainTime}</>
  )
}

export default RemainTime