import React, { Component } from "react";
import Products from "./Products";
import ProductSearch from "../HomepageList/ProductSearch";
import axios from "axios";

export default class ProductsList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   data: []
  //   };
  // }

//   async getProduct() {
//     try {
//       const response = await axios.get("/api/postings")
//       .then(res => {console.log(res.data);
//       this.setState({
//         data:res.data
//       });
//     })
//     } catch(error) {
//       console.log(error);

//     }
//   }

// componentDidMount() {
//   this.getProduct();
// }

  // componentDidMount() {
  //   axios
  //   .get("/api/postings")
  //   .then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       data: res.data
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  render() {
    const { 
     // dataSearch,
      handleDetails, 
      value,
      handleSubmit,
      handleChange,
      error } = this.props;
      const {
        dataSearch
      } = this.state;

    return (
      <div>
        <React.Fragment>   

        <ProductSearch
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            /> 
             
          <div className="rwo" />
          <div className="container my-6">
            <div className="row">
              {error ? (
                <h1 className="text-danger text-center">{error}</h1>
              ) : (
                dataSearch.map(i => {
                let {id, location, postType } = i;
                  return (
                    <Products
                      key={i.recipe_id}
                      recipe={i}
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
