import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import download from '../assets/icons/download.svg';
import drag from '../assets/animated/drag_left.gif';

const HomeInfo = ({ currentStage, canvasExpansion }) => {
    const [infoBoxSize, setInfoBoxSize] = useState('small');

    const toggleInfoBoxSize = () => {
        setInfoBoxSize(prevSize => prevSize === 'small' ? 'big' : 'small');
    };

    const renderContent = {
        1: (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Vous trouverez ci-dessous mon CV pour en savoir plus sur mon parcours professionnel et mes compétences
                </p>
                <a href='../assets/CV_PHAN_Theo.pdf' download="CV_PHAN_Theo.pdf" className='neo-brutalism-white neo-btn'>
                    Mon CV
                    <img src={download} alt='download' className='w-4 h-4 object-contain' />
                </a>
            </div>
        ),
        2: <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                Et ci-dessous, vous trouverez ma lettre de motivation, où je partage mon enthousiasme, mes compétences et ma passion pour cette opportunité.
                </p>
                <a href='' download="" className='neo-brutalism-white neo-btn'>
                    Ma lettre de motivation
                    <img src={download} alt='download' className='w-4 h-4 object-contain'/>
                </a>
            </div>,
        3: (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum dignissimos cumque inventore assumenda animi ullam a asperiores eligendi quibusdam est dolore excepturi autem maiores illum, perspiciatis, voluptate fugit! Vitae.
                </p>
                <Link to='/AboutMe' className='neo-brutalism-white neo-btn'>
                    Apprendre plus sur moi
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        ),
        4: (
            <div className={`info-box ${infoBoxSize}`}>
                <p className='font-medium sm:text-xl text-center w-full' style={{paddingBottom: 20}}>Bonjour, je m&#8217;appelle <span className='font-semibold'>Theo</span></p>
                <p className={`${infoBoxSize === 'small' ? 'opacity-0 pointer-events-none' : 'opacity-100'} text-center transition-opacity duration-300 text-align-justify`}>
                Je suis étudiant en première année de BUT Informatique à l'IUT de Nantes. Passionné par la programmation, je vise une école d'ingénieur après ma deuxième année pour approfondir mes compétences. Je m'intéresse particulièrement au développement logiciel, à la cybersécurité et à l'intelligence artificielle.
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
