import React from 'react'

import './modal.css'

export default function Modal(props){
	return(
		<div className="Modal">
			{props.children}
		</div>
	)
}