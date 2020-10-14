import React from "react";
import {Form, FormControl } from "react-bootstrap";


const Filter = ({setSearch}) => {

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
 
  return (
    <div className="filter-area">
      <Form className="row filter-title">
        <FormControl
          type="text"
          placeholder="Search"
          className="col-sm-3"
          onChange={handleSearch}
          style={{textAlign:"center"}}
        />
      </Form>
      <br></br>
    </div>
  );
};

export default Filter
