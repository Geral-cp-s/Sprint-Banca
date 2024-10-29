import React from 'react';
import styled from 'styled-components';

// Estilizando o contêiner para as imagens
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // Para espaço entre as imagens
  margin: 20px 0; // Adiciona espaçamento acima e abaixo do contêiner
`;

// Estilizando as imagens dos pilotos
const PilotImage = styled.img`
  width: 100%; // Ajusta a largura das imagens para caber 4 por linha
  border-radius: 10px;
  margin-bottom: 20px; // Espaço abaixo de cada imagem
  transition: transform 0.3s ease, box-shadow 0.3s ease; // Transições suaves para o efeito de hover

  &:hover {
    transform: scale(1.05); // Aumenta o tamanho da imagem ao passar o mouse
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); // Adiciona uma sombra ao passar o mouse
  }
`;

// Estilizando o título
const Title = styled.h1`
  font-size: 1.7; /* Tamanho da fonte */
    color: #1a252f; /* Cor do texto um pouco mais escura */
    text-align: center; /* Centraliza o título */
    margin: 30px 0; /* Espaçamento em cima e embaixo */
    font-weight: bold; /* Negrito */
    text-transform: uppercase; /* Transformação do texto para maiúsculas */
    letter-spacing: 1px; /* Espaçamento entre as letras */
    text-decoration: underline; /* Adiciona sublinhado */
    font-family: "Audiowide", sans-serif;
    text-decoration-color: red; /* Cor do sublinhado */
`;

const pilotsImages = [
  { image: "/img/formula-truck/pilotos/rodrigo.webp" },
  { image: "/img/formula-truck/pilotos/alvaro.webp" },
  { image: "/img/formula-truck/pilotos/ramiris.webp" },
  { image: "/img/formula-truck/pilotos/tulio.webp" },
  { image: "/img/formula-truck/pilotos/leo.webp" },
  { image: "/img/formula-truck/pilotos/alex.webp" },
  { image: "/img/formula-truck/pilotos/marcio.webp" },
  { image: "/img/formula-truck/pilotos/adriano.webp" },
  { image: "/img/formula-truck/pilotos/pedro.webp" },
  { image: "/img/formula-truck/pilotos/paulo.webp" },
  { image: "/img/formula-truck/pilotos/feio.webp" },
  { image: "/img/formula-truck/pilotos/daril.webp" },
  { image: "/img/formula-truck/pilotos/joaozinho.webp" },
  { image: "/img/formula-truck/pilotos/everton.webp" },
  { image: "/img/formula-truck/pilotos/joao.webp" },
  { image: "/img/formula-truck/pilotos/robson.webp" },
  { image: "/img/formula-truck/pilotos/bate.webp" },
  { image: "/img/formula-truck/pilotos/portaluppi.webp" },
  { image: "/img/formula-truck/pilotos/fabricio.webp" },
  { image: "/img/formula-truck/pilotos/sandro.webp" },
  { image: "/img/formula-truck/pilotos/helder.webp" },
  { image: "/img/formula-truck/pilotos/zetti.webp" },
  { image: "/img/formula-truck/pilotos/alisson.webp" },
  { image: "/img/formula-truck/pilotos/rafael.webp" },
  { image: "/img/formula-truck/pilotos/bryan.webp" },
  { image: "/img/formula-truck/pilotos/taio.webp" },
  { image: "/img/formula-truck/pilotos/lisarb.webp" },
  { image: "/img/formula-truck/pilotos/geraldinho.webp" },
  { image: "/img/formula-truck/pilotos/marcelo.webp" },
  { image: "/img/formula-truck/pilotos/nilton.webp" },
  { image: "/img/formula-truck/pilotos/ricardo.webp" },
  { image: "/img/formula-truck/pilotos/edivan.webp" },
  // Adicione mais imagens de pilotos conforme necessário
];

function EquipesTruck() {
  return (
    <div className="App">
      <Title>Pilotos</Title>
      <ImageContainer>
        {pilotsImages.map((pilot, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <PilotImage
              src={pilot.image}
              alt="Pilot"
            />
            <p>{pilot.name}</p>
          </div>
        ))}
      </ImageContainer>
    </div>
  );
}

export default EquipesTruck;
