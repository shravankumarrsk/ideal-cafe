import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const testimonials = [
  {
    name: 'Anjali D.',
    review: 'The Gadbad Ice Cream is simply out of this world!',
    rating: 5,
  },
  {
    name: 'Rahul M.',
    review: 'Best ice cream café in Mangalore. Loved the ambience too.',
    rating: 4,
  },
  {
    name: 'Sneha P.',
    review: 'Great flavors and excellent customer service!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say 💬</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>"{testimonial.review}"</Card.Text>
                <div>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
