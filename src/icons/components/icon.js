import React from 'react';
import PropTypes from 'prop-types';

function Icon(props){
	return (
		<svg
			fill={props.color}
			height={props.size}
			width={props.size}
			viewBox="0 0 32 32"
		>
			{props.children}
		</svg>
	)
}

Icon.propTypes = {
	fill: PropTypes.number,
	size: PropTypes.number
}

export default Icon