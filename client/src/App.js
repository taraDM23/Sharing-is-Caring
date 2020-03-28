import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Items from "./pages/Items";
import AuthPage from './pages/AuthPage';
import AuthContext from './context/auth-context';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import About from "./pages/aboutUs";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  const [state, setState] = useState({
    token: null,
    userId: null,
  })


  const login = (token, userId, tokenExpiration) => {
    setState({ token: token, userId: userId })
  }
  const logout = (token, userId, tokenExpiration) => {
    
    setState({ token: null, userId: null })
  }


  return (
    <Router>
      <AuthContext.Provider value={{
        token: state.token,
        userId: state.userId,
        login: login,
        logout: logout,
      }}>
        <div>
          <Nav />
          <Switch>
            {!state.token && <Route exact path="/Home" component={Home} />}
            {state.token && <Redirect from="/auth" to="/Home" exact />}
            {state.token && <Route path="/" component={Home} exact/>}
            {state.token && <Route path="/Home" component={Home} exact />}
            {state.token && <Route path="/aboutUs" component={About} exact />}
            {state.token && <Route path="/contactUs" component={Contact} exact />}
           
            {state.token && <Route path="/items" component={Items} exact />}
            {state.token && <Route path="/item/:id" component={Detail} exact />}
            {!state.token && <Route path="/aboutUs" component={About} exact />}
            {!state.token && <Route path="/contactUs" component={Contact} exact/>}
            {!state.token && <Route path="/auth" component={AuthPage} exact/>}
            {!state.token && <Redirect from="/" to="/Home" exact />}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;

