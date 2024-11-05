import styled from 'styled-components';
import videoSrc from '/video.mp4'; // Verifique se o caminho está correto
import { Link } from 'react-router-dom';
import Card from './Card'


// Estilização da Seção que conterá o vídeo de fundo
const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  margin: 0;
  overflow: hidden;
`;

// Estilização do Vídeo para cobrir o fundo
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cobre toda a área sem distorcer o vídeo */
  z-index: -1; /* Coloca o vídeo atrás do conteúdo */
  background-color: black; /* Adiciona uma cor de fundo como fallback */
`;

// Estilização do Texto
const Text = styled.h1`
  font-size: 1.3rem;
  background-color: rgba(0, 0, 0, 0.3); /* Fundo semi-transparente para o texto */
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o texto */
  z-index: 1;
`;

// Nova seção da Loja com layout flexbox para texto à esquerda e imagem à direita
const LojaSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px; /* Reduzi o padding */
  background: var(--black-color-light);
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  gap: 20px; /* Reduzi o gap entre o texto e a imagem */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Container de texto
const LojaTextContainer = styled.div`
  flex: 1;
  padding-right: 15px; /* Reduzi o espaçamento */

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

// Estilização do título da Loja
const LojaTitle = styled.h2`
  font-size: 2.5rem; /* Reduzi o tamanho do título */
  color: #fff;
  margin-bottom: 15px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

// Estilização do texto descritivo
const LojaText = styled.p`
  font-size: 1.1rem; /* Reduzi um pouco o tamanho do texto */
  color: #ddd;
  margin-bottom: 20px;
  max-width: 500px; /* Reduzi a largura máxima */
  
`;

// Estilização do botão da Loja
const LojaButton = styled.a`
  background-color: #0077ff;
  color: white;
  padding: 12px 30px; /* Reduzi o padding do botão */
  font-size: 1.3rem; /* Reduzi o tamanho da fonte */
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #00c3ff;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px #00c3ff83;
  }

  .link{
    text-decoration: none;
    color: #fff;
  }


`;

// Estilização da imagem (agora menor)
const LojaImage = styled.img`
  flex: 0.6; /* Reduzi o tamanho relativo da imagem */
  max-width: 400px; /* Reduzi o tamanho máximo da imagem */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 15px;
  }
`;


// Componente Principal
export default function Index() {
  return (
    <div>
      <Section>
        {/* Vídeo de Fundo */}
        <BackgroundVideo autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </BackgroundVideo>

        {/* Texto Centralizado */}
        <Text><strong>G4 Racing</strong><br/><br/>Todas as categorias em um só lugar</Text>
      </Section>

      {/* Seção da Loja */}
      <LojaSection>
        <LojaTextContainer>
          <LojaTitle>Explore a Nossa Loja</LojaTitle>
          <LojaText>
            Confira os melhores produtos sobre a melhor corrida elétrica do mundo e muito mais em nossa loja!
          </LojaText>
          <LojaButton><Link className='link' to="/loja">Visite nossa loja</Link></LojaButton>
        </LojaTextContainer>
        {/* Imagem da loja à direita */}
        <LojaImage src="/img/produtos/prod.webp" alt="Imagem ilustrativa da loja" />
      </LojaSection>
      <Card/>

      
    </div>
  );
}
