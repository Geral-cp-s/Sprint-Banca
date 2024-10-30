// src/components/InfoTruck/InfoTruck.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import truckImage from '../../public/img/formula-truck/truck.png';
import newsImage1 from '../../public/img/formula-truck/news1.webp';
import newsImage2 from '../../public/img/formula-truck/news2.webp';
import newsImage3 from '../../public/img/formula-truck/news3.webp';
import newsImage4 from '../../public/img/formula-truck/news4.webp';
import newsImage5 from '../../public/img/formula-truck/news5.webp';
import newsImage6 from '../../public/img/formula-truck/news6.webp';


const InfoTruck = () => {
  return (
    <Container>
      <TruckImage src={truckImage} alt="Caminhão de corrida" />
      <CategoryInfo>
        <h2>Sobre a Fórmula Truck</h2>
        <p>
        A Fórmula Truck é uma competição única no automobilismo, com caminhões de até 1.200 cavalos de potência desafiando circuitos a mais de 200 km/h. Essa categoria exige precisão e controle dos pilotos, que enfrentam curvas e disputas intensas, proporcionando um espetáculo de ultrapassagens ousadas e aceleração impressionante. Com o som potente dos motores e a atmosfera vibrante dos fãs, a Fórmula Truck se destaca pela emoção e pela força dos caminhões em cada corrida.
        </p>
        <LinksContainer>
          <Acesso><Link to="/formula-truck/pilotos">Acessar os pilotos</Link></Acesso>
          <Acesso><Link to="/formula-truck/pistas">Acessar o calendario</Link></Acesso>
        </LinksContainer>
      </CategoryInfo>
      <ClassificationTable>
        <h2>Classificação Atual</h2>
        <TableSection>
          <h3>Categoria Eletrônico</h3>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rafael Fleck</td>
                <td>435</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Tulio Bendo</td>
                <td>410</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pedro Muffato</td>
                <td>353</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Everton Fontanella</td>
                <td>298</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Alex Pinheiro</td>
                <td>255</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Jorginho Feio</td>
                <td>245</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Ramiris Fontanella</td>
                <td>206</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Edivan Monteiro</td>
                <td>205</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Alvaro Bendo</td>
                <td>184</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Leo Barramacher</td>
                <td>175</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Rogério Agostini</td>
                <td>175</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Joãozinho</td>
                <td>148</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Zetti</td>
                <td>133</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Rodrigo Gomes</td>
                <td>125</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Sandro Pinheiro</td>
                <td>110</td>
              </tr>
              <tr>
                <td>15</td>
                <td>João Mottin</td>
                <td>106</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Fabricio Berton</td>
                <td>92</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Ricardo Ançay</td>
                <td>87</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Adriano Zoinho</td>
                <td>72</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Robson Trevizol</td>
                <td>66</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Robson Portaluppi</td>
                <td>66</td>
              </tr>
            </tbody>
          </table>
        </TableSection>
        <TableSection>
          <h3>Categoria Bomba Injetora</h3>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Geovani Tavares</td>
                <td>395</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Marcio Rampon</td>
                <td>360</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Douglas Colett</td>
                <td>320</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Thiago Manica</td>
                <td>290</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Gilmar Mottin</td>
                <td>260</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Duda Conci</td>
                <td>255</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Fabricio Rossato</td>
                <td>245</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Gabrielle Rampon</td>
                <td>215</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Gustavo Manica</td>
                <td>175</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Tiago Bellaver</td>
                <td>150</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Max Nunes</td>
                <td>120</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Daniel Lovato</td>
                <td>120</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Cristiano Lemos</td>
                <td>45</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Felipe Fraguas</td>
                <td>0</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Marcio Rosa</td>
                <td>0</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Cleber Fonseca</td>
                <td>0</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Gabriel Saccomano</td>
                <td>0</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Leo Barramacher</td>
                <td>0</td>
              </tr>
              {/* Adicione mais linhas conforme necessário */}
            </tbody>
          </table>
        </TableSection>
      </ClassificationTable>
      <NewsSection>
        <h2>Últimas Notícias</h2>
        <NewsGrid>
          <NewsCard>
            <NewsImage src={newsImage1} alt="Notícia sobre a Fórmula Truck" />
            <h3>Everton Fontanela e Giovani Tavares vencem pela 1ª vez na Fórmula Truck</h3>
            <p>CAMPO GRANDE (MS) – Pela primeira vez as categorias GT Truck e F-Truck correram separadas e a Fórmula Truck entregou tudo o que promete...</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage2} alt="Notícia sobre a Fórmula Truck" />
            <h3>Muffato comemora 84 anos com pole na Fórmula Truck em Campo Grande</h3>
            <p>CAMPO GRANDE (MS) – Em clima de festa, o paranaense Pedro Muffato comemorou o seu aniversário de 84 anos neste sábado (29), Dia de São...</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage3} alt="Notícia sobre a Fórmula Truck" />
            <h3>Taio Agostini e Collet, os mais rápidos da Fórmula Truck em Campo Grande</h3>
            <p>CAMPO GRANDE (MS) –  Com as categorias GT Truck e F-Truck tendo provas separadas pela primeira vez, a Fórmula Truck realiza domingo (30),...</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage4} alt="Notícia sobre a Fórmula Truck" />
            <h3>Treinos livres abrem a programação da 4ª etapa da Fórmula Truck em Campo Grande</h3>
            <p>CAMPO GRANDE (MS) – As emoções da 4ª etapa da Fórmula Truck terão início nesta sexta-feira (28), no Autódromo Internacional Orlando...</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage5} alt="Notícia sobre a Fórmula Truck" />
            <h3>Fórmula Truck valerá por dois campeonatos em Campo Grande</h3>
            <p>CAMPO GRANDE (MS) – Muitas emoções. É o que reserva a quarta prova da temporada da Fórmula Truck, a ser disputada no próximo domingo...</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage6} alt="Notícia sobre a Fórmula Truck" />
            <h3>Fabrício Berton, o piloto da casa na Fórmula Truck em Campo Grande</h3>
            <p>CAMPO GRANDE (MS) – Um dos estreantes da categoria nesta temporada, Fabrício Berton  viverá no próximo domingo (30), a experiência de sua...</p>
          </NewsCard>
          {/* Adicione mais cards conforme necessário */}
        </NewsGrid>
      </NewsSection>
    </Container>
  );
};

// Estilizações com styled-components
const Container = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

const TruckImage = styled.img`
  width: 60%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  margin: 0 auto 20px;
  display: block;
`;

const CategoryInfo = styled.div`
  background: #f0f0f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 10px;
    border-bottom: 2px solid var(--black-color-light);
    padding-bottom: 5px;
  }

  p {
    line-height: 1.8;
    color: #555;
    font-size: 1.1em;
  }
`;

const ClassificationTable = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 10px;
    border-bottom: 2px solid var(--black-color-light);
    padding-bottom: 5px;
  }
`;

const TableSection = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
      font-size: 1em;
    }
    
    th {
      background-color: var(--black-color-light);
      color: white;
      font-weight: bold;
    }
    
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  }
`;

const NewsSection = styled.div`
  h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 15px;
    border-bottom: 2px solid var(--black-color-light);
    padding-bottom: 5px;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const NewsCard = styled.div`
  background: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.6em;
    color: #333;
    margin: 10px 0;
  }

  p {
    line-height: 1.6;
    color: #666;
    font-size: 1em;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const LinksContainer = styled.div`
  margin-top: 15px;
`;

const Acesso = styled.a`
  font-size: 1.3rem;
  display: inline-block;
  margin-right: 20px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;


export default InfoTruck;
