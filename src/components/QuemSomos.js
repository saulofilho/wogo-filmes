import React from 'react'
import './QuemSomos.scss'
import Img from '../../static/assets/default-img.jpg'
import { Link } from 'gatsby'

const QuemSomos = () => {
  return (
    <div className="quem-wrapper container">
      <div className="quem-row">
        <div className="quem-col">
          <img src={Img} alt="teste" />
        </div>
        <div className="quem-col">
          <h2>Quem somos nós?</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
      <div className="quem-row">
        <div className="quem-col">
          <img src={Img} alt="teste" />
        </div>
        <div className="quem-col">
          <h2>Matheus Souza</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32.
          </p>
        </div>
        <div className="quem-col">
          <img src={Img} alt="teste" />
        </div>
        <div className="quem-col">
          <h2>Richard Valentini</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuemSomos
