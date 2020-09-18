import React from "react";

function SearchBar (props) {
return(
<div className="input-group mb-3 col-4">
  <input onChange={(event) => props.filterSearch(event.target.value)} type="text" className="form-control" placeholder="Search name" aria-label="searchname" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Clear</button>
  </div>
</div>
);
}

export default SearchBar
