import React from "react";
import NavBar from "../components/NavBar";
import Imageslider from "../components/Imageslider";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import { AuthContext } from "../context/authcontext";
import AlertTitle from "@mui/material/AlertTitle";
import MuiAlert from "@mui/material/Alert";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const { user, setUser } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(true);

  const FooterStyle = {
    borderTop: "1px solid #E7E7E7",
    //textAlign: "center",
    padding: "10px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "140px",
    width: "100%",
  };

  return (
    <div style={{ backgroundColor: "#DCE6F0" }}>
      <NavBar />
      {user ? (
        <>
          <Collapse in={open}>
            <Alert
            variant=""
              style={{ backgroundColor: "#d5dee8" }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Welcome back {user.username}!
            </Alert>
          </Collapse>
        </>
      ) : (
        "No user"
      )}
      <div
        style={{
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "190%", height: "70px" }}>
          Tired of not having the chance to buy your favorite sneaker?
        </h1>
      </div>

      <div style={{ alignContent: "center", display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Losing Sneakers"
          style={{ marginLeft: "2%", width: "37%" }}
        />

        <p
          style={{ marginLeft: "350px", marginTop: "100px", fontSize: "150%" }}
        >
          After every new sneaker drop you are left with the same situation of
          not beeing able to buy the sneakers you wanted
          <br />
          Well, worry no more, because with SneakerHeaven you have all your
          desired sneakers at the click of a button
        </p>
      </div>

      <div>
        <h2
          style={{
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          News
        </h2>
      </div>
      <Imageslider />
      <div></div>

      <Footer style={FooterStyle} />
    </div>
  );
};

export default Home;
