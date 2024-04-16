import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Laptop from '../models/Laptop'
import Loader from '../components/Loader';

const AboutMe = () => {
  return (
    <section className='max-container'>
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
        <div className='flex'>
          <div className='w-1/2 m-1'>
            <div >Python</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-3/4 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
          <div className='w-1/2 m-1'>
            <div >Kotlin/Java</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-4/6 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/2 m-1'>
            <div >Html/Css</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-3/5 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
          <div className='w-1/2 m-1'>
            <div >JavaScript</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-1/2 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/2 m-1'>
            <div >Golang</div>
            <div className='h-6 w-3/5' style={{borderColor: 'black', borderWidth : 1, borderRadius : 7}}>
              <div className='w-3/4 h-4 m-1 rounded' style={{backgroundColor : 'black'}}></div>
            </div>
          </div>
        </div>
        <span className='head-text w-full' id='project'>Mes projets</span>
        

      </div>
      
    </section>
  )
}

export default AboutMe