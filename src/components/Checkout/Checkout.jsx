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
                <h3>{customerInfo.select}For Delivery</h3>
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
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>
  );
}
export default Checkout;