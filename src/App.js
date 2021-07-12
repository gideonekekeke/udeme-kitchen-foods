import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import HearderNav from "./Components/HeaderNav/HearderNav";
import OrderPage from "./Components/OrderPage/OrderPage";
import CartPage from "./Components/CartPage.js/CartPage"
import About from "./Components/AboutPage/About";

function App() {
  return (
    <>
      <Router>
        <HearderNav />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/ordernow" component={OrderPage} />
          <Route exact path="/cartpage" component={CartPage} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
