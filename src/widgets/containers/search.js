import React, { Component } from 'react';
import Search from '../components/search'

export default class SearchContainer extends Component {
	state = {
		value: ''
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.input.value);
	}

	setInputRef = element => {
		this.input = element;
	}

	handleInputChnage = event => {
		this.setState({
			value: event.target.value
		})
	}

	render () {
		return (
			<Search 
				setRef = {this.setInputRef}
				handleSubmit = {this.handleSubmit}
				handleChange  = {this.handleInputChnage}
				value = {this.state.value}
			/>
		)
	}
}