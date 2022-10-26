import './scss/Main.scss'
import React from 'react'
import Navbar from './components/Navbar'
import FrontCover from './components/Part1/FrontCover'
import FIFATeams from './components/Part2/FIFATeams'
import TokenSales from './components/Part3/TokenSales'
import Tokenomics from './components/Part4/Tokenomics'
import Roadmap from './components/Part5/Roadmap'
import TokenGuide from './components/Part6/TokenGuide'
import Footer from './components/Footer'

const Main = () => {
  return (
    <div className='Main'>
        <Navbar/>
        <FrontCover/>
        <FIFATeams/>
        <TokenSales/>
        <Tokenomics/>
        <Roadmap/>
        <TokenGuide/>
        <Footer/>
    </div>
  )
}

export default Main