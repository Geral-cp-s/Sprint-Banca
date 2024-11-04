// src/components/InfoTruck/InfoTruck.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import carImage from '../../public/img/stock/carro.png';
import newsImage1 from '../../public/img/stock/news1.jpg';
import newsImage2 from '../../public/img/stock/news2.jpg';
import newsImage3 from '../../public/img/stock/news3.jpg';
import newsImage4 from '../../public/img/stock/news4.jpg';



const InfoStock = () => {
  return (
    <Container>
      <TruckImage src={carImage} alt="Caminhão de corrida" />
      <CategoryInfo>
        <h2>Sobre a Stock Car</h2>
        <p>
        A Stock Car Brasil, criada em 1979, é uma das principais categorias de automobilismo do país. Com carros inspirados em modelos populares, mas equipados com motores V8 potentes, a categoria garante corridas equilibradas e emocionantes graças à padronização dos veículos. O campeonato é realizado em diversas cidades brasileiras, incluindo a famosa "Corrida do Milhão". Nomes como Ingo Hoffmann, Cacá Bueno e Rubens Barrichello já passaram pela Stock Car, que também adota o etanol como combustível, destacando seu compromisso com a sustentabilidade.
        </p>
        <LinksContainer>
          <Acesso><Link to="/stock-car/equipes">Acessar as equipes</Link></Acesso>
          {/* <Acesso><Link to="/stock-car/pistas">Acessar o calendario</Link></Acesso> */}
        </LinksContainer>
      </CategoryInfo>
      <ClassificationTable>
        <h2>Classificação Atual</h2>
        <TableSection>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Equipe</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Felipe Massa</td>
                <td>TMG Racing</td>
                <td>770</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Gabriel Casagrande</td>
                <td>Amattheis Vogel</td>
                <td>759</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Felipe Baptista</td>
                <td>Crown Sports</td>
                <td>757</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Ricardo Zonta</td>
                <td>Team RC</td>
                <td>736</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dudu Barrichello</td>
                <td>Mobil Ale</td>
                <td>727</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Julio Campos</td>
                <td>Pole Motosports</td>
                <td>710</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bruno Baptista</td>
                <td>Team RC</td>
                <td>708</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Rafael Suzuki</td>
                <td>TMG Racing</td>
                <td>640</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Daniel Serra</td>
                <td>Team RC</td>
                <td>622</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Enzo Elias</td>
                <td>Crown Soports</td>
                <td>611</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Rubens Barrichello</td>
                <td>Mobil Ale</td>
                <td>605</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Felipe Fraga</td>
                <td>Blau Motosports</td>
                <td>600</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Thiago Camilo</td>
                <td>I Racing</td>
                <td>563</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Ricardo Maurício</td>
                <td>Team RC</td>
                <td>524</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Artur Leist</td>
                <td>Full T1me Sports</td>
                <td>500</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Cesar Ramos</td>
                <td>I Racing</td>
                <td>491</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Lucas Foresti</td>
                <td>Amattheis Vogel</td>
                <td>490</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Nelson Piquet Jr.</td>
                <td>Cavaleiro Sports</td>
                <td>470</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Gaetano Di Mauro</td>
                <td>Cavaleiro Sports</td>
                <td>467</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Átila Abreu</td>
                <td>Pole Motosport</td>
                <td>420</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Guilherme Salas</td>
                <td>KTF Sports</td>
                <td>389</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Zezinho Muggiati</td>
                <td>KTF Sports</td>
                <td>354</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Gianluca Petecof</td>
                <td>Full T1me Sports</td>
                <td>353</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Cacá Bueno</td>
                <td>KTF Sports</td>
                <td>346</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Vitor Baptista</td>
                <td>Scuderia Chiarelli</td>
                <td>329</td>
              </tr>
              <tr>
                <td>26</td>
                <td>Allam Khodair</td>
                <td>Blau Motor Sports</td>
                <td>316</td>
              </tr>
              <tr>
                <td>27</td>
                <td>Lucas Kohl</td>
                <td>Wokin Garra Racing</td>
                <td>182</td>
              </tr>
              <tr>
                <td>28</td>
                <td>Marcos Gomes</td>
                <td>KTF Sports</td>
                <td>166</td>
              </tr>
              <tr>
                <td>29</td>
                <td>Gabriel Robe</td>
                <td>Wokin Garra Racing</td>
                <td>94</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Luan Lopes</td>
                <td>Scuderia Chiarelli</td>
                <td>16</td>
              </tr>
              <tr>
                <td>31</td>
                <td>Raphael Teixeira</td>
                <td>KTF Sports</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </TableSection>
      </ClassificationTable>
      <NewsSection>
        <h2>Últimas Notícias</h2>
        <NewsGrid>
          <NewsCard>
            <NewsImage src={newsImage1} alt="Notícia sobre a Fórmula Truck" />
            <h3>Triunfo em El Pinar põe Felipe Fraga no top-10 de vencedores na Stock Car</h3>
            <p>Depois de pouco mais de dois anos, Felipe Fraga voltou a vencer na Stock Car Pro Series. </p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage2} alt="Notícia sobre a Fórmula Truck" />
            <h3>Muggiati supera erro e repete maior escalada da etapa em El Pinar</h3>
            <p>A temporada de estreia de Zezinho Muggiati vai sendo escrita com capítulos bem interessantes.</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage3} alt="Notícia sobre a Fórmula Truck" />
            <h3>Com duplo top-5, Suzuki é um dos maiores pontuadores no Uruguai</h3>
            <p>Rafael Suzuki garantiu um duplo top-5 no fim de semana de estreia da Stock Car no Uruguai, onde foi realizada a 10ª etapa do campeonato, concluindo um mês que teve duas disputas internacionais na categoria.</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage4} alt="Notícia sobre a Fórmula Truck" />
            <h3>Felipe Massa mantém liderança da Stock Car após etapa do Uruguai</h3>
            <p>Felipe Massa saiu da etapa histórica do Uruguai, a primeira da Stock Car no país vizinho, ainda como líder do campeonato.</p>
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


export default InfoStock;
