import React from 'react'
import VendingMachine from "./VendingMachine";
import Olives from "./Olives";
import Spinach from "./Spinach";
import Boba from "./Boba";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route exact path="/Spinach" render={() => <Spinach />} />
          <Route exact path="/Olives" render={() => <Olives />} />
          <Route exact path="/Boba" render={() => <Boba />} />
          <Route exact path="/" render={() => <VendingMachine />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;