import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAP-gRyojWA0rtuWN8peVhd3tZa_3M92-8",
  authDomain: "ecommerce-9bf84.firebaseapp.com",
  databaseURL: "https://ecommerce-9bf84.firebaseio.com",
  projectId: "ecommerce-9bf84",
  storageBucket: "",
  messagingSenderId: "948369730436",
  appId: "1:948369730436:web:32e99a57bbe60bcd778bd1"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
