import './scss/TokenomicsRule.scss'
import React from 'react'

const TokenomicsRule = (prop) => {
    const { rule } = prop;

  return (
    <div className='TokenomicsRule'>
        <img src={rule.image} className='TokenomicsRuleImage'></img>
        <div className='TokenomicsRuleTitle'>
            { rule.title }
        </div>
        <div className='TokenomicsRuleDescription'>
            { rule.description }
        </div>
    </div>
  )
}

export default TokenomicsRule