import React from 'react'
import { Link } from "react-router-dom";
import { projects } from '../components/MapConst';
import { arrow } from "../assets/icons";
import Footer from '../components/Footer'
const AboutMe = () => {

  return (
    <section>
      <div className='max-container'>
      <div className='head-text'>
        A propos de moi
      </div>
      <div className='m-5' >
        <p>
        Je m'appelle Théo PHAN et je suis actuellement en première année d'un BUT en Informatique à l'IUT de Nantes. Passionné par les défis du monde numérique, j'ai choisi cette filière pour explorer la programmation et le fonctionnement des technologies. Mon objectif académique est d'intégrer une école d'ingénieur à la fin de ma deuxième année. Cette étape me permettra d'approfondir mes connaissances techniques et sera un tremplin pour ma future carrière professionnelle. En ce qui concerne mes objectifs professionnels, je suis encore en phase d'exploration. Cependant, je suis animé par une curiosité pour les différents domaines de l'informatique, tels que le développement logiciel, la cybersécurité ou encore l'intelligence artificielle.
        </p>
        
      </div>
      <div>
        <span  className='head-text'>Compétences</span>
        <div className='flex flex-wrap'>
          <div className='m-1' style={{width: '400px'}}>
            <div className='m-1'>Python</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-3/4 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
          <div className='m-1' style={{width: '400px'}}>
            <div className='m-1'>Kotlin/Java</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-4/6 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='m-1' style={{width: '400px'}}>
            <div className='m-1'>Html/Css</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-3/5 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
          <div className='m-1' style={{width: '400px'}}>
            <div className='m-1'>JavaScript</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-1/2 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='m-1' style={{width: '400px'}}>
            <div className='m-1'>Golang</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-3/5 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
          <div className='m-1' style={{width: '400px'}}>
            <div className='m-1'>SQL</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-3/5 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
        </div>
        <span className='head-text w-full' id='project'>Mes projets</span>
        <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <img className='rounded '  src={project.image}/>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Lien vers projet
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
      </div>
      <Footer />
    </section>
  )
}

export default AboutMe