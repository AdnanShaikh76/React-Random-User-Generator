import React from "react";
import "./App.css"


const Usercard = (props) => {
    console.log(props.data.picture.medium)
  return (
    <div className="user-card">
      <img src={props.data.picture.medium} className="user-img" />
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>{props.data.location.city}, {props.data.location.state}, {props.data.location.country} {props.data.location.postcode}</p>

      
    </div>
  );
};

export default Usercard;
