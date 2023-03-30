import React from 'react';
import axios from 'axios';

import './App.css';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <h2>Step 1: Select your Pizza</h2>
      <div>
        <ul>
          <li>
            

            
          </li>
        </ul>

      </div>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
