import React from 'react'
import "../styles/About.css"
import Mapinguari from "../assets/mapinguari2.png"

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img/>
        </div>
        <div className='about-section-image-container'>
            <img src={Mapinguari}/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>Sobre mim</p>
            <h1 className="primary-heading">Conheça mais sobre mim</h1>
            <p className='primary-text'>
              Me chamo Andreysson estudante de Analise e Desenvolvimento de Sistemas,
              atualmente atuo como estagiario em programação num orgão do estado do Acre,
              desenvolvendo e prestando suporte aos sistemas existentes. 
            </p>
            <p className='primary-text'>
              Gosto de desenvolver jogos e fazer pixel art como hobby
            </p> 
        </div>
    </div>
  )
}

export default About