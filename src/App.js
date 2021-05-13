import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Header, Gallery, Footer, SignUp} from "./components/export";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <SignUp/>
      <Header />
      <Gallery />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
