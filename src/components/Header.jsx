import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce App
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>
          Login
        </Button>
        <Button color="inherit" onClick={() => navigate("/register")}>
          Register
        </Button>
        <Button color="inherit" onClick={() => navigate("/products")}>
          Products
        </Button>
        <Button color="inherit" onClick={() => navigate("/cart")}>
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
