import './scss/Group.scss'
import React from 'react'
import Country from './Country';
import { v4 as uuidv4 } from 'uuid';

const Group = (prop) => {
    const { group } = prop;


  return (
    <div className='Group'>
        <div className='GroupTitle'>
            {group.title}
        </div>
        {group.countries.map((country)=>{
            return(
                <Country country={country} key={uuidv4()}/>
            )
        })}
    </div>
  )
}

export default Group