import React from "react";
import "./style.css";

function SearchBar (props) {
return(
<form className="input-group mb-3 col-4">
  <input onChange={(event) => props.filterSearch(event.target.value)} type="text" className="form-control" placeholder="Search name" aria-label="searchname" aria-describedby="button-addon2" value={props.str}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={props.clearSearch}>Clear</button>
  </div>
</form>
);
}

export default SearchBar
