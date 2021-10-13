import React from 'react'
import Layout from "../components/Layout"
import './Contato.scss'

const Contato = () => {
  return (
    <Layout>
      <div className="contato-wrapper container">
        <h1>Contato</h1>
        <p>
          Vamos conversar?
        </p>
        <div className="contato-text">
        <p>
          Email: contato@wogofilmes.com.br
          <br />
          <br />
          Vimeo: vimeo.com/wogofilmes
          <br />
          <br />
          Instagram: instagram.com/wogofilmes
          <br />
          <br />
          Endereço: Avenida Rio Branco, Nº 404, Sala 307, Bloco 1 - Centro, Florianópolis - SC
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contato
