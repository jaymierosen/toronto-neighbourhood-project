import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Map from "./Map";
import Input from "./Input";
import List from "./List";

export default class App extends Component{
	constructor() {
		super();
		this.state = { 
			items: []
		};
	}
	componentDidMount(){
		var _this = this;
		fetch(`http://jsonplaceholder.typicode.com/posts`)
		.then(result=>result.json())
		.then(items=>_this.setState({items}))
	}
	displayText(items){
		console.log(items);
		this.setState({
			items: []
		})
	}
	render() {
		return(
			<div className="container is-fluid">
				<section className="section">
					<div className="container">
						<Header />
						<Map />
						<div className="columns">
							<div className="column is-half">
								<Input />
							</div>
							<div className="column is-half">
								<List displayText={this.displayText.bind(this)} text={this.state.displayText} />
							</div>
						</div>
					</div>
					<ul>
						{this.state.items.map(function (item) {
							return React.createElement(
								"li", 
								{ 
									key: item.id 
								}, 
								item.body);
  						})}
					</ul>
					<Footer />
				</section>
			</div>
		)
	}
}
