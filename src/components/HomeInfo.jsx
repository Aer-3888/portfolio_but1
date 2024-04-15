import React from 'react'
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import download from '../assets/icons/download.svg'
import drag from '../assets/animated/drag_left.gif'

const renderContent = {
    1: (
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Je suis un étudiant en première année d&#8217;informatique <br /> vous trouverez ci-dessous mon cv
        </p>

        <a href='../assets/CV_PHAN_Theo.pdf' download="CV_PHAN_Theo.pdf" className='neo-brutalism-white neo-btn'>
          Mon CV
          <img src={download} alt='arrow' className='w-4 h-4 object-contain' />
        </a>
      </div>
    ),
    2: (
        <div>d</div>
    ),
    3: (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Worked with many companies <br /> and picked up many skills along the way
      </p>

      <Link to='/projet' className='neo-brutalism-white neo-btn'>
        Mes projets
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    ),
    4: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Bonjour, je m&#8217;appelle <span className='font-semibold'>Theo</span></h1> 
    ),
    5: (
        <img src={drag} />
    )
    
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo