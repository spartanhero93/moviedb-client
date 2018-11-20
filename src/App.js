import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

class ConnectedApp extends Component {
	state = {
		data: {}
	};

	fetchTopRated = async event => {
		try {
			const { name } = await event.target;
			const response = await axios.get(`http://localhost:3001/api/movies/${name}`);
			const { data } = await response.data;
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	render() {
		const { test } = this.props;
		return (
			<div>
				<h1>Hello World</h1>
				<button onClick={this.fetchTopRated} name="top_rated">
					Fetch Top Rated
				</button>
				<button onClick={this.fetchTopRated} name="popular">
					Fetch Popular
				</button>
				<button onClick={this.fetchTopRated} name="now_playing">
					Fetch now playing
				</button>
				<button onClick={this.fetchTopRated} name="upcoming">
					Fetch upcoming
				</button>
				<button onClick={this.fetchTopRated} name="latest">
					Fetch latest
				</button>
			</div>
		);
	}
}
const click = () => ({
	type: 'TEST'
});
const mapDispatchToProps = dispatch => ({
	test: () => dispatch(click())
});

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
