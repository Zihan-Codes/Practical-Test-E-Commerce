import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";


const products = [
  { id: 1, name: "Laptop", price: 225000, description: "High-performance Laptop", image: "/images/laptop.jpg" },
  { id: 2, name: "Smart Phone", price: 75000, description: "High-performance Smart Phone", image: "/images/mobile.jpeg" },
  { id: 3, name: "Office Chair", price: 15000, description: "High-quality Office Chair", image: "/images/chair.jpg" },
];


const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
