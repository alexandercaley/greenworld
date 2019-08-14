import React, { Component } from "react";

export default class ProductSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;

    return (
      <React.Fragment>
        <form className="mr-sm-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="search by city or zipcode..."
            className="form-control"
            value={value}
            onChange={handleChange}
          />

          <div className="input-group-append">
            <button
              type="submit"
              className="input-group-text bg-primary text-white"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
