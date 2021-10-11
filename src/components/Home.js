import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <>
      <div className="vimeo-wrapper">
        <iframe
          src="https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&byline=0&title=0"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen
          allowFullScreen
        >
        </iframe>
      </div>
      <div className="home-wrapper container">
        <h1>WOGO FILMES</h1>
        <h2>Lorem Ipsum passages, and more recently with desktop publishing software</h2>
        <h3>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h3>
      </div>
    </>
  )
}

export default Home
