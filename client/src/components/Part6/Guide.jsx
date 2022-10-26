import './scss/Guide.scss'
import React from 'react'

const Guide = (prop) => {
    const { guide } = prop;
  return (
    <div className='Guide'>
        <div className='GuideImage'>
            <img src={ guide.image } alt=""></img>
        </div>
        <div className='GuideTitle'>
            { guide.title }
        </div>
        <div className='GuideDescription'>
            { guide.description }
        </div>
    </div>
  )
}

export default Guide