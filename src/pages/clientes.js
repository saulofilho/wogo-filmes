import React from 'react'
import Layout from "../components/Layout"
import './Clientes.scss'

import Img from '../../static/assets/default-img.jpg'

const Clientes = () => {
  return (
    <Layout>
      <div className="clientes-wrapper container">
        <h1>Clientes</h1>
        <p>
          Lorem Ipsum passages, and more recently with desktop publishing software
        </p>
        <div className="nossos-clientes-logos">
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
          <img src={Img} alt="cliente logo" />
        </div>
      </div>
    </Layout>
  )
}

export default Clientes
