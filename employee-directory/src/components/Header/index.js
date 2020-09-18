import React from "react";
import "./style.css";

function Header(props) {
  return (      <div className="row">
  <div className="header col-2" >
    Image
  </div>
  <div className="header col-3" onClick = {() => props.orderEmployees()}>
      Name <i className={props.direction ? "arrow up" : "arrow down"}></i>
  </div>
  <div className="header col-2">
    Phone
  </div>
  <div className="header col-3">
     Email
    </div>
  <div className="header col-2">
     DOB
    </div>
</div>)
}

export default Header;
