import React, { Component } from "react";

class Products extends Component {
  render() {
    const { image_url, title, recipe_id, publisher } = this.props.recipe;
    const { id, location, postStatus, postType, picture } = this.props.recipe;
    const { handleDetails } = this.props;

    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={picture}
              className="img-card-top"
              alt="recipe"
              style={{ height: "14rem" }}
            />
            <div className="card-body text-capitalized">
              <h6>location: {location}</h6>
              <h6 className="text-warning text-slanted">
                postStatus: {postStatus}
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

// >>>>>>> fdcfb15bc3ecab8e1249f6dc839f894019565879
