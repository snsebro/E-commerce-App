import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Hompage/Homepage";
import Shop from "./pages/Shop/Shop";
import "./App.css";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
