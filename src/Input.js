import React from "react";

export default class Header extends React.Component {
	render() {
		return(
			<div className="field">
				<label className="label">Name</label>
				<p className="control">
					<input className="input" type="text" placeholder="Text input" />
				</p>
			</div>
		);
	}
}
