import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const popularItems = [
  {
    name: 'Gadbad Ice Cream',
    description: 'A colorful sundae with jelly, fruits, and dry fruits!',
    image: 'https://source.unsplash.com/400x300/?icecream,gadbad',
  },
  {
    name: 'Tiramisu Delight',
    description: 'Creamy Italian classic with a coffee kick!',
    image: 'https://source.unsplash.com/400x300/?tiramisu,icecream',
  },
  {
    name: 'Mango Magic',
    description: 'Seasonal mango scoop with real fruit chunks.',
    image: 'https://source.unsplash.com/400x300/?mango,icecream',
  },
];

const PopularDishes = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Dishes 🍨</h2>
      <Row>
        {popularItems.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDishes;
