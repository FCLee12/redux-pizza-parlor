import React from "react";
import axios from "axios";

import "./App.css";
import { useSelector } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx';
import PizzaList from '../PizzaList/PizzaList.jsx';
import Checkout from "../Checkout/Checkout";

function App() {


  const [pizzaList, setPizzaList] = useState([]);

  const cart = useSelector((store) => store.cart);

  const fetchPizza = () => {
    console.log("Fetching pizzas!");

    // GET to grab pizzas from DB
    axios.get("/api/pizza")
      .then((response) => {
        console.log("responding", response.data);
        setPizzaList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
        <Route exact path="/">
          <PizzaList pizzaList={pizzaList} fetchPizza={fetchPizza} />
        </Route>
        {/* This is a temporary URL route */}
        <Route exact path='/page2'>
          <CustomerInfo />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
    </div>
    </Router>
  );
}

export default App;
