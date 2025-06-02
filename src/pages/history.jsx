import "./history.css";
import NavbarPQNI from "../components/navbarPQNI";
import Rodape from "../components/rodape";

function History() {
  return (
    <>
      <Rodape />
      <NavbarPQNI />
      <div className="historyDiv">
        <h1>Nossa História</h1>
        <p>
          FRC 10790 foi fundada em 2023 por cinco estudantes, com o apoio de
          Sérgio de Oliveira Manga, engenheiro formado em Engenharia de Controle
          e Automação e professor do IFBA (Instituto Federal da Bahia). Com sede
          no Instituto Federal de Salvador, a equipe nasceu do sonho de tornar a
          robótica mais acessível e de incentivar os jovens a se envolverem com
          ciência e tecnologia. Com o apoio adicional da AIDTEC (Associação
          Internacional para o Desenvolvimento Tecnológico), uma organização não
          governamental criada para fomentar e promover a inovação em ciência,
          tecnologia e educação, começamos a desenvolver projetos sociais e
          educacionais como "Asas que Motivam" e "Conhecer, Sonhar e Voar". Esta
          é uma equipe fictícia criada para o processo seletivo, mas, as pessoas
          que estão suando por ela são reais. Todos os membros desta equipe
          tiveram uma contribuição significativa para o progresso coletivo.
          Algumas pessoas se esforçaram em marketing, decidindo cores, nome da
          equipe, logo; outras pessoas deram tudo de si em prêmios pensando em
          patrocínios e causas sociais para concorrer ao Impact Award da
          FRC5800; Além dessas pessoas, tiveram aqueles que criaram um robô,
          como os alunos da área de engenharia e os alunos de programação que
          deram ao robô uma vida. Todos tiveram uma participação forte,
          abrangendo todas as áreas.
        </p>
      </div>
      <div className="divMembrosProg">
        <h1>Membros de Programação:</h1>
        <nav>
          <ul>
            <li>João Lucas Frata</li>
            <li>Pedro P. Soster</li>
            <li>Gabriel Akira Omuro</li>
            <li>Vicente Garcia</li>
          </ul>
        </nav>
      </div>
      <div className="divMembrosEng">
        <h1>Membros de Engenharia:</h1>
        <nav>
          <ul>
            <li>Elis Cecan</li>
            <li>Pedro Schappo</li>
            <li>Renan Frey</li>
          </ul>
        </nav>
      </div>
      <div className="divMembrosMark">
        <h1>Membros de Marketing:</h1>
        <nav>
          <ul>
            <li>Antônio H.</li>
            <li>Rafaella Amorim</li>
            <li>Ruan Erick</li>
            <li>Gabriel Gonzalez</li>
          </ul>
        </nav>
      </div>
      <div className="divMembrosPrem">
        <h1>Membros de Prêmios:</h1>
        <nav>
          <ul>
            <li>Ana Júlia Félix</li>
            <li>Catarina Studzinski</li>
            <li>Guilherme Tavares</li>
            <li>Lavínia Rubik</li>
            <li>Maria Eduarda Casotti</li>
            <li>Zara Borges</li>
          </ul>
        </nav>
      </div>
      <div className="containerEspacamentoHistory"></div>
    </>
  );
}

export default History;
