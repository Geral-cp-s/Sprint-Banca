import styled from 'styled-components';

// Container para a lista de cards
export const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 15px; 
  margin: 20px;
`;

// Estilização do Card
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center; 
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  width: 250px; 
  height: 350px; 
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: rgb(245, 245, 245);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  // Ajustes para telas menores
  @media (max-width: 768px) {
    width: 40%; 
    height: 300px; 
  }

  @media (max-width: 480px) {
    width: 85%; 
    height: auto; 
  }
`;

// Seção que contém as informações das vitórias, pódios e corridas
export const DateSection = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 10px;

  .metric-label {
    font-weight: bold; 
    font-size: 14px; 
    color: #6c757d;
  }

  .metric-value {
    font-size: 20px; 
    font-weight: bold;
    color: #2c3e50; 
    padding: 8px;
  }

  @media (max-width: 480px) {
    flex-direction: column; 
    align-items: flex-start; 
    gap: 5px; 
  }
`;

// Seção de detalhes, incluindo o nome da equipe e a bandeira
export const DetailsSection = styled.div`
  margin-bottom: 10px;
`;

// Seção para o nome e logo da equipe
export const TeamFlagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;  
  margin-bottom: 8px;

  img {
    width: 50px;
    height: auto;
    margin-bottom: 8px;  
  }

  span {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
    text-align: center;  
  }
`;

// Seção da imagem do carro
export const ImageSection = styled.div`
  margin-top: 8px;

  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
