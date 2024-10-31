// src/components/InfoTruck/InfoTruck.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import carImage from '../../public/img/rally/carro.png';
import newsImage1 from '../../public/img/rally/noticia/news1.jpg';
import newsImage2 from '../../public/img/rally/noticia/news2.jpg';
import newsImage3 from '../../public/img/rally/noticia/news3.jpg';
import newsImage4 from '../../public/img/rally/noticia/news4.jpg';



const InfoSertoes = () => {
  return (
    <Container>
      <TruckImage src={carImage} alt="Caminhão de corrida" />
      <CategoryInfo>
        <h2>Sobre o Rally dos Sertões</h2>
        <p>
        O Rally dos Sertões é uma das mais importantes competições de rally do Brasil e uma das maiores da América Latina. Realizado anualmente, o evento atrai pilotos e equipes de várias partes do mundo. A competição combina elementos de aventura, resistência e superação, com etapas que atravessam diversas regiões do Brasil, incluindo estradas de terra, montanhas, desertos e outros terrenos desafiadores.
        </p>
        <LinksContainer>
          {/* <Acesso><Link to="/rally-sertoes/equipes">Acessar as equipes</Link></Acesso> */}
          <Acesso><Link to="/rally-sertoes/pistas">Acessar o calendario</Link></Acesso>
        </LinksContainer>
      </CategoryInfo>
      <ClassificationTable>
        <h2>Classificação Atual</h2>
        <TableSection>
          <h3>Moto</h3>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Modelo</th>
                <th>Tempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Adrien Metge #2</td>
                <td>Yamaha WR 450F</td>
                <td>28h06min23</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mason Klein #1		</td>
                <td>Honda CRF 450 RX</td>
                <td>+10min40</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Gabriel Soares #4		</td>
                <td>Honda CRF 450 RX</td>
                <td>+52min51</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Gabriel Bruning #19		</td>
                <td>Yamaha WR 450F</td>
                <td>+59min58</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Martin Duplessis #3		</td>
                <td>Honda CRF 450 RX</td>
                <td>+1h30min51</td>
              </tr>
            </tbody>
          </table>
        </TableSection>
        <TableSection>
          <h3>UTVs</h3>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Modelo</th>
                <th>Tempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Deni do Nascimento / Gunnar Dums #101		</td>
                <td>Can-Am Maverick R</td>
                <td>28h50min06</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Zé Hélio / Bissinho Zavatti #108		</td>
                <td>Can-Am Maverick R</td>
                <td>+17min36</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bruno Varela/Ari Fiúza #110		</td>
                <td>Can-Am Maverick R</td>
                <td>+23min31</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Tomas Luza / Flávio França #109		</td>
                <td>Polaris RZR Pro R</td>
                <td>+26min58</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Felipe Fraga / Eduardo Bampi #188		</td>
                <td>Cam-Am Maverick X3</td>
                <td>+29min32</td>
              </tr>
            </tbody>
          </table>
        </TableSection>
        <TableSection>
          <h3>Carro</h3>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Modelo</th>
                <th>Tempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lucas Moraes / Kaíque Bentivoglio #323		</td>
                <td>Toyota GR Hilux DKR</td>
                <td>24h21min50</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Marcelo Gastaldi/Cadu Sachs #301		</td>
                <td>Century CR7</td>
                <td>+16min06</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Marcos Moraes / Fábio Pedroso #308	</td>
                <td>Toyota GR Hilux DKR</td>
                <td>	+29min54</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Carlos Ambrosio / Luiz Poli #348		</td>
                <td>Century CR6</td>
                <td>+56min39</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Luiz Nacif / Erick Rocha #318		</td>
                <td>Ford Ranger V8</td>
                <td>+1h31min08</td>
              </tr>
            </tbody>
          </table>
        </TableSection>
        <TableSection>
          <h3>Quadriciclo</h3>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Modelo</th>
                <th>Tempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Marcelo Medeiros #100		</td>
                <td>Yamaha YFM 700 Raptor</td>
                <td>32h55min44</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Felipe Viana #53</td>
                <td>Yamaha YFM 700 Raptor</td>
                <td>+2h32min36</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Giovanni de Castro #49</td>
                <td>Yamaha YFM 700 Raptor</td>
                <td>+2h52min57</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Hélio Pessoa #40</td>
                <td>Yamaha YFM 700 Raptor</td>
                <td>+9h11min58</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Wescley Dutra #45</td>
                <td>Yamaha YFM 700 Raptor</td>
                <td>+12h53min28</td>
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
            <h3>Sertões cria seu Hall da Fama e Jean Azevedo é o primeiro homenageado</h3>
            <p></p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage2} alt="Notícia sobre a Fórmula Truck" />
            <h3>Tecnologia Smart Driving Labs impulsionou o Sertões BRB 2024</h3>
            <p></p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage3} alt="Notícia sobre a Fórmula Truck" />
            <h3>Brasileiros conquistam pódio inédito no Mundial de Rally Raid</h3>
            <p></p>
          </NewsCard>
          <NewsCard>
            <NewsImage src={newsImage4} alt="Notícia sobre a Fórmula Truck" />
            <h3>Carlos Sainz conquista vitória inédita para a Ford no Rally do Marrocos</h3>
            <p></p>
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


export default InfoSertoes;
