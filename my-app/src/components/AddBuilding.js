import React from 'react';

class AddBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      code: '',
      address: '',
      lat: '',
      long: ''
    };
  }

  nameUpdated = (input) => {
    this.setState({
      name: input.target.value
    });
  }

  addressUpdated = (input) => {
    this.setState({
      address: input.target.value
    });
  }

  codeUpdated = (input) => {
    this.setState({
      code: input.target.value
    });
  }

  latUpdated = (input) => {
    this.setState({
      lat: input.target.value
    });
  }

  longUpdated = (input) => {
    this.setState({
      long: input.target.value
    });
  }

  handleCreateListing() {
    if (this.state.name && this.state.address && this.state.code) {
      this.props.didCreateBuilding(this.state);
    } else {
      alert("Please add a name, address, and code!");
    }
  }

	render() {
		const { data } = this.props;

    return (
      <div className="buildingInfo">
        <h1>Add Building</h1>
        <br></br>
        <form onSubmit={e => e.preventDefault()}>
          <b>Name:</b>
          <input type="text" className="addInput"
            value = {this.state.name}
            onChange={this.nameUpdated}
            placeholder = "Building name"
          />

          <b>Code:</b>
          <input type="text" className="addInput"
            value = {this.state.code}
            onChange={this.codeUpdated}
            placeholder = "Building code"
          />

          <b>Address:</b>
          <input type="text" className="addInput"
            value = {this.state.address}
            onChange={this.addressUpdated}
            placeholder = "Building address"
          />

          <b>Latitude:</b>
          <input type="text" className="addInput"
            value = {this.state.lat}
            onChange={this.latUpdated}
            placeholder = "Building latitude"
          />

          <b>Longitude:</b>
          <input type="text" className="addInput"
            value = {this.state.long}
            onChange={this.longUpdated}
            placeholder = "Building longitude"
          />

          <br></br>
          <br></br>
          <button className="btn addButton wideBtn" onClick={this.handleCreateListing.bind(this)}>
            Add Building!
          </button>
        </form>
      </div>
    );
	}
}
export default AddBuilding;
