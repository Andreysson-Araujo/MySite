import { React } from "react";
import Sorvete from "../assets/sorve.png"
import BoxHead from "../assets/box-head.png"
import PinkSauro from "../assets/pinksauro.png"
import PiperMan from "../assets/pipercreep.png"
import Mage from "../assets/mage.png"
import "../styles/opsFriends.css";

const Friends = () => {
  return (
    <div className="opsfriends-container">
      <div className="opsfriends-banner-container">
        <img className="sorvete-pixel" src={Sorvete}/>
        <img className="box-head" src={BoxHead}/> 
        <img className="piperman" src={PiperMan}/>
      </div> 
      
      <div className="opsfriends-text-section">
        <h1 className="primary-heading">
            Conheça os meus OPSFriends
        </h1>
        <p className="primary-text">
            OPSFriends(Open-Source Friends) Amigos de Código Aberto,
            é um projeto de artes de uso livre que podem ser comercializadas
            gratuitamente por artistas, podem ser utilizadas em jogos, camisas
            ou Acessorios.  
        </p>
        <button className="secondary-button">
            Acesse a Loja
        </button>
      </div>
    </div>
  );
};

export default Friends;
