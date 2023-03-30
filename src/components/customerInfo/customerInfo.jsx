import React from 'react';
import axios from "axios";
import "./App.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; //
import { useDispatch } from "react-redux";
function customerInfo() {
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
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
        <div>
          <span>
            {/* We will need to come back and use UseSelevtor to display the actual $ amount */}
            Total:$28.98
          </span>
        </div>
      </header>
      <h2>Customer Information</h2>
      <form onSubmit={(event) => addInfo(event)}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Name"
          value={""}
        />
        <input
          onChange={handleStreetChange}
          type="text"
          placeholder="Street Address"
          value={""}
        />
        <input
          onChange={handleCityChange}
          type="text"
          placeholder="City"
          value={""}
        />
        <input
          onChange={handleZipcodeChange}
          type="text"
          placeholder="Zipcode"
          value={""}
        />
        <div>
          <input
            type="radio"
            id="Pickup"
            value="Pickup"
            name="Pickup"
            checked
          />
          <label for="Pickup">Pickup</label>
        </div>
        <div>
          <input
            type="radio"
            id="Delivery"
            value="Delivery"
            name="Delivery"
            checked
          />
          <label for="Delivery">Delivery</label>
        </div>
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default customerInfo;