// src/components/Categorias.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe o Link

// Importe suas imagens locais
import f1Img from '../../public/img/formula-1/banner.jpg';
import formulaEImg from '../../public/img/Formula-E/banner.png';
import stockImg from '../../public/img/stock/banner.jpg';
import truckImg from '../../public/img/formula-truck/banner.jpg';
import enduranceImg from '../../public/img/endurence/banner.jpg';
import kartImg from '../../public/img/kart/banner.png';
import rallyImg from '../../public/img/rally/banner.jpg';
import f4Img from '../../public/img/formula-4/banner.jpg';

// Estilização dos componentes
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #eef2f3;
`;

const CategoriaCard = styled(Link)` // Altere aqui para usar o Link
  background: white;
  border-radius: 12px;
  width: 260px;
  margin: 15px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none; // Remover sublinhado do link

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CategoriaImagem = styled.img`
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 180px;
  object-fit: cover;
`;

const CategoriaNome = styled.h3`
  margin: 15px 0;
  font-size: 1.6em;
  color: #333;
  font-weight: 600;
`;

const CategoriaDescricao = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 0 15px 15px 15px;
  line-height: 1.4;
`;

const categorias = [
  {
    id: 1,
    nome: 'Fórmula 1',
    descricao: 'A categoria de maior prestígio do automobilismo mundial.',
    imagem: f1Img,
    link: '#', // Adicione um link para cada categoria
  },
  {
    id: 2,
    nome: 'Fórmula E',
    descricao: 'Corridas de carros elétricos em circuitos urbanos.',
    imagem: formulaEImg,
    link: '/formula-e/mais-informacoes',
  },
  {
    id: 3,
    nome: 'Stock Car',
    descricao: 'A Stock Car é uma categoria de automobilismo brasileira famosa por suas corridas emocionantes.',
    imagem: stockImg,
    link: '#',
  },
  {
    id: 4,
    nome: 'Fórmula Truck',
    descricao: 'A Fórmula Truck é uma categoria brasileira de corridas de caminhões bastante intensa.',
    imagem: truckImg,
    link: '/formula-truck/mais-informacoes',
  },
  {
    id: 5,
    nome: 'WEC',
    descricao: 'Corridas de longa duração, exigindo resistência dos pilotos.',
    imagem: enduranceImg,
    link: '#',
  },
  {
    id: 6,
    nome: 'Kart',
    descricao: 'O kart é uma categoria de automobilismo com pequenos veículos que competem em pistas.',
    imagem: kartImg,
    link: '#',
  },
  {
    id: 7,
    nome: 'Rally dos Sertões',
    descricao: 'O Rally dos Sertões é uma famosa competição off-road brasileira com percursos desafiadores.',
    imagem: rallyImg,
    link: '/rally-sertoes/mais-informacoes',
  },
  {
    id: 8,
    nome: 'Fórmula 4 Brasil',
    descricao: 'A Fórmula 4 Brasil é uma categoria de automobilismo de jovens pilotos.',
    imagem:f4Img,
    link: '#',
  },
];

const Categorias = () => {
  return (
    <Container>
      {categorias.map((categoria) => (
        <CategoriaCard to={categoria.link} key={categoria.id}> {/* Use o atributo 'to' */}
          <CategoriaImagem src={categoria.imagem} alt={categoria.nome} />
          <CategoriaNome>{categoria.nome}</CategoriaNome>
          <CategoriaDescricao>{categoria.descricao}</CategoriaDescricao>
        </CategoriaCard>
      ))}
    </Container>
  );
};

export default Categorias;
