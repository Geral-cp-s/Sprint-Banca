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
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #e0e0e0;
  }
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c3ff;
  }
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;