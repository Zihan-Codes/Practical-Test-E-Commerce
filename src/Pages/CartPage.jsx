import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import {
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalCost } = useContext(CartContext);

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.length > 0 ? (
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image} // Product image
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${item.price}
                  </Typography>
                  <Typography>Quantity: {item.quantity}</Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </Box>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                    sx={{ marginTop: 1 }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="textSecondary">
          Your cart is empty.
        </Typography>
      )}
      <Box sx={{ textAlign: "right", marginTop: 3 }}>
        <Typography variant="h5">Total: Rs{totalCost}</Typography>
      </Box>
    </Box>
  );
};

export default CartPage;
