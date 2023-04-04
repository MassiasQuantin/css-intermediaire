import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardContainer = styled.div`
  background-color: #181818;
  border-radius: 8px;
  border: 2px solid red;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  color: #b3b3b3;
  font-size: 14px;
  line-height: 1.5;
`;

const RatingContainer = styled.div`
  margin-top: 15px;
`;

const Description = styled.p`
  color: #b3b3b3;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
`;

const Card = ({ title, content, imageUrl, description }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <RatingContainer>
        <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          fractions={2}
          initialRating={2.5}
        />
      </RatingContainer>
      {showMore ? (
        <Description>{description}</Description>
      ) : (
        <Button onClick={handleShowMore}>Afficher plus</Button>
      )}
    </CardContainer>
  );
};

const App = () => (
  <Container>
    <Card
      title="ZillaKami"
      content="Zillakami est un artiste américain connu pour son style unique de rap et de metal. Il est né le 20 juin 1999 à Bay Shore, dans l'État de New York."
      imageUrl="https://bodyartguru.com/wp-content/uploads/2020/03/ZillaKami.jpg"
      description="Zillakami a commencé sa carrière musicale en 2015 et s'est rapidement fait connaître pour son style agressif et ses paroles controversées. Il a collaboré avec de nombreux artistes, notamment Denzel Curry et XXXTentacion. En 2019, il a sorti son premier album studio solo, intitulé 'City Morgue Vol. 1: Hell or High Water'."
      />
    </Container>
  );
  
  export default App;
  