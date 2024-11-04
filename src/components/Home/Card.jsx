import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importa o Link
import f1Image from '../../../public/img/formula-1/banner.jpg';
import formulaEImage from '../../../public/img/Formula-E/banner.png';
import formulaTruckImage from '../../../public/img/formula-truck/banner.jpg';
import rallyImage from '../../../public/img/rally/banner.jpg';
import enduranceImage from '../../../public/img/endurence/banner.jpg';

const Categories = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;

  .category-card {
    position: relative; /* Para posicionar o overlay */
    color: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s;
    background-size: cover; /* Para cobrir todo o card */
    background-position: center; /* Para centralizar a imagem */
    height: 200px; /* Ajuste a altura conforme necessário */

    &:hover {
      transform: scale(1.05);
    }

    /* Overlay para melhorar a legibilidade do texto */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5); /* Fundo preto semitransparente */
      border-radius: 8px; /* Para arredondar os cantos */
      z-index: 1; /* Coloca o overlay abaixo do texto */
    }

    h3 {
      margin: 1rem 0;
      font-size: 1.75rem; /* Aumentar o tamanho da fonte */
      z-index: 2; /* Para garantir que o texto fique acima do overlay */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Adiciona sombra ao texto */
    }

    p {
      font-size: 1.2rem; /* Aumentar o tamanho da fonte */
      z-index: 2; /* Para garantir que o texto fique acima do overlay */
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Adiciona sombra ao texto */
    }
  }
`;

function Card() {
  const categories = [
    { name: 'Formula E', description: 'Electric racing at its finest.', bgImage: formulaEImage, link: '/formula-e/mais-informacoes' },
    { name: 'Formula Truck', description: 'Heavy-duty racing.', bgImage: formulaTruckImage, link: '/formula-truck/mais-informacoes' },
    { name: 'Rally', description: 'Off-road adventure and speed.', bgImage: rallyImage, link: '/rally-sertoes/mais-informacoes' },
    { name: 'Endurance', description: 'The ultimate test of durability.', bgImage: enduranceImage, link: '#' },
  ];

  return (
    <Categories>
      {categories.map((category, index) => (
        <Link 
          key={index} 
          to={category.link} 
          style={{ textDecoration: 'none' }} // Remove underline
        >
          <div 
            className="category-card" 
            style={{ backgroundImage: `url(${category.bgImage})` }} // Define a imagem de fundo
          >
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        </Link>
      ))}
    </Categories>
  );
}

export default Card;
