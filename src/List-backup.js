import React from "react";

export default class Header extends React.Component {
	handleDisplayText(){
		this.props.displayText();
	}
	render() {
		return(
			<div>
				<div className="notification is-primary">
				<p>{this.props.text}</p>
				<p>
					{this.props.text.map(function (item) {
						return React.createElement(
							"li", 
							{ 
								key: item.id 
							}, 
							item.body);
  					})}
				</p>
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
