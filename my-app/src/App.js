import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import AddBuilding from './components/AddBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      isAddingBuilding: false,
      mutableData: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
  }

  setAddMode() {
    this.setState({
      isAddingBuilding: true
    });
  }

  didCreateBuilding(building) {
    const newListing = {
      id: this.state.mutableData.length + 1,
      name: building.name,
      code: building.code,
      address: building.address
    };

    if (building.lat && building.long) {
      newListing.coordinates = {
        latitude: building.lat,
        longitude: building.long
      };
    }

    const newData = this.state.mutableData.slice();
    newData.push(newListing);
    this.setState({
      mutableData: newData,
      isAddingBuilding: false
    });
  }

  render() {

    if (this.state.isAddingBuilding == true) {
      return (
        <div className="bg container">
          <div className="row">
            <div className="col-md-12">
              <AddBuilding
                showForm={this.state.isAddingBuilding}
                didCreateBuilding={this.didCreateBuilding.bind(this)}
              />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg container">

        <main>
          <div className="row">
            <div className="col-md-12">
              <h1>UF Directory App</h1>
              <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.mutableData}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="col-md-6">
              <ViewBuilding
                data={this.state.mutableData}
                selectedBuilding={this.state.selectedBuilding}
                filterUpdate={this.filterUpdate.bind(this)}
                selectedUpdate={this.selectedUpdate.bind(this)}
              />
              <br></br>
              <button className="btn addButton wideBtn" onClick={this.setAddMode.bind(this)}>
                Create New Building
              </button>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
