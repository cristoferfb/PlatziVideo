import React from 'react';
import Media from './media.js';

import "./playlist.css";

function PlayList(props) {
	const playlist = props.data.categories[0].playlist

	return (
		<div className="Playlist">
			{
				playlist.map((item)=>{
					return <Media {...item} key={item.id} />
				})
			}
		</div>
	)
}

export default PlayList;