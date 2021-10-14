import React from 'react'
import './Home.scss'

import Logo from '../../static/assets/logos/Logo-Wogo.png'
import Intro from '../../static/assets/intro.mp4'

const Home = () => {
  return (
    <>
      <div className="vimeo-wrapper">
        <video id="video-hero" muted autoPlay loop>
          <source src={Intro} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="home-wrapper container">
        <img src={Logo} alt="logo wogo filmes" />
        <h3>
          Aqui as ideias que se transformam em vídeos capazes de conectar pessoas.
          Do roteiro, à produção e à finalização completa de cada projeto.
        </h3>
      </div>
    </>
  )
}

export default Home
