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
			items: 'hello'
		};
	}
	componentDidMount(){
		var _this = this;
		var url = 'http://jsonplaceholder.typicode.com/posts';
		fetch(url,{
			method: 'GET'
		})
		.then(function(result){
			result.json()
			console.log(result.url)
		})
		.then(function(data){
			_this.setState({
				items: 'hello'
			})
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
								<List  
									text={this.state.displayText} 
								/>
							</div>
						</div>
					</div>
					<Footer />
				</section>
			</div>
		)
	}
}
