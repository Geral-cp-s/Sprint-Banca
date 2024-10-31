import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de ter o react-router-dom instalado
import {
  CardListContainer,
  CardContainer,
  DateSection,
  DetailsSection,
  TeamFlagSection,
  ImageSection
} from './styledEquipes';

// Importando as imagens
import abtCupraCar from '../../../public/img/stock/rcm/carro.png';
import abtCupraLogo from '../../../public/img/stock/rcm/logo.png';



// Componente Card
const Card = ({ victories, podiums, races, teamName, teamLogo, carImage, link }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <CardContainer>
        <DateSection>
          <div className="metric-item">
            <span className="metric-label">🏆 Vitórias</span>
            <span className="metric-value">{victories}</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Pontos</span>
            <span className="metric-value">{podiums}</span>
          </div>
        </DateSection>
        <DetailsSection>
          <TeamFlagSection>
            <img src={teamLogo} alt={`${teamName} logo`} />
            <span>{teamName}</span>
          </TeamFlagSection>
        </DetailsSection>
        <ImageSection>
          <img src={carImage} alt={`Carro da equipe ${teamName}`} />
        </ImageSection>
      </CardContainer>
    </Link>
  );
};

// Componente que renderiza a lista de cards
const Cards = () => {
  const teamsData = [
    {
      victories: 0,
      podiums: 1444,
      teamName: 'RCM Motosports',
      teamLogo: abtCupraLogo,
      carImage: abtCupraCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
  ];

  return (
    <CardListContainer>
      {teamsData.map((team, index) => (
        <Card
          key={index}
          victories={team.victories}
          podiums={team.podiums}
          races={team.races}
          teamName={team.teamName}
          teamLogo={team.teamLogo}
          carImage={team.carImage}
          link={team.link} // Passando o link
        />
      ))}
    </CardListContainer>
  );
};

export default Cards;
