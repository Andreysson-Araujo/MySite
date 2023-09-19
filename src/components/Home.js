import React  from "react";
import Barra from "./Barra";
import BannerBackground from "../assets/home-banner-background.png"
import { AiOutlineGithub  } from "react-icons/ai";
import "../styles/Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <Barra/>
            <div className="home-banner-contaienr">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt=""></img>
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        O pior melhor Programador do Mundo
                    </h1>
                    <p className="primary-text">
                        Qualidade e gambiarra? É comigo mesmo
                    </p>
                    <button className="secondary-button">
                        Repositorios <AiOutlineGithub size="1.7rem"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home