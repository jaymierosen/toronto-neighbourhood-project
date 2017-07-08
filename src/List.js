import React from "react";

export default class List extends React.Component {
	// handleDisplayText(){
	// 	this.props.displayText();
	// }
	render() {
		return(
			<div>
				<div className="notification is-primary">
					{/*<p>{this.props.text}</p>*/}
					<button className="delete"></button>
				</div>
				<div className="notification is-primary">
					<button className="delete"></button>
					
				</div>
				<div className="notification is-primary">
					<button className="delete"></button>
					
				</div>
				<div className="notification is-primary">
					<button className="delete"></button>
					
				</div>
			</div>
		)
	}
}
