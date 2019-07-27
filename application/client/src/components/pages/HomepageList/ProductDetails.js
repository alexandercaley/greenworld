import React, { Component } from "react";
import { recipe } from "./tempDetails";
// import NavBar from "./navbar";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Form } from "react-bootstrap";
// import { FormControl, Col, Form } from "react-bootstrap";
// import "./App.css";
export default class RecipeDetails extends Component {
  state = {
    recipe: recipe,
    modal: false,
    price: " ",
    show: true
  };

  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=89788ff6e01201236541b2b9b35ffb43&rId=${id}`;
    try {
      const data = await fetch(url);
      const jasonData = await data.json();
      this.setState(
        (stat, props) => {
          return { recipe: jasonData.recipe };
        },
        () => {}
      );
    } catch (erro) {
      console.log(erro);
    }
  }
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  render() {
    // const { price } = this.state;
    const {
      image_url,
      publisher,
      // publisher_url,
      // source_url,
      title,
      ingredients
    } = this.state.recipe;
    const { handleIndex } = this.props;
    return (
      <React.Fragment>
        {/* <NavBar /> */}

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                className="btn btn-warning text-capitalize mb-5"
                onClick={() => handleIndex(1)}
              >
                back to recipe list
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            Deitails Section
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                Posted by {publisher}
              </h6>

              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Details</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
              <p className="text-muted text-uppercase">Detail goes here</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
