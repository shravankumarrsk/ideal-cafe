import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const allItems = [
  {
    id: 1,
    name: 'Gadbad Ice Cream',
    description: 'A Mangalorean classic!',
    price: 120,
    rating: 4.5,
    image: 'https://source.unsplash.com/400x300/?icecream,gadbad',
    category: 'Specials',
  },
  {
    id: 2,
    name: 'Chocolate Sundae',
    description: 'Rich chocolate delight.',
    price: 90,
    rating: 4.7,
    image: 'https://source.unsplash.com/400x300/?chocolate,sundae',
    category: 'Sundaes',
  },
  // Add more items here...
];

const MenuPage = () => {
  const [items, setItems] = useState(allItems);
  const [ setFilter] = useState('All');
  const { addToCart } = useCart();

  const handleFilter = (category) => {
    setFilter(category);
    if (category === 'All') setItems(allItems);
    else setItems(allItems.filter(item => item.category === category));
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🍦 Menu</h2>
      <div className="text-center mb-4">
        <Button className="me-2" onClick={() => handleFilter('All')}>All</Button>
        <Button className="me-2" onClick={() => handleFilter('Specials')}>Specials</Button>
        <Button onClick={() => handleFilter('Sundaes')}>Sundaes</Button>
      </div>
      <Row>
        {items.map(item => (
          <Col md={4} key={item.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p><strong>₹{item.price}</strong></p>
                <p>⭐ {item.rating}</p>
                <Button onClick={() => addToCart(item)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
