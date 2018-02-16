import React, { Component } from 'react'
import Video from '../components/video'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'

import VideoPlayerLayout from '../components/video-player-layout.js'

export default class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0
	}

	togglePlay = event =>{
		this.setState({
			pause: !this.state.pause
		});
	}

	componentDidMount () {
		this.setState({
			pause: !this.props.autoplay
		})
	}

	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		})
	}

	handleTimeUpdate = event => {
		this.setState({
			currentTime: this.video.currentTime
		})
	}

	render () {
		return (
			<VideoPlayerLayout>
				<Title
					title="Esto es un video chido"
				/>
				<Controls>
					<PlayPause 
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer 
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
				</Controls>
				<Video
					src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
				/>
			</VideoPlayerLayout>
		)
	}
}