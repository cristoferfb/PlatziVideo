import React from 'react';
import PropTypes from 'prop-types';
import Media from './media.js';

import "./playlist.css";

function PlayList(props) {
	return (
		<div className="Playlist">
			{
				props.playlist.map((item)=>{
					return(
						<Media 
							{...item} 
							key={item.id} 
							openModal={props.handleOpenModal}
						/>
					)
				})
			}
		</div>
	)
}

PlayList.propTypes = {
	playlist: PropTypes.array
}

export default PlayList;