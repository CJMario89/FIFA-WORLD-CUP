import './scss/FrontCover.scss'
import React from 'react'
import frontCover from '../../assets/images/front-cover.png'
import { useEffect } from 'react'


const FrontCover = () => {

    useEffect(()=>{
        document.querySelector(".FrontCoverMask").classList.add("FrontCoverMaskAnimation");
        document.querySelector(".FrontCoverTitle").classList.add("FrontCoverTitleAnimation");
    }, [])
  return (
    <>
        <div className='FrontCover'>
            <img src={frontCover} alt=""></img>
            
            <div className='FrontCoverMask'>
            </div>


            <div className='FrontCoverTitle'>
                FIFA WORLD CUP<br/>
                <span style={{color:'#520A0A'}}>MINT</span> YOUR DREAM TEAM TOKEN !
            </div>
            <div className='FrontCoverButton' onClick={()=>{document.getElementById("TokenSalesDescriptionTitle").scrollIntoView({behavior: 'smooth'})}}>
                <span>
                    💰 CLAIM FREE $FIFFA
                </span>
            </div>
        </div>
        
    </>
  )
}

export default FrontCover