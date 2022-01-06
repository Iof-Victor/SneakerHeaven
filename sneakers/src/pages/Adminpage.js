import { React, useEffect, useState } from "react";
import { Button, Link } from "@material-ui/core";
import Footer from "../components/Footer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import ProductModal from "../components/ProductModal";

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

export default function Adminpage() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [getdata, setGetdata] = useState([]);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const [products, setProducts] = useState([]);
  let trigger = 0;

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTrigger = () => {
    trigger = 1;
  };

  const handleClick = (event) => {
    history.push("/");
  };

  useEffect(() => {
    axios
      .get("/displayProducts")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
      console.log(products);
     
  },[]);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - getdata.length) : 0;

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setGetdata(res.data))
      .catch((err) => console.error(err));
    // console.log(getdata);
  },[]);

  const emptyRows_1 =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#B8C4CF" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpen}>
                <ProductModal openModal={open} onClose={handleCloseModal} />
                Add Product
              </MenuItem>
          
            </Menu>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "black" }}
            >
              Dashboard
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleClick}
                  style={{ backgroundColor: "#6EB0D8" }}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ height: 700, width: "100" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "black", marginTop: "10px", marginBottom: "10px" }}
        >
          Created Accounts:
        </Typography>
        <TableContainer
          component={Paper}
          display="flex"
          style={{ flexGrow: 1, marginTop: "0px", marginBottom: "0px" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? getdata.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : getdata
              ).map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.username}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phonenumber}</TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 10 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={getdata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <div>
      <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "black", marginTop: "-300px", marginBottom: "0px" }}
        >
          Products:
        </Typography>
        <TableContainer
          component={Paper}
          display="flex"
          style={{ flexGrow: 1, marginTop: "15px", marginBottom: "0px" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Year of Realease</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? products.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : products
              ).map((productss) => (
                <TableRow key={productss.product_id}>
                  <TableCell>{productss.name}</TableCell>
                  <TableCell>{productss.type}</TableCell>
                  <TableCell>{productss.price}</TableCell>
                  <TableCell>{productss.realeaseyear}</TableCell>
                </TableRow>
              ))}
             
              {emptyRows_1 > 0 && (
                <TableRow style={{ height: 10 * emptyRows_1 }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}
