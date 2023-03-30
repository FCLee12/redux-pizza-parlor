import React from "react";
import axios from "axios";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx'

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const nextPage = () => {
    let path = '/page2';
    history.push(path);
  }

  const cart = useSelector((store) => store.cart);

  const fetchPizza = () => {
    console.log("Fetching pizzas!");

    axios.get("/api/pizza")
      .then((response) => {
        console.log("responding", response.data);
        dispatch({
          type: "SET_PIZZA",
          payload: response.data,
        });
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
          <h2>Step 1: Select your Pizza</h2>
          <div>
            <ul>
              {cart.map((pizza) => {
                return (
                  <li key={pizza.id}>
                    <img src={pizza.image_path}></img>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.description}</p>
                    <p>${pizza.price}</p>
                    <button>Add</button>
                    <button>Remove</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <button onClick={nextPage}>Next</button>
        </Route>
        {/* This is a temporary URL route */}
        <Route exact path='/page2'>
          <CustomerInfo />
        </Route>
    </div>
    </Router>
  );
}

export default App;
