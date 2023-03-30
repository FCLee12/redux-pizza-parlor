import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function PizzaList({pizzaList, fetchPizza}) {
    console.log('PizzaList is running');

    let history = useHistory();

    const nextPage = () => {
      // let path = '/page2';
      history.push('/page2');
    }
  
    const dispatch = useDispatch();

    // Called by the Add Button
    const addPizza = (pizzaObj) => {
        console.log('adding pizza to cart', pizzaObj);
        dispatch({
        type: "ADD_PIZZA",
        payload: pizzaObj,
        });
    }

    return (
        <>
          <h2>Step 1: Select your Pizza</h2>
          <div>
            <ul>
              {pizzaList.map((pizza) => {
                return (
                  <li key={pizza.id}>
                    <img src={pizza.image_path}></img>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.description}</p>
                    <p>${pizza.price}</p>
                    <button onClick={() => addPizza(pizza) }>Add</button>
                    <button>Remove</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <button onClick={nextPage}>Next</button>            
        </>
    )
}

export default PizzaList;