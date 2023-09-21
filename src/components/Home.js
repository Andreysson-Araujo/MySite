import React from "react";
import Barra from "./Barra";
import BannerBackground from "../assets/home-banner-background.png";
import Mage from "../assets/mage.png"
import BannerImage from "../assets/untitled.png";
import Pok from "../assets/pok.png"
import { AiOutlineGithub } from "react-icons/ai";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Barra />
      <img className="myPixel" src={BannerImage} alt="" />
      <div className="home-banner-contaienr">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""></img>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            O pior melhor Programador do Mundo
          </h1>
          <p className="primary-text">Qualidade e gambiarra? É comigo mesmo</p>
          <button className="secondary-button">
            Repositorios <AiOutlineGithub size="1.7rem" />
          </button>
        </div>
        <div className="home-image-section">
            <img  className="banner-principal" src={Mage}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
