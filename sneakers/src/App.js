import Home from "./pages/Home";
import Adminpage from "./pages/Adminpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import React from "react";
import {AuthContext} from "./context/authcontext";
import JordanPage from "./pages/JordanPage";

function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user,setUser}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Adminpage" component={Adminpage} />
          <Route exact path="/Jordanpage" component={JordanPage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
