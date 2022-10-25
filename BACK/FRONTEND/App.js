import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListClienteComponent from "./components/ListClienteComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateClienteComponent from "./components/CreateClienteComponent";
import ViewClienteComponent from "./components/ViewClienteComponent";

import Home from "./paginas/inicio/Home";

function App() {
  return (
    <div>
      <Router>
      <ul>
				<li>Home</li>
				<li>Contato</li>
			</ul>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/company">
                    <Company />
                    <Route exact path="/contact">
                    <Contato />
                </Route>
                <Route exact path="/newproject">
                    <NewProject />
                </Route>
                    
                    <Home />
                </Route>
            </Switch>
            <p>Footer</p>
            








        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListClienteComponent}></Route>
            <Route path="/cliente" component={ListClienteComponent}></Route>
            <Route
              path="/add-cliente/:id"
              component={CreateClienteComponent}
            ></Route>
            <Route
              path="/view-cliente/:id"
              component={ViewClienteComponent}
            ></Route>
            <Route path="/" element={<Home />} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}
export default App;
