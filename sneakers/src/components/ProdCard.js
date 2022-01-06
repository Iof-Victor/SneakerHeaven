import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const ProdCard = (props) => {
  return (
    <Card sx={{ minWidth: 200 }} style={{backgroundColor:"#f0f0f0"}}>
      <CardContent>
        <Typography variant="h4" component="div">
          {props.name}
        </Typography>
        <Typography variant="h5" component="div">
          {props.type}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.price}€
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="medium">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProdCard;
