import React from "react";

export default class Map extends React.Component {
	handledisplayData(){
		this.props.displayData();
	}
	render(){
		return(
			<div>
				<div className="box">THIS IS A MAP</div>
			</div>
		);
	}
}
