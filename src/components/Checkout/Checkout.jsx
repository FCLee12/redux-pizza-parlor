import React from "react";
import axios from "axios";
import "./App.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; //
import { useDispatch } from "react-redux";

function checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
        <div className="App">
        <header className="App-header" />
        <h1 className="App-title">Prime Pizza</h1>
        </div>
        <div className="container">
        <div id="customerinfo"></div>
        <div className="empty"></div>
        <div id="forDelivery"></div>
        </div>
    </>
  );
}
export default checkout;