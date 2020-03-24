import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import About from "./pages/aboutUs";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//import { Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/item/:id" component={Detail} />
          <Route exact path="/aboutUs" component={About} />
          <Route exact path="/contactUs" component={Contact} />
     {/*      <Route exact path="/contactUs/send" component={Contact} /> */}
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

