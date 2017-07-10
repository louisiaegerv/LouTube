import React, { Component } from 'react';

// promoted SearchBar from functional component
// to a class based component
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term) {
		this.setState({ term: term });
		this.props.onVideoSearchChange(term);
	}

	render() {
		return (
			<div className="search-bar col-md-12">
				<input
					value = {this.state.term}
					placeholder="Search a video..."
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}
}

export default SearchBar;
