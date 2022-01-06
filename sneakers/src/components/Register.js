import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SnackbarContent from "@mui/material/SnackbarContent";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const paperStyle = {
    padding: 20,
    height: "550px",
    width: 280,
    margin: "20px auto",
    marginTop: "10%",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#6EB0D8" };
  const marginTop = { marginTop: 5 };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [subberror, setSubberror] = useState(false);

  useEffect(() => {
    if (submitted == true) {
      const timeId = setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/register", {
        username,
        email,
        password,
        confirmPassword,
        phonenumber,
      });

      if (res.data) {
        setSubmitted(true);
      }
    } catch {
      setSubberror(true);
    }
  };

  const handleSubmitted = () => {
    setSubmitted(false);
  };

  const handleSubberror = () => {
    setSubberror(false);
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              {/* <AddCircleOutlineOutlinedIcon /> */}
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Sign up
            </Button>
          </form>
          <Snackbar
            open={submitted}
            autoHideDuration={4000}
            onClose={handleSubmitted}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
          >
            <SnackbarContent
              message={"Succes on register"}
              style={{ backgroundColor: "#6EB0D8" }}
            />
          </Snackbar>

          <Snackbar
            open={subberror}
            autoHideDuration={2000}
            onClose={handleSubberror}
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

export default Register;
