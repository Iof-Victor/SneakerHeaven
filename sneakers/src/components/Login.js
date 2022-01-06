import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SnackbarContent from "@mui/material/SnackbarContent";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "550px",
    width: 280,
    margin: "20px auto",
    marginTop: "10%",
  };
  const avatarStyle = { backgroundColor: "#6EB0D8" };
  const btnStyle = { margin: "10px " };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successsign, setSuccessSign] = useState(false);
  const [errorsign, setErrorSign] = useState(false);
  const [user,setUser]=useState();

  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user={username,password};

    try {
      const res = await axios.post("http://localhost:5000/api/login",user);

      // setUser(res.data);
      // localStorage.setItem('user',res.data);
      

      if (res.data) {
        setUser(res.data);
        localStorage.setItem('user',JSON.stringify(res.data));
        setSuccessSign(true);
        
      }
      
      
    } catch {
      setErrorSign(true);
    }
   
  };

  useEffect(() => {
    if (successsign == true) {
      const timeId = setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  });

  const handleSuccessSign = () => {
    setSuccessSign(false);
  };

  const handleErrorSign = () => {
    setErrorSign(false);
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid
            style={{
              alignItems: "center",
              justifyContent: "center",
              direction: "column",
            }}
          >
            <Avatar style={avatarStyle}>
              <AccountBoxIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter the Username"
            onChange={(e) => setUsername(e.target.value)}
            fullwidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter the Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullwidth
            required
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullwidth
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Typography>
            {" "}
            First step into the heaven?
            <Link href="/register">Sign Up</Link>
          </Typography>

          <Snackbar
            open={successsign}
            autoHideDuration={4000}
            onClose={handleSuccessSign}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
          >
            <SnackbarContent
              message={"Login success"}
              style={{ backgroundColor: "#6EB0D8" }}
            />
          </Snackbar>

          <Snackbar
            open={errorsign}
            autoHideDuration={2000}
            onClose={handleErrorSign}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
            backgroundColor="1073b5"
          >
            <SnackbarContent
              message={"Check credentials"}
              style={{ backgroundColor: "#6EB0D8" }}
            />
          </Snackbar>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
