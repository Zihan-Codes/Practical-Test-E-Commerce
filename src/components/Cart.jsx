import React from 'react';
import { useCart } from '../Context/CartContext';
import { Grid, Typography, Button, TextField, Box } from '@mui/material';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalCost } = useCart();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" color="textSecondary">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography>Price: ${item.price}</Typography>
              <TextField
                label="Quantity"
                type="number"
                variant="outlined"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                sx={{ width: 100, marginTop: 1 }}
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeFromCart(item.id)}
                sx={{ marginLeft: 2, marginTop: 1 }}
              >
                Remove
              </Button>
            </Grid>
          ))}
          <Typography variant="h5" sx={{ marginTop: 3 }}>Total: ${totalCost}</Typography>
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
