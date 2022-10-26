import './scss/Country.scss'
import React from 'react'

const Country = (prop) => {
    const { country } = prop;
    const countryFlag = require(`../../assets/images/countries/${country}.png`);

  return (
    <div className='Country'>
        <div className='CountryImg'>
            <img src={countryFlag} alt=''></img>
        </div>
        <div className='CountryName'>
            { country.replace('_', ' ') }
        </div>
    </div>
  )
}

export default Country