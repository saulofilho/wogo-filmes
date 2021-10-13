import React from 'react'
import Layout from "../components/Layout"
import './Cinema-tv.scss'

import Mariela1 from '../../static/assets/cinema/014-Mariela.jpg'
import Horizonte from '../../static/assets/cinema/horizonte.jpg'
import Vampiro from '../../static/assets/cinema/vampiro.png'
import Anita from '../../static/assets/cinema/Eu-me-chamo-anita.jpg'
import Espirito from '../../static/assets/cinema/espirito.png'
import Mariela2 from '../../static/assets/cinema/003-Mariela.jpg'

const CinemaTV = () => {
  return (
    <Layout>
      <div className="cinematv-wrapper container">
        <div className="cine-header-wrapper">
          <h1>Cinema & TV</h1>
          <p>
            Desde 2015, a Wogo Filmes possui um braço totalmente dedicado à produção
            de conteúdos de entretenimento para cinema e TV.
          </p>
        </div>
        <section className="cinema-project-wrapper">
          <img src={Mariela1} alt="img about project" />
          <h2>
            MARIELA VAI À PRAIA | Curta-metragem, 2015
          </h2>
          <p className="cinema-italic">
            Projeto contemplado no Prêmio Catarinense de Cinema 2013/2014
          </p>
          <p className="cinema-text">
            Gênero: Drama
            <br />
            Acompanhamos de forma leve e divertida a jornada de Mariela, que depois
            de ter fugido para o Rio de Janeiro, na esperança de se tornar uma atriz
            de sucesso, volta pela primeira vez em dois anos para a sua cidade natal,
            no litoral sul de Santa Catarina. Ali, ela precisa enfrentar as pessoas que
            deixou para trás; seus pais, seu irmão, suas amigas e seu antigo namorado.
            Todos ainda marcados por sua repentina saída, e surpresos por sua inesperada chegada.
            Afinal, eles continuam sem saber os motivos que a levaram a sair da cidade, e os que a fizeram voltar.
          </p>
        </section>
        <section className="cinema-project-wrapper">
          <img src={Horizonte} alt="img about project" />
          <h2>
            HORIZONTE PERDIDO | Longa-metragem
          </h2>
          <p className="cinema-italic">
            Projeto contemplado no Prêmio Catarinense de Cinema 2012 na categoria Desenvolvimento de Roteiros.
          </p>
          <p className="cinema-text">
            Gênero: Ficção/Aventura
            <br />
            Uma busca, uma ilha e uma incrível aventura que irá levar um garoto de volta ao seu destino. Caio Ribeiro é um adolescente que está sendo pressionado pela sua família para fazer o vestibular para um curso de que não gosta, até que decide fugir para Florianópolis com um amigo, onde acaba se envolvendo num original campeonato de Surf e vive uma aventura que altera para sempre o seu destino e o de uma misteriosa ilha.
          </p>
        </section>
        <section className="cinema-project-wrapper">
          <img src={Vampiro} alt="img about project" />
          <h2>
            O VAMPIRO DE SANTA CATARINA | Longa-metragem
          </h2>
          <p className="cinema-italic">
            Projeto em fase de captação
          </p>
          <p className="cinema-text">
            Gênero: Comédia
            <br />
            Ocorrem mortes misteriosas no mercado público municipal de Florianópolis. Os pescadores desconfiam de que existe um vampiro infiltrado entre eles e resolvem procurar Dr. Gregori, um detetive falido, para solucionar o mistério. Dr. Gregori reluta num primeiro momento, mas após um encontro com o vampirólogo Chico Caolho, acaba infectado pelo vírus vampírico e se torna o principal suspeito pelas mortes. Agora a única chance de provar a sua inocência é capturar o verdadeiro vampiro, encontrar a cura para o vampirismo e salvar a cidade de um grande perigo.
          </p>
        </section>
        <section className="cinema-project-wrapper">
          <img src={Anita} alt="img about project" />
          <h2>
            EU ME CHAMO ANITA | Série, 6 episódios
          </h2>
          <p className="cinema-italic">
            Projeto em fase de captação
          </p>
          <p className="cinema-text">
            Gênero: Drama/Histórico
            <br />
            Apesar de uma infância difícil e um casamento forçado, Ana Maria de Jesus Ribeiro
            decidiu lutar na guerra, não só pela liberdade de milhares de pessoas, mas também para
            encontrar o seu lugar no mundo. Na primeira temporada de "Eu me chamo Anita"
            acompanhamos a sua trajetória, desde os momentos finais de seu primeiro matrimônio, até
            seu batismo de fogo: em uma grande batalha em alto mar junto da revolução. Uma história
            sobre os nossos conflitos internos, sobre recomeço, e sobre como uma menina do litoral
            catarinense se tornou a tão conhecida Anita: “A heroína de dois mundos"
          </p>
        </section>
        <section className="cinema-project-wrapper">
          <img src={Espirito} alt="img about project" />
          <h2>
            O ESPÍRITO MANÉ DE NATAL | Curta-metragem
          </h2>
          <p className="cinema-italic">
            Projeto em fase de captação
          </p>
          <p className="cinema-text">
            Gênero: Comédia/Infanto-Juvenil
            <br />
            Aguiar, um empresário sovina da grande Florianópolis, é visitado pelo Espírito Mané do Natal, que chega para avaliar suas ações do ano inteiro. O Espírito Mané do Natal faz Aguiar voltar no tempo e, munido de técnicas “ilheis” de persuasão, ajuda-o a repensar suas atitudes, transformando este natal no mais belo de sua vida! “ Manézinhamente” inspirado no conto: Uma canção de natal, de Charles Dickens.
          </p>
        </section>
        <section className="cinema-project-wrapper">
          <img src={Mariela2} alt="img about project" />
          <h2>
            MARIELA VAI À PRAIA | Série, 10 episódios 2018
          </h2>
          <p className="cinema-italic">
            Projeto em fase de captação
          </p>
          <p className="cinema-text">
            Gênero: Drama
            <br />
            Mariela vai à praia é uma série que teve seu episódio piloto contemplado na categoria curta-metragem do Prêmio Catarinense de Cinema 2013/2014. Na trama, após uma tentativa frustrada de se tornar uma atriz de sucesso no Rio de Janeiro, e retornar à sua cidade natal no litoral sul de Santa Catarina, Mariela precisa lidar com as pessoas que deixou para trás: sua família, suas amigas, e seu antigo namorado. Tentando encontrar o seu lugar, e qual será o seu próximo passo, ela aos poucos percebe que talvez já não faça mais parte da vida de alguma daquelas pessoas. Uma jornada de crescimento e amadurecimento, que reflete as descobertas da vida do jovem adulto.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default CinemaTV
