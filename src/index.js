import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = '{YOUR API KEY HERE}';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			selectedFirstVideo: false
		};

		this.firstVideoSearch('Drone skydive');
	}

	firstVideoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, videos => {
			this.setState({
				videos: videos,
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
