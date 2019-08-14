import React, { Component } from "react";

class Products extends Component {
  render() {
    // const { image_url, title, recipe_id, publisher } = this.props.recipe;
    // const { id, location, postStatus, postType, picture } = this.props.recipe;
    const { handleDetails } = this.props;
    console.log(this.props);
    const { id, street, city, zipcode, state , description, imageFile, issueType } = this.props.issue;
    let imgObj = JSON.parse(imageFile);
    console.log(imgObj);
    // application/client/src/components/pages/HomepageList/Products.js
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src="/uploads/donkey.jpg"
              className="img-card-top"
              alt="Issue Image"
              style={{ height: "14rem" }}
            />
            <div className="card-body text-capitalized">
              <h6>Street: {street}</h6>
              <h6>City: {city}</h6>
              <h6>Zipcode: {zipcode}</h6>
              <h6>State: {state}</h6>
              <h6 className="text-warning text-slanted">
                Issue Type: {issueType}
              </h6>
              <h6 className="text-warning text-slanted">
                Description: {description}
              </h6>
            </div>
            <div className="card-footer text-cen">
              <button
                type="button"
                className="btn btn-primary text-capitalize"
                onClick={() => handleDetails(0, id)}
              >
                details
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Products;
