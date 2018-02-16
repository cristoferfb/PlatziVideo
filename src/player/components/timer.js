import React from 'react';

import './timer.css'

function formattedTime(secs){
	if(!secs) return '00:00';

	const minutos = parseInt(secs/60, 10);
	const segundos = parseInt(secs%60, 10);

	return ( ((minutos < 10) ? '0'+minutos : minutos ) + ':' + ((segundos < 10) ? '0'+segundos : segundos ) );
}

const Timer = props => (
	<div className="Timer">
		<p>
			<span> {formattedTime(props.currentTime)} / { formattedTime(props.duration) }</span>
		</p>
	</div>
)

export default Timer;