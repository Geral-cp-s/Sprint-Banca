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
import rcmCar from '../../../public/img/stock/rcm/carro.png';
import rcmLogo from '../../../public/img/stock/rcm/logo.png';

import tmgCar from '../../../public/img/stock/tmg/carro.png';
import tmgLogo from '../../../public/img/stock/tmg/logo.png';

import crownCar from '../../../public/img/stock/crown/carro.png';
import crownLogo from '../../../public/img/stock/crown/logo.png';

import mobilCar from '../../../public/img/stock/mobil/carro.png';
import mobilLogo from '../../../public/img/stock/mobil/logo.png';

import vogelCar from '../../../public/img/stock/vogel/carro.png';
import vogelLogo from '../../../public/img/stock/vogel/logo.png';

import euroCar from '../../../public/img/stock/euro/carro.png';
import euroLogo from '../../../public/img/stock/rcm/logo.png';

import poleCar from '../../../public/img/stock/pole/carro.png';
import poleLogo from '../../../public/img/stock/pole/logo.png';

import ipirangaCar from '../../../public/img/stock/ipiranga/carro.png';
import ipirangaLogo from '../../../public/img/stock/ipiranga/logo.png';

import cavaleiroCar from '../../../public/img/stock/cavaleiro/carro.png';
import cavaleiroLogo from '../../../public/img/stock/cavaleiro/logo.png';

import blauCar from '../../../public/img/stock/tmg/carro.png';
import blauLogo from '../../../public/img/stock/blau/logo.png';

import fullCar from '../../../public/img/stock/full/carro.png';
import fullLogo from '../../../public/img/stock/full/logo.png';

import ktfCar from '../../../public/img/stock/ktf/carro.png';
import ktfLogo from '../../../public/img/stock/ktf/logo.png';

import ktf1Car from '../../../public/img/stock/ktf/carro1.png';
import ktf1Logo from '../../../public/img/stock/ktf/logo.png';

import scuderiaCar from '../../../public/img/stock/scuderia/carro.png';
import scuderiaLogo from '../../../public/img/stock/scuderia/logo.png';

import wokinCar from '../../../public/img/stock/wokin/carro.png';
import wokinLogo from '../../../public/img/stock/wokin/logo.png';

import rtxCar from '../../../public/img/stock/rtx/carro.png';
import rtxLogo from '../../../public/img/stock/rtx/logo.png';



// Componente Card
const Card = ({ victories, teamName, teamLogo, carImage, link }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <CardContainer>
      <DateSection>
          <div className="metric-item">
            <span className="metric-value">{victories}</span>
            <span className="metric-label">Pontos </span>
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
      victories: 1444,
      teamName: 'RCM Motosports',
      teamLogo: rcmLogo,
      carImage: rcmCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 1410,
      teamName: 'TMG Racing',
      teamLogo: tmgLogo,
      carImage: tmgCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 1368,
      teamName: 'Crown Racing',
      teamLogo: crownLogo,
      carImage: crownCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 1332,
      teamName: 'Mobil Ale',
      teamLogo: mobilLogo,
      carImage: mobilCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 1249,
      teamName: 'Amattheis Vogel Motorsport Raumak',
      teamLogo: vogelLogo,
      carImage: vogelCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 1249,
      teamName: 'Eurofarma RC',
      teamLogo: euroLogo,
      carImage: euroCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 1130,
      teamName: 'Pole Motorsport',
      teamLogo: poleLogo,
      carImage: poleCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 1054,
      teamName: 'Ipiranga Racing',
      teamLogo: ipirangaLogo,
      carImage: ipirangaCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 937,
      teamName: 'Cavaleiro Sports',
      teamLogo: cavaleiroLogo,
      carImage: cavaleiroCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 916,
      teamName: 'Blau Motosports',
      teamLogo: blauLogo,
      carImage: blauCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 853,
      teamName: 'Full Time Sports',
      teamLogo: fullLogo,
      carImage: fullCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 743,
      teamName: 'KTF Racing',
      teamLogo: ktfLogo,
      carImage: ktfCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 519,
      teamName: 'KTF Sports',
      teamLogo: ktf1Logo,
      carImage: ktf1Car,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 345,
      teamName: 'Scuderia Chiarelli',
      teamLogo: scuderiaLogo,
      carImage: scuderiaCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 275,
      teamName: 'Wokin Garra Racing',
      teamLogo: wokinLogo,
      carImage: wokinCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 7,
      teamName: 'RTX Racing',
      teamLogo: rtxLogo,
      carImage: rtxCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
  ];

  return (
    <CardListContainer>
      {teamsData.map((team, index) => (
        <Card
          key={index}
          victories={team.victories}
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
