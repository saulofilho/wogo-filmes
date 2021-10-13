import React from 'react'
import './QuemSomos.scss'
import Matheus from '../../static/assets/matheus.png'
import Richard from '../../static/assets/Richard.png'
import Nos from '../../static/assets/Richard.png'

const QuemSomos = () => {
  return (
    <div className="quem-wrapper container">
      <div className="quem-row">
        <div className="quem-col">
          <img src={Nos} alt="quem somos nós foto" />
        </div>
        <div className="quem-col">
          <h2>Quem somos nós</h2>
          <p>
          Somos jovens e contadores de histórias! A Wogo Filmes é uma produtora
          audiovisual que quer transformar o jeito como produzimos conteúdos e
          entretenimento, nos mais diversos formatos: cinema, publicidade, internet e tv.
          Acreditamos que é possível criar produtos de qualidade, que se conectem com os espectadores,
          gerem impacto e que possam engajar o seu negócio. A cada projeto,
          reunimos um time de profissionais do mercado, especialistas em suas áreas,
          para trazer o melhor resultado.
          </p>
        </div>
      </div>
      <div className="quem-row">
        <div className="quem-col">
          <img src={Matheus} alt="Matheus" />
        </div>
        <div className="quem-col">
          <h2>Matheus Souza</h2>
          <h4>
            Diretor, Roteirista e Produtor Audiovisual
          </h4>
          <p>
            Atuo há mais de 10 anos no mercado audiovisual e tenho claro o meu
            gosto por contar histórias, por cuidar dos detalhes, e por garantir a
            qualidade técnica de cada material. Atendi diversas empresas da área e
            pude confirmar que vídeos e filmes se tornaram essenciais nos dias de hoje.
            Um jeito eficiente de se comunicar com diferentes gerações e estilos.
          </p>
        </div>
        <div className="quem-col">
          <img src={Richard} alt="Richard" />
        </div>
        <div className="quem-col">
          <h2>Richard Valentini</h2>
          <h4>
            Diretor, Roteirista e Produtor Audiovisual
          </h4>
          <p>
            Dizem que sou pragmático, mas prezo pela excelência, pelo propósito
            e pelo significado. Mais de uma década de audiovisual, me deram a
            sabedoria para equilibrar as necessidades do mercado e as minhas ambições artísticas.
            Trabalhar com projetos inovadores, questionadores de paradigmas e que
            apostem no potencial mais elevado do ser-humano, é o que faz meu coração vibrar.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuemSomos
