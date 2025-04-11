import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const offers = [
  {
    title: 'Happy Hour 🍹',
    description: 'Get 20% off on all ice creams between 4 PM – 6 PM!',
    image: 'https://source.unsplash.com/400x300/?happyhour,icecream',
  },
  {
    title: 'Summer Special 🌞',
    description: 'Buy 1 Get 1 Free on Mango Magic every weekend!',
    image: 'https://source.unsplash.com/400x300/?summer,icecream',
  },
  {
    title: 'Loyalty Bonus 🎉',
    description: 'Earn points with every order and get free scoops!',
    image: 'https://source.unsplash.com/400x300/?reward,icecream',
  },
];

const ExclusiveOffers = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Exclusive Offers 🎁</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={offer.image} alt={offer.title} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExclusiveOffers;
