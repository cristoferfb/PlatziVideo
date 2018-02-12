import React from 'react'
import Playlist from '../../playlist/components/playlist.js'


function Category(props) {
	return (
		<div>
			<p>{props.description}</p>
			<h2>{props.title}</h2>
			<Playlist playlist={props.playlist} key/>
		</div>
	)
}

export default Category