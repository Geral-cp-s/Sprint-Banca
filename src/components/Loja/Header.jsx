import React, { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'; // Importa o ícone de carrinho

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar a sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Alterna a visibilidade da sidebar
  };

  return (
    <>
      <FreeShippingBanner>
        Frete grátis para toda região Sudeste
      </FreeShippingBanner>
      <HeaderContainer>
        <Nav>
          <NavItem>Pedidos</NavItem>
          <NavItem>Conta</NavItem>
          <NavItem>Entre em contato</NavItem>
          <NavItem onClick={toggleSidebar}>
            <FaShoppingCart size={24} color="black" /> {/* Ícone do carrinho */}
          </NavItem>
        </Nav>
      </HeaderContainer>
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </>
  );
};

const Sidebar = ({ onClose }) => {
  return (
    <SidebarContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2 className='texto'>Produtos no Carrinho</h2>
      {/* Aqui você pode mapear os produtos do carrinho */}
      {/* Exemplo de produto */}
      <ProductItem>
        <img src="produto_imagem.jpg" alt="Produto" />
        <div>
          <h3 className='texto'>Nome do Produto</h3>
          <p>Preço: R$100,00</p>
        </div>
      </ProductItem>
      {/* Adicione mais produtos aqui */}
    </SidebarContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center; /* Centraliza o conteúdo do Header */
  background-color: #fff;
  color: var(--black-color-light);
  padding: 15px 20px; /* Aumenta o padding */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px; /* Aumenta o espaçamento entre os itens (ajustado para 50px) */
  align-items: center; /* Centraliza verticalmente os itens do nav */
  font-weight: 600;

  @media (max-width: 768px) {
    gap: 20px; /* Reduz o espaçamento em telas menores */
  }
`;

const NavItem = styled.div`
  display: flex; /* Adiciona display flex para centralizar */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  cursor: pointer;
  text-transform: uppercase;
  padding: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  margin: 0 10px; /* Adiciona espaçamento horizontal entre os itens */
  
  &:hover {
    transform: translateY(-4px); 
    text-decoration: underline; /* Adiciona underline ao passar o mouse */
  }
`;

const FreeShippingBanner = styled.div`
  background-color: #d32f2f;
  color: #fff;
  text-align: center;
  padding: 10px 0; /* Aumenta o padding */
  font-size: 16px; /* Aumenta o tamanho da fonte */
  font-weight: bold;
  border: 2px solid #0000007a;

  @media (max-width: 768px) {
    font-size: 14px; /* Reduz o tamanho da fonte em telas menores */
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 1000;

  .texto{
    font-family: "Audiowide", sans-serif;
    padding: 5px;
    border: 2px solid var(--black-color-light);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }
`;
