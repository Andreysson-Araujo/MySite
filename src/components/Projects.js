import { React } from "react";
import "../App.css";
import "../styles/Projects.css"

import Financa from "../assets/pngegg.png"
import siteImg from "../assets/site.png"
import Pong from "../assets/pong.png"

const Projects = () => {
  const projectInfo = [
    {
      image: siteImg,
      title: "Simple landing Page",
      text: "Uma Pagina simples.",
    },
    {
      image: Pong,
      title: "Pong",
      text: "Um simples jogo de Ping-Pong."
    },
    {
      image: Financa,
      title: "Drac-Finaces",
      text : "Sitema de gerenciamento de Finanças."
    }
  ];
  return (
    <div className="project-section-wrapper">
        <div className="project-section-top">
            <h1 className="primary-heading">Experimente</h1>
        </div>
        <div className="project-section-bottom">
            {projectInfo.map((data) => (
              
                <div className="project-section-info" key={data.title}>
                    <div className="info-boxes-img-container">
                        <img className="project-img" src={data.image}/>
                    </div>
                    <h2>{data.title}</h2>
                    <p className="project-text">{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
};

export default Projects
