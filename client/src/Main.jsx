import './scss/Main.scss'
import React from 'react'
import Navbar from './components/Navbar'
import FrontCover from './components/Part1/FrontCover'
import FIFATeams from './components/part2/FIFATeams'

const Main = () => {
  return (
    <div className='Main'>
        <Navbar/>
        <FrontCover/>
        <FIFATeams/>
    </div>
  )
}

export default Main