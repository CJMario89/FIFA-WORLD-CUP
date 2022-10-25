import './scss/FIFATeams.scss'
import React from 'react'
import Group from './Group'
import { v4 as uuidv4 } from 'uuid';

const FIFATeams = () => {


    const groups = [
        {
            'title': 'Group A',
            'countries': ['Qatar', 'Ecuador', 'Senegal', 'Netherlands']
        },
        {
            'title': 'Group B',
            'countries': ['England', 'IR_Iran', 'USA', 'Wales']
        },
        {
            'title': 'Group C',
            'countries': ['Argentina', 'Saudi_Arabia', 'Mexico', 'Polard']
        },
        {
            'title': 'Group D',
            'countries': ['France', 'Australia', 'Denmark', 'Tunisia']
        },
        {
            'title': 'Group E',
            'countries': ['Spain', 'Costa_Rica', 'Germany', 'Japan']
        },
        {
            'title': 'Group F',
            'countries': ['Belgium', 'Canada', 'Morocco', 'Croatia']
        },
        {
            'title': 'Group G',
            'countries': ['Brazil', 'Serbia', 'Switzerland', 'Cameroon']
        },
        {
            'title': 'Group H',
            'countries': ['Portugal', 'Ghana', 'Uruguay', 'Korea_Republic']
        }
    ]


  return (
    <div className='FIFATeams'>
        <div className='TeamTitle'>
            <div>
                <span style={{color:'#EEC73C'}}>
                    FIFA
                </span>
                <br/>
                WORLD CUP QATAR 2022 TEAMS
            </div>
        </div>
        <div className='GroupContainer'>
            <div className='Groups'>
                {
                    groups.map((group)=>{
                        return(
                            <Group group={group} key={uuidv4()}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default FIFATeams