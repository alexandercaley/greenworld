import React, { Component } from "react";

class JsonApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json
        });
      });
  }
  render() {
    var { isLoaded, data } = this.state;
    return (
      <div>
        Json API used to fetch data
        <ul>
          {data.map(data => (
            <li key={data.id}>
              Name: {data.name} | Email: {data.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JsonApi;
