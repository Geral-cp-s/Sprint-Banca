// src/components/InfoTruck/InfoTruck.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import carImage from '../../public/img/formula-e/carro.png';
import newsImage1 from '../../public/img/noticia/img1.webp';
import newsImage2 from '../../public/img/noticia/img2.webp';
import newsImage3 from '../../public/img/noticia/img3.webp';
import newsImage4 from '../../public/img/noticia/img4.webp';
import newsImage5 from '../../public/img/noticia/img5.webp';
import newsImage6 from '../../public/img/noticia/img6.webp';


const InfoStock = () => {
  return (
    <Container>
      <TruckImage src={carImage} alt="Caminhão de corrida" />
      <CategoryInfo>
        <h2>Sobre a Fórmula-E</h2>
        <p>
        A Fórmula E é uma emocionante categoria do automobilismo que destaca veículos elétricos competindo em circuitos urbanos ao redor do mundo. Com carros que atingem velocidades de até 280 km/h e potência de 340 cavalos, a competição combina tecnologia de ponta e sustentabilidade. Os pilotos enfrentam desafios em pistas que serpenteiam pelas cidades, proporcionando um espetáculo de estratégia e ultrapassagens audaciosas. A atmosfera vibrante dos fãs e o som impressionante dos motores elétricos tornam a Fórmula E uma experiência única, onde emoção e compromisso ambiental se encontram.
        </p>
        <LinksContainer>
          <Acesso><Link to="/formula-e/equipes">Acessar as equipes</Link></Acesso>
          <Acesso><Link to="/formula-e/pistas">Acessar o calendario</Link></Acesso>
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
                <td>Pascal Wehrlein</td>
                <td>TAG Heuer Porsche</td>
                <td>198</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mitch Evans</td>
                <td>Jaguar TCS Racing</td>
                <td>192</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Nick Cassidy</td>
                <td>Jaguar TCS Racing</td>
                <td>176</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Oliver Rowland</td>
                <td>Nissan Formula E Team</td>
                <td>156</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Jean-Éric Vergne</td>
                <td>DS Penske</td>
                <td>139</td>
              </tr>
              <tr>
                <td>6</td>
                <td>António Félix da Costa</td>
                <td>TAG Heuer Porsche</td>
                <td>134</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Jake Dennis</td>
                <td>Avalanche Andretti Formula E</td>
                <td>122</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Max Gunther</td>
                <td>Maserati MSG Racing</td>
                <td>73</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Robin Frijns</td>
                <td>Envision Racing</td>
                <td>66</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Stoffel Vandoorne</td>
                <td>DS Penske</td>
                <td>61</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Sébastien Buemi</td>
                <td>Envision Racing</td>
                <td>53</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Nico Müller</td>
                <td>ABT Formula E Team</td>
                <td>52</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Sam Bird</td>
                <td>Neom McLaren</td>
                <td>48</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Jake Hughes</td>
                <td>Neom McLaren</td>
                <td>48</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Norman Nato</td>
                <td>Andretti Formula E Team</td>
                <td>47</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Edoardo Mortara</td>
                <td>Mahindra Racing</td>
                <td>29</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Sach Fenestraz</td>
                <td>Nissan Formula E Team</td>
                <td>26</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Nyck De Vries</td>
                <td>Mahindra Racing</td>
                <td>18</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Dan Ticktum</td>
                <td>ERT Formula E Team</td>
                <td>12</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Sérgio Sette Câmara</td>
                <td>ERT Formula E Team</td>
                <td>11</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Jehan Daruvala</td>
                <td>Maserati MSG Racing</td>
                <td>8</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Taylor Barnard</td>
                <td>Neom McLaren</td>
                <td>5</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Lucas Di Grassi</td>
                <td>ABT Formula E Team</td>
                <td>4</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Joel Eriksson</td>
                <td>Envision Racing</td>
                <td>2</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Kelvin Van der Linde</td>
                <td>ABT Formula E Team</td>
                <td>0</td>
              </tr>
              <tr>
                <td>26</td>
                <td>Jordan King</td>
                <td>Mahindra Racing</td>
                <td>0</td>
              </tr>
              <tr>
                <td>27</td>
                <td>Paul Aron</td>
                <td>Envision Racing</td>
                <td>0</td>
              </tr>
              <tr>
                <td>28</td>
                <td>Caio Collet</td>
                <td>Nissan Formula E Team</td>
                <td>0</td>
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
            <h3>Pascal Wehrlein, da Porsche, supera adversidades e conquista o Campeonato Mundial de Fórmula E em Londres</h3>
            <p>Wehrlein garantiu a vitória após uma temporada cheia de desafios, consolidando seu lugar entre os melhores da categoria elétrica.</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage2} alt="Notícia sobre a Fórmula Truck" />
            <h3>A parceria juntará o piloto mais experiente da Fórmula E com o único novato até agora, destacando o compromisso da Lola em desenvolver novos talentos e tecnologias no automobilismo.</h3>
            <p>Lola Yamaha ABT completa a formação de pilotos estreantes com o novato Zane Maloney se juntando ao “Sr. Fórmula E” Lucas di Grassi.</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage3} alt="Notícia sobre a Fórmula Truck" />
            <h3>Fórmula E definida para a Semana do Clima de Nova York</h3>
            <p>Líder em esporte global sustentável, a Fórmula E estará presente na Semana do Clima de Nova York, com a vice-presidente de Sustentabilidade, Julia Palle, programada para falar em diversos eventos.</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage4} alt="Notícia sobre a Fórmula Truck" />
            <h3>Buemi e Frijns retornam com a Envision Racing para a 11ª temporada</h3>
            <p>A Envision Racing tem o prazer de confirmar uma escalação de pilotos inalterada para a Temporada 11 do Campeonato Mundial de Fórmula E da ABB FIA. Sébastien Buemi e Robin Frijns continuarão com a equipe para a Temporada 11 do Campeonato Mundial de Fórmula E da ABB FIA.</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage5} alt="Notícia sobre a Fórmula Truck" />
            <h3>Fórmula E abre inscrições para o Fundo Better Futures da Temporada 11</h3>
            <p>A Fórmula E lançou hoje o processo de inscrição para seu principal programa de apoio beneficente, o Better Futures Fund, que fornecerá suporte direto a projetos de impacto local e causas em todos os locais de corrida na 11ª temporada.</p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage6} alt="Notícia sobre a Fórmula Truck" />
            <h3>Lucas di Grassi: “10 anos de trabalho duro e noites sem dormir”</h3>
            <p>Dez anos atrás, hoje: Lucas di Grassi venceu o primeiro E-Prix para a ABT em Pequim. Desde então, a Fórmula E cresceu de força em força.</p>
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
