import React from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; //
import { useDispatch } from "react-redux";

function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();

  const customerInfo = useSelector(store => store.customer)
  const cart = useSelector(store => store.cart)

  const handleClick = (event) => {

    const pizzaOrder = {
        customer_name: "Donatello",
        street_address: "20 W 34th St",
        city: "New York",
        zip: "10001",
        type: "Pickup",
        total: "27.98",
        pizzas: [{
            id: "1",
            quantity: "1"
          },{
            id: "2",
            quantity: "1"
          }]
    }

    axios.post('/api/order', pizzaOrder)
    .then( response => {
        dispatch({
            type: 'CLEAR_CART'
        })
    })
    .catch( error => {
        console.log('POST error, could not post to order table', error);
        alert('Could not post to order table, try again later!')
      })
  }

  return (
    <>
        <div className="container">
            <div id="customerinfo">
                <p>{customerInfo.name}</p>
                <p>{customerInfo.streetAddress}</p>
                <p>{customerInfo.city}{' '}{customerInfo.zip}</p>
            </div>
            <div className="empty"></div>
            <div id="forDelivery">
                <h3>{customerInfo.select}</h3>
            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pizza, i) => (
                        <tr key={i}>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="container">
            <div>
                <button onClick={handleClick}>Checkout</button>
            </div>
            <div></div>
            <div></div>
        </div>
    </>
  );
}
export default Checkout;