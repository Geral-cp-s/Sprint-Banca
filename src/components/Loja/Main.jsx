import { useState } from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; /* Muda para coluna em telas menores */
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row; /* Retorna para linha em telas maiores */
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  height: 500px;

  h1 {
    font-size: 36px;
    color: #fff;
    margin: 0 0 20px;
    font-family: "Audiowide", sans-serif;
    text-align: center;
    width: 100%;
  }
`;

const ProductList = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%; /* Ajuste para ocupar toda a largura */
`;

const ProductCard = styled.div`
  background-color: var(--black-color-light);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  margin: 5px;
  flex: 1 0 calc(50% - 10px); /* 2 produtos por slide */
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: 1 0 100%; /* 1 produto por slide em telas menores */
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductInfo = styled.div`
  text-align: center;
  margin-top: 10px;

  h3 {
    font-size: 1.1rem;
    color: #fff;
    margin: 5px 0;
  }

  p {
    font-size: 1rem;
    color: #fff;
    margin: 0;
  }
`;

const Arrow = styled.div`
  font-size: 45px;
  cursor: pointer;
  user-select: none;
  color: #0077ff;
  position: absolute;
  z-index: 1;
  padding: 0 10px;

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black-color-light);
  border-radius: 12px;
  padding: 20px;
  min-height: 250px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  .imgban{
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BannerContent = styled.div`
  color: white;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    font-family: "Audiowide", sans-serif;
    margin-right: 15px;
    margin-top: 15px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #e0e0e0;
    margin-right: 15px;
    margin-top: 15px;
    
  }
`;

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-right: 19px;
  margin-top: 15px;

  &:hover {
    background-color: #ff3d00;
    text-shadow: 0 0 5px #ff6f61, 0 0 10px #ff6f61, 0 0 15px #ff6f61;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;



const Sidebar = styled.div`
  width: 250px;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0; /* Remove a margem em telas menores */
    width: 100%; /* A sidebar ocupa 100% da largura */
  }
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Audiowide", sans-serif;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

const NewSection = styled.div`
  margin: 20px 0;
  h2 {
    font-size: 36px;
    color: black;
    margin: 0 0 20px;
    font-family: "Audiowide", sans-serif;
    text-align: center;
    width: 100%;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NewProductCard = styled.div`
  background-color: var(--black-color-light);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px;
  text-align: center;
  flex: 1 0 calc(25% - 20px);
  min-width: 180px;
  max-width: 220px;
  height: 300px;

  @media (max-width: 768px) {
    flex: 1 0 calc(100% - 20px); /* 1 produto por linha em telas pequenas */
  }

  img {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    color: #fff;
    margin: 10px 0;
  }

  .discount {
    font-size: 16px;
    color: #ff4d4d;
    text-decoration: line-through;
    margin-bottom: 5px;
  }

  .price {
    font-size: 16px;
    color: #fff;
    margin-bottom: 25px; 
  }

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Desconto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  h1 {
    font-size: 36px;
    color: #000;
    margin-bottom: 50px;
    font-family: "Audiowide", sans-serif;
  }

  > div {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 45%;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .desconto {
    font-size: 18px;
    margin-bottom: 15px;
    color: #0077ff;
  }

  button {
    padding: 10px 15px;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #00c3ff;
    }
  }

  @media (max-width: 768px) {
    width: 90%; /* Ajustar a largura em telas menores */
  }
`;
const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [filters, setFilters] = useState({
    category: '',
    type: ''
  });

  const products = [
    { id: 1, img: '../../../img/produtos/bone.webp', name: 'Boné New Era Repreve 9FORTY', price: 'R$160,00', category: 'bone', modality: 'formulaE' },
    { id: 2, img: '../../../img/produtos/mochila.jpg', name: 'Mochila Dobrável', price: 'R$250,00', category: 'acessorios', modality: 'stockCar' },
    { id: 3, img: '../../../img/produtos/garrafa.webp', name: 'Garrafa de Água Gradiente', price: 'R$50,00', category: 'acessorios', modality: 'formulaE' },
    { id: 4, img: '../../../img/produtos/camiseta.jpg', name: 'Camiseta Oficial Fórmula E', price: 'R$180,00', category: 'camisetas', modality: 'formulaE' },
    { id: 5, img: '../../../img/produtos/jaqueta.jpg', name: 'Jaqueta Impermeável', price: 'R$400,00', category: 'jaquetas', modality: 'stockCar' },
    { id: 6, img: '../../../img/produtos/gymsack.jpg', name: 'Pull Bag Camuflada', price: 'R$60,00', category: 'acessorios', modality: 'formulaTruck' },
    { id: 7, img: '../../../img/produtos/chaveiro.jpg', name: 'Chaveiro Oficial', price: 'R$30,00', category: 'acessorios', modality: 'formulaE' },
    { id: 8, img: '../../../img/produtos/tokyo.jpg', name: 'Camiseta E-Prix de Tóquio', price: 'R$110,00', category: 'camisetas', modality: 'formulaE' },
    { id: 9, img: '../../../img/produtos/moletbranco.jpg', name: 'Moletom Gradiente', price: 'R$230,00', category: 'jaquetas', modality: 'formulaE' }
  ];

  const newProducts = [
    // Bonés
    { id: 10, img: 'public/img/loja/boneFE.png', name: 'Boné Motorsport', price: 'R$200,00', discountPrice: 'R$229,90', category: 'Bone', modality: 'formulaE' },
    { id: 11, img: 'public/img/loja/boneSC.png', name: 'Boné Estilo Stock Car', price: 'R$180,00', discountPrice: 'R$220,00', category: 'Bone', modality: 'stockCar' },
    { id: 12, img: 'public/img/loja/image.png', name: 'Boné Fórmula Truck', price: 'R$150,00', discountPrice: 'R$180,00', category: 'Bone', modality: 'formulaTruck' },

    // Camisetas
    { id: 13, img: 'public/img/loja/CAMISafe.png', name: 'Camiseta Fórmula E', price: 'R$200,00', discountPrice: 'R$229,90', category: 'Camisetas', modality: 'formulaE' },
    { id: 14, img: 'public/img/loja/CAMISAft.png', name: 'Camiseta Fórmula Truck', price: 'R$180,00', discountPrice: 'R$229,90', category: 'Camisetas', modality: 'formulaTruck' },
    { id: 15, img: 'public/img/loja/camisaSC.png', name: 'Camiseta Stock Car', price: 'R$160,00', discountPrice: 'R$229,90', category: 'Camisetas', modality: 'stockCar' },

    // Acessórios
    { id: 16, img: 'public/img/loja/canecaFE.png', name: 'Caneca Fórmula E', price: 'R$45,00', discountPrice: 'R$69,90', category: 'acessorios', modality: 'formulaE' },
    { id: 17, img: 'public/img/loja/chaveiroFT.png', name: 'Chaveiro Truck', price: 'R$75,00', discountPrice: 'R$89,90', category: 'acessorios', modality: 'formulaTruck' },
    { id: 18, img: 'public/img/loja/almofadaSC.webp', name: 'Almofada Stock Car', price: 'R$90,00', discountPrice: 'R$129,90', category: 'acessorios', modality: 'stockCar' },

    // Casacos
    { id: 19, img: 'public/img/loja/casacoFE.png', name: 'Casaco Fórmula E', price: 'R$300,00', discountPrice: 'R$359,90', category: 'jaquetas', modality: 'formulaE' },
    { id: 20, img: 'public/img/loja/casacoFT.png', name: 'Casaco Fórmula Truck', price: 'R$280,00', discountPrice: 'R$299,90', category: 'jaquetas', modality: 'formulaTruck' },
    { id: 21, img: 'public/img/loja/casacoSC.png', name: 'Casaco Stock Car', price: 'R$290,00', discountPrice: 'R$329,90', category: 'jaquetas', modality: 'stockCar' },


  ];

  const filteredNewProducts = newProducts.filter(product => {
    const categoryMatch = filters.category ? product.category.toLowerCase() === filters.category.toLowerCase() : true;
    const modalityMatch = filters.type ? product.modality.toLowerCase() === filters.type.toLowerCase() : true;
    return categoryMatch && modalityMatch;
  });

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const hasFilters = filters.category || filters.type; // Verifica se há filtros ativos

  return (
    <ContentContainer>
      <Sidebar>
        <FilterSection>
          <FilterTitle>Filtrar por Categoria</FilterTitle>
          <Dropdown onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
            <option value="">Tudo</option>
            <option value="bone">Bonés</option>
            <option value="camisetas">Camisetas</option>
            <option value="jaquetas">Jaquetas</option>
            <option value="acessorios">acessorios</option>
          </Dropdown>
        </FilterSection>
        <FilterSection>
          <FilterTitle>Filtrar por Modalidade</FilterTitle>
          <Dropdown onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
            <option value="">Tudo</option>
            <option value="formulaE">Fórmula E</option>
            <option value="stockCar">Stock Car</option>
            <option value="formulaTruck">Fórmula Truck</option>
          </Dropdown>
        </FilterSection>
      </Sidebar>

      <div style={{ flex: 1 }}>
        {!hasFilters && ( // Renderiza o banner e o carrossel apenas se não houver filtros
          <>
            <Banner>
              <BannerContent>
                <h1>Venda de campeonato</h1>
                <p>50% de desconto na linha oficial da Fórmula E e da FIA</p>
                <Button>Compre Agora</Button>
              </BannerContent>
              <img className='imgban' src="/img/Racing.png" alt="" />
            </Banner>

            <h1 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Audiowide, sans-serif' }}>
              Produtos em Destaque
            </h1>
            <CarouselContainer>
              <Arrow onClick={prevSlide}>&#8249;</Arrow>
              <ProductList style={{ transform: `translateX(-${((currentSlide - 1) * 100) / itemsPerSlide}%)` }}>
                {products.map((product) => (
                  <ProductCard key={product.id}>
                    <ProductImage src={product.img} alt={product.name} />
                    <ProductInfo>
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </ProductInfo>
                  </ProductCard>
                ))}
              </ProductList>
              <Arrow onClick={nextSlide}>&#8250;</Arrow>
            </CarouselContainer>
          </>
        )}

        <NewSection>
          <h2>Novo em nosso estoque!</h2>
          <ProductGrid>
            {filteredNewProducts.map((product) => (
              <NewProductCard key={product.id}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                {product.discountPrice && (
                  <div className="discount">{product.discountPrice}</div>
                )}
                <div className="price">{product.price}</div>
              </NewProductCard>
            ))}
          </ProductGrid>
        </NewSection>

        <Desconto>
          <h1>Equipes em destaque</h1>
          <div>
            <Card>
              <img className='dimg' src="/img/02022021_TESTHP_01.webp" alt="TAG Heuer Porsche" />
              <h2>TAG Heuer Porsche</h2>
              <div className="desconto">Até 50% de desconto</div>
              <button>Compre agora</button>
            </Card>

            <Card>
              <img className='dimg' src="/img/jordan-kin.webp" alt="MAHINDRA" />
              <h2>MAHINDRA</h2>
              <div className="desconto">Até 50% de desconto</div>
              <button>Compre agora</button>
            </Card>
          </div>
        </Desconto>
      </div>
    </ContentContainer>
  );
};

export default MainContent;
