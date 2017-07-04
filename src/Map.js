import React from "react";

export default class Map extends React.Component {
	handleBanana(){
		this.props.banana();
	}
	render(){
		return(
			<div>
				<div className="box" onClick={this.handleBanana.bind(this)}>THIS IS A MAP</div>
			</div>
		);
	}
}
