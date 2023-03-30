import React from 'react';
import axios from 'axios';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import {useEffect} from 'react';

function App() {



    const dispatch = useDispatch();

    const cart = useSelector(store => store.cart)

    const fetchPizza = ()=> {
console.log('Fetching pizzas!');

      axios.get('/api/pizza')
      .then( response =>{
        console.log('responding', response.data);
        dispatch({
            type: 'SET_PIZZA',
            payload: response.data
        })
      
      }).catch(error =>{
        console.log(error)
      }) 
  
    }

    useEffect(()=>{
        fetchPizza();
    })


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
      <Route exact path='/'>
      <h2>Step 1: Select your Pizza</h2>
     
      <div>
        <ul>
          {cart.map(pizza =>{
            return (
              <li key={pizza.id}>
                <img src={pizza.image_path}></img>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <button>Add</button>
              </li>
            )
          })}
        
        </ul>

      </div>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  </Route>
  </Router>
    </div>
   
  );
}

export default App;
