import "./competition.css";
import Rodape from "../components/rodape.jsx";
import NavbarPQNI from "../components/navbarPQNI.jsx";

function Competition() {
  return (
    <>
      <Rodape />
      <NavbarPQNI />
      <div className="mainFRC">
        <h1>FIRST Robotic Competition</h1>
        <p>
          A FIRST Robotics Competition (FRC) é uma competição internacional de
          robótica voltada para estudantes do ensino médio, organizada pela
          FIRST. Ela desafia equipes a projetar, construir e programar robôs de
          grande porte para cumprir tarefas complexas em um ambiente dinâmico e
          competitivo. A cada temporada, as equipes recebem um kit de peças e
          têm seis semanas para desenvolver um robô funcional capaz de
          participar dos desafios específicos do ano. Os jogos são disputados em
          alianças, onde três equipes se juntam para competir contra outras,
          promovendo a colaboração estratégica e incentivando valores como o
          Gracious Professionalism® e o Coopertition®, que destacam a
          importância do respeito e da cooperação, mesmo em um ambiente
          competitivo. Além de aprimorar habilidades técnicas relacionadas à
          engenharia, programação e design mecânico, os participantes também
          desenvolvem competências interpessoais, como liderança, comunicação e
          trabalho em equipe. A FRC oferece oportunidades educacionais
          significativas, incluindo acesso a bolsas de estudo universitárias e
          experiências práticas que preparam os jovens para carreiras no setor
          tecnológico e científico. Os eventos classificatórios acontecem ao
          redor do mundo e culminam no FIRST Championship, onde as melhores
          equipes disputam pelo título máximo. A competição não apenas
          impulsiona o conhecimento técnico, mas também fortalece o espírito de
          inovação e criatividade, moldando a próxima geração de engenheiros e
          líderes.
        </p>
      </div>
      <div className="containerEspacamentoCompetition"></div>
    </>
  );
}

export default Competition;
