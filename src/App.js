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
		fetch(`http://jsonplaceholder.typicode.com/posts`)
		.then(result=>result.json())
		.then(items=>this.setState({items}))
	}
	banana(){
		this.state.items.forEach(function(item){
			console.log(item);
		});
	}
	render() {
		console.log(this.state.items);
		return(
			<div className="container is-fluid">
				<section className="section">
					<div className="container">
						<Header />
						<Map banana={this.banana.bind(this)} />
						<div className="columns">
							<div className="column is-half">
								<Input />
							</div>
							<div className="column is-half">
								<List />
							</div>
						</div>
					</div>
					<ul>
						{this.state.items.map(function (item) {
							return React.createElement(
							"li", { key: item.id }, item.body);
  						})}
					</ul>
					<Footer />
				</section>
			</div>
		)
	}
}
