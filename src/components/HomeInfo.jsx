import React from 'react';
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import download from '../assets/icons/download.svg';
import drag from '../assets/animated/drag_left.gif';


const HomeInfo = ({ currentStage}) => {
    
    const renderContent = {
        1: (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Je suis un étudiant en première année d&#8217;un BUT en Informatique.Vous trouverez ci-dessous mon CV.
                </p>
                <a href="CV_PHAN_Theo.pdf" download={'CV_PHAN_Theo.pdf'} className='neo-brutalism-white neo-btn'>
                    Mon CV
                    <img src={download} alt='download' className='w-4 h-4 object-contain' />
                </a>
            </div>
        ),
        2: <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                Et ci-dessous, vous trouverez ma lettre de motivation, où je partage mon enthousiasme, mes compétences et ma passion pour cette opportunité.
                </p>
                <a href="Lettre_de_motivation_PHAN_Theo.pdf" download={'Lettre_de_motivation_PHAN_Theo.pdf'} className='neo-brutalism-white neo-btn'>
                    Ma lettre de motivation
                    <img src={download} alt='download' className='w-4 h-4 object-contain'/>
                </a>
            </div>,
        3: (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                Explorez davantage à mon sujet en cliquant ci-dessous.
                </p>
                <Link to='/AboutMe' className='neo-brutalism-white neo-btn'>
                En savoir plus sur moi
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        ),
        4: (
            
                <p className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5' >Bonjour, je m&#8217;appelle <span className='font-semibold'>Theo</span></p>
                
                
            
        ),
        5: <img src={drag} />
    };
    return renderContent[currentStage] || null;
};

export default HomeInfo;
