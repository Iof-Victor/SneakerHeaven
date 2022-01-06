import { React, useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import ProdCard from "../components/ProdCard";
import NavBar from "../components/NavBar";

export const JordanPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/displayProducts")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    console.log(products);
  }, []);
  return (
    <div>
    <NavBar/>
      <Container style={{marginTop:'50px',backgroundColor:'#fff',width:'100%'}}>
        <Grid container spacing={4}>
          {products.filter(prod => prod.name.includes("Jordan")).map((filteredProduct) => (
            <Grid item xs={12} sm={6} md={4}>
              <ProdCard
                name={filteredProduct.name}
                type={filteredProduct.type}
                price={filteredProduct.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default JordanPage;
