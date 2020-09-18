import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid" id="heading">
  <div className="container">
    <h1 className="display-4" id= "title">{props.children}</h1>
    <p className="lead">Click on column header to sort by name or search by name.</p>
  </div>
  </div>


  )
}

export default Title;
