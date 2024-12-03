import React from "react";
import { Card, CardContent, Typography, Button, CardMedia  } from "@mui/material";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card>
        <CardMedia
            component="img"
            height="300"
            image={product.image} // Sample: "productA.jpg"
            alt={product.name}
        />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="h6">Rs{product.price}</Typography>
        <Button
          variant="contained"
          onClick={() => addToCart(product)}
          style={{ marginTop: "1rem" }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
