import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {

	deleteListing() {
		if (this.props.selectedBuilding >= 0 && this.props.selectedBuilding < this.props.data.length) {
			this.props.data.splice(this.props.selectedBuilding, 1);
			this.props.filterUpdate('');
			this.props.selectedUpdate(-1);
		}
	}

	render() {
		const { data, selectedBuilding } = this.props;

		if (selectedBuilding >= 0 && selectedBuilding < data.length) {
			const building = data[selectedBuilding];

			return (
				<div className="buildingInfo">
					<h1>Building Information</h1>
					<br></br>
					<b>Name: </b><p>{building.name}</p>
					<b>Code: </b><p>{building.code}</p>
					{building.address ? <div><b>Address:</b><p>{building.address}</p></div> : ''}
					{building.coordinates ? <div><b>Latitude:</b><p>{building.coordinates.latitude}</p></div> : ''}
					{building.coordinates ? <div><b>Longitude:</b><p>{building.coordinates.longitude}</p></div> : ''}
					<br></br>
					<RemoveBuilding
          	data={this.props.selectedBuilding}
						deleteListing={this.deleteListing.bind(this)}
          />

				</div>
			);

		}

		return (
			<div className="buildingInfo">
				<div className="emptyText">Click on a name to view more information</div>
			</div>
		);
	}
}
export default ViewBuilding;
