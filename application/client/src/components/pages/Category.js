import React, { Component } from "react";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  render() {
    return (
      <div className="dropdown" style={{ background: "red", width: "150px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          {"Item Category ^"}
        </div>
        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className="active" href="#Plastc">
                Plastc
              </a>
            </li>
            <li>
              <a href="#Tree Fall">Tree Fall</a>
            </li>
            <li>
              <a href="#Garbage">Garbage </a>
            </li>
            <li>
              <a href="#Water flood">Water flood </a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Category;
