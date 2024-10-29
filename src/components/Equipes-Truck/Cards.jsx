import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px 0; /* Adiciona margem superior e inferior ao card */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Header = styled.div`
  background-color: #d3d3d3;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const DriverImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const DriverInfo = styled.div`
  margin-top: 10px;
  color: #333;

  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
  }
`;

const Category = styled.p`
  font-weight: bold;
  color: #007bff;
  font-size: 14px;
  margin: 4px 0;
`;

const Brand = styled.p`
  font-weight: bold;
  color: #007bff;
  font-size: 14px;
  margin: 4px 0;
`;

const City = styled.p`
  font-weight: bold;
  color: #007bff;
  font-size: 14px;
  margin: 4px 0;
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding: 0 20px;

  img {
    width: 60px;
    margin: 0 5px;
  }
`;

// CardsRow component for aligning the DriverCards
const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px; // Adjust gap as needed
  margin: 20px 0; // Adiciona espaçamento acima e abaixo do CardsRow
`;

const DriverCard = ({ driver }) => {
  return (
    <CardContainer>
      <Header>
        <span>{driver.number}</span>
      </Header>
      <DriverImage src={driver.image} alt="Driver" />
      <DriverInfo>
        <h2>{driver.name}</h2>
        <Category>CATEGORIA: {driver.category}</Category>
        <Brand>MARCA: {driver.brand}</Brand>
        <City>CIDADE: {driver.city}</City>
      </DriverInfo>
      <Logos>
        <img src="/path/to/formula-truck-logo.png" alt="Formula Truck" />
        <img src="/path/to/formula-gt-logo.png" alt="Formula GT" />
      </Logos>
    </CardContainer>
  );
};

// Export DriverCard and CardsRow
export { DriverCard, CardsRow };
