import React from 'react';
import PropTypes from 'prop-types';
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

PlayList.propTypes = {
	data: PropTypes.object
}

export default PlayList;