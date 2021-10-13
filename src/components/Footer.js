import React from "react"
import { Link } from 'gatsby'
import { Instagram, Film } from 'react-feather'
import './Footer.scss'

const FooterWrapper = () => {
  return (
    <footer>
      <div className="footer-wrapper container">
        <div className="infos">
          <p>Avenida Rio Branco</p>
          <p>Nº 404, Sala 307, Bloco 1 - Centro</p>
          <p>Florianópolis - SC</p>
        </div>
        <div className="infos">
          <p>contato@wogofilmes.com.br</p>
        </div>
        <div className="infos">
          <Link to={"https://instagram.com/wogofilmes"}>
            <Instagram color={"var(--dark-gray)"} />
          </Link>
          <Link to={"https://vimeo.com/wogofilmes"}>
            <Film color={"var(--dark-gray)"} />
          </Link>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2021 WOGO FILMES.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterWrapper
