import React from "react"
import './Footer.scss'

const FooterWrapper = () => {
  return (
    <footer>
      <div className="footer-wrapper container">
        <div className="infos">
          <p>R. Santo Irineu</p>
          <p>Bosque da Saúde</p>
          <p>Floripa, BR</p>
        </div>
        <div className="infos">
          <p>hi@wogofilmes.com</p>
        </div>
        <div className="infos">
          <p>instagram</p>
          <p>linkedin</p>
          <p>facebook</p>
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
