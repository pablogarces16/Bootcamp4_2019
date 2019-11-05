import React from 'react';

class RemoveBuilding extends React.Component {
	render() {
    const { deleteListing } = this.props;

		return (
			<button className="btn deleteBtn wideBtn" onClick={()=>deleteListing()}>
        Delete Building
      </button>
		);
	}
}
export default RemoveBuilding;
