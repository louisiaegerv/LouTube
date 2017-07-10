import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyB5fJ_BrPTTKwmc5Oix06NVh9I5y5T1UkM';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('Drone skydive');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

		return (
			<div>
				<div className='logo-container col-md-12'>
					<img className='logo' src="./src/img/logo.png" />
				</div>
				<SearchBar onVideoSearchChange={ videoSearch } />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={ this.state.videos } />
			</div>
		);
	}
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
