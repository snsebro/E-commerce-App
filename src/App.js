import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Hompage/Homepage";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
