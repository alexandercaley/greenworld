import React, { Component } from "react";
import { Link } from "react-router-dom";

const footerStyle = {
  backgroundColor: "#184E68",
  fontSize: "15px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

// const options = ["one", "two", "three"];

class DropdownMenu extends Component {
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
      <body>
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

        <div>
          <Footer>
            <div class="row">
              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/home"
              >
                Home
                <i className="fas fa-home" />
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/news"
              >
                news
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/aboutUs"
              >
                About Us
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/post"
              >
                Post
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/category"
              >
                Category
              </Link>
            </div>

          </Footer>
        </div>
      </body>
    );
  }
}

export default DropdownMenu;
