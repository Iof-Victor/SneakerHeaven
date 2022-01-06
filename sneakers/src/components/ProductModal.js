import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Link,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [realeaseyear, setRealeaseyear] = useState(0);
  const image="";


  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/products", {
        name,
        type,
        price,
        realeaseyear,
        image
      });
      if (res.data) {
        console.log("good");
      }
    } catch {
      console.log("bad");
    }
  };

  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={props.handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            color="#000"
            component="h2"
            padding="10px"
          >
            Add a Product :
          </Typography>
          <form>
            <Typography
              id="modal-modal-title"
              color="#000"
              padding="5px"
            >
              Name:
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography
              id="modal-modal-title"
              color="#000"
              padding="5px"
            >
              Type:
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <Typography
              id="modal-modal-title"
              color="#000"
              padding="5px"
            >
              Price:
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Typography
              id="modal-modal-title"
              color="#000"
              padding="5px"
            >
              Year of Realease:
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              required
              value={realeaseyear}
              onChange={(e) => setRealeaseyear(e.target.value)}
            />
          </form>

          <Grid
            display="flex"
            direction="column"
            alignItems="center"
            marginTop="10px"
          >
            <Button
              variant="contained"
              onClick={handleAddProduct}
              style={{
                backgroundColor: "#6EB0D8",
                width: "150px",
                height: "40px",
                marginTop: "10px",
                color: "#000",
              }}
            >
              Add the Product
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
