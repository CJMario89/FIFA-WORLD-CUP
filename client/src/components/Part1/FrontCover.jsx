import './scss/FrontCover.scss'
import React from 'react'
import frontCover from '../../assets/images/front-cover.png'


const FrontCover = () => {
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
            <div className='FrontCoverButton'>
                <span>
                    💰 CLAIM FREE $FIFFA
                </span>
            </div>
        </div>
        
    </>
  )
}

export default FrontCover