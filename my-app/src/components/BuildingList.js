import React from 'react';

class BuilingList extends React.Component {
	render() {

		const { data, filterText, selectedUpdate } = this.props;
		const filteredList = data.filter((building) => {
			 return building.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
		});

		const buildingList = filteredList.map((directory, pos) => {
			return (
				<tr key={directory.id} onClick={()=>selectedUpdate(pos)}>
					<td>{directory.code}</td>
					<td>{directory.name}</td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
