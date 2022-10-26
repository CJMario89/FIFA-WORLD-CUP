import './scss/Phase.scss'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Phase = (prop) => {
    const { phase, soccer } = prop;
  return (
    <div className='Phase'>
        <div className='PhaseTitle'>
            { phase.title }
        </div>
        <div className='PhaseContent'>
            {
                phase.content.map((content)=>{
                    return(
                        <div className='phaseContentList' key={uuidv4()}>
                            <img src={ soccer } alt=''></img>
                            { content }
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Phase