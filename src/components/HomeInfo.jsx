import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import download from '../assets/icons/download.svg';
import drag from '../assets/animated/drag_left.gif';

const HomeInfo = ({ currentStage }) => {
    const [infoBoxSize, setInfoBoxSize] = useState('small');

    const toggleInfoBoxSize = () => {
        setInfoBoxSize(prevSize => prevSize === 'small' ? 'big' : 'small');
    };

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
        2: <div>d</div>,
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
          <div className={`info-box ${infoBoxSize}`}>
          <p className='font-medium sm:text-xl text-center w-full'>Bonjour, je m&#8217;appelle <span className='font-semibold'>Theo</span></p>
          <p className={`${infoBoxSize === 'small' ? 'opacity-0' : 'opacity-100'} text-center transition-opacity duration-300`}>
              Je suis actuellement en première année d&#8217;un BUT en Informatique à l&#8217;IUT de Nantes. Passionné par les défis du monde numérique, j&#8217;ai choisi cette filière pour explorer la programmation et le fonctionnement des technologies. Mon objectif académique est d&#8217;intégrer une école d&#8217;ingénieur à la fin de ma deuxième année. Cette étape me permettra d&#8217;approfondir mes connaissances techniques et sera un tremplin pour ma future carrière professionnelle. En ce qui concerne mes objectifs professionnels, je suis encore en phase d&#8217;exploration. Cependant, je suis animé par une curiosité pour les différents domaines de l&#8217;informatique, tels que le développement logiciel, la cybersécurité ou encore l&#8217;intelligence artificielle.
          </p>
          <button className='neo-btn neo-brutalism-white' onClick={() => toggleInfoBoxSize()}>
              {infoBoxSize === 'small' ? 'Voir plus' : 'Voir moins'}
          </button> 
      </div>
        ),
        5: <img src={drag} />
    };

    return renderContent[currentStage] || null;
};

export default HomeInfo;
