import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(index)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 className="text-end">Total: ₹{total}</h4>
          <div className="text-end">
            <Button variant="success">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
