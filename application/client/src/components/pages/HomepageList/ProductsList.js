import React, { Component } from "react";
import Products from "./Products";
import { Dropdown } from "react-bootstrap";

// import NavBar from "./navbar";
export default class ProductsList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      error,
      handleSubmit,
      handleChange
    } = this.props;
    //  this.handleChange = this.handleChange.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);

    return (
      <div>
        <div className="container my-2">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/Park">Park</Dropdown.Item>
              <Dropdown.Item href="#/Zipcode">Zip code</Dropdown.Item>
              <Dropdown.Item href="#/city">city</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <React.Fragment>
          {/* <NavBar
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          /> */}

          <div className="rwo" />
          <div className="container my-6">
            <div className="row">
              {error ? (
                <h1 className="text-danger text-center">{error}</h1>
              ) : (
                recipes.map(recipe => {
                  return (
                    <Products
                      key={recipe.recipe_id}
                      recipe={recipe}
                      handleDetails={handleDetails}
                    />
                  );
                })
              )}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
