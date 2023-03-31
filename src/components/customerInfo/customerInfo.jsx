import React from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; //
import { useDispatch } from "react-redux";
import { useState } from 'react';

function CustomerInfo() {

  const history = useHistory();

  const dispatch = useDispatch();

  const routeChange = () => {
    let path = "/checkout";
    history.push(path);
  };

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    streetAddress: "",
    city: "",
    zip: "",
    select: ""
  });

  const handleNameChange = (event) => {
    // handle name input field change
    setCustomerInfo({
      ...customerInfo,
      name: event.target.value,
    });
  }; // end handleNameChange

  const handleStreetChange = (event) => {
    // handle street input field change
    setCustomerInfo({
      ...customerInfo,
      streetAddress: event.target.value,
    });
  }; // end handleStreetChange

  const handleCityChange = (event) => {
    // handle city input field change
    setCustomerInfo({
      ...customerInfo,
      city: event.target.value,
    });
  }; // end handleCityChange

  const handleZipcodeChange = (event) => {
    // handle zipcode input field change
    setCustomerInfo({
      ...customerInfo,
      zip: event.target.value,
    });
  }; // end handleZipcodeChange

  const handleSelectChange = (event) => {
    // handle select input field change
    setCustomerInfo({
      ...customerInfo,
      select: event.target.value,
    });
  };

  const addInfo = (event) => {
    event.preventDefault();
    console.log("Adding customer information", customerInfo);
    // send data to store
    dispatch({
      type: "ADD_CUSTOMER_INFO",
      payload: customerInfo,
    });
    // clear inputs
    setCustomerInfo({
      name: "",
      streetAddress: "",
      city: "",
      zip: "",
      select: "",
    });
    routeChange();
  };
  return (
    <div>
      <h2>Customer Information</h2>
      <form onSubmit={(event) => addInfo(event)}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Name"
          value={customerInfo.name}
        />
        <input
          onChange={handleStreetChange}
          type="text"
          placeholder="Street Address"
          value={customerInfo.streetAddress}
        />
        <input
          onChange={handleCityChange}
          type="text"
          placeholder="City"
          value={customerInfo.city}
        />
        <input
          onChange={handleZipcodeChange}
          type="text"
          placeholder="Zipcode"
          value={customerInfo.zip}
        />
        <div>
          <input
            onChange={handleSelectChange}
            type="text"
            id="Pickup"
            value="Pickup"
            name="Pickup"
            checked
          />
          <label htmlFor="Pickup">Pickup</label>
        </div>
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default CustomerInfo;