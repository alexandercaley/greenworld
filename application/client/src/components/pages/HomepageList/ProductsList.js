import React, { Component } from "react";
import Products from "./Products";
import ProductSearch from "../HomepageList/ProductSearch";
import axios from "axios";
import { updateData, updateClickedDetails } from "../../redux/actions/homepageAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// export default class ProductsList extends Component {

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
class ProductsList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleSubmit,
      handleChange,
      error,
      data
    } = this.props;

    console.log(this.props);
    // console.log(data)
    // let data = [];
    console.log(data)
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
              {data.map(i => {
                //   let {id, location, postType } = i;
                return (
                  <Products
                    key={i.recipe_id}
                    recipe={i}
                    handleDetails={handleDetails}
                  />
                );
              })}
              {/* {error ? (
                <h1 className="text-danger text-center">{error}</h1>
              ) : (
 
              )} */}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { data, details_id, pageIndex } = state.homepageReducer;
  return { data, details_id, pageIndex };
};

const mapDispatchToProps = {
  updateData,
  updateClickedDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductsList));
