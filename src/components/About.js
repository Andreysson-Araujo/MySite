import React from 'react'
import "../styles/About.css"
import AboutBg from "../assets/about-background.png"
import Mapinguari from "../assets/mapinguari2.png"

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBg}/>
        </div>
        <div className='about-section-image-container'>
            <img src={Mapinguari}/>
        </div>
        <div className='about-section-text-container'>
            <h1 className="primary-heading">Sobre mim</h1>
            <p className='primary-text'>
              Me chamo Andreysson estudante de Analise e Desenvolvimento de Sistemas,
              atualmente atuo como estagiario em programação num orgão do estado do Acre,
              desenvolvendo e prestando suporte aos sistemas existentes. 
            </p>
            <h2 className='text2simple'>Sei utilizar:</h2>
              <p align="left" className='icons'>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" width="40" height="40"/>
            </p>
        </div>
    </div>
  )
}

export default About