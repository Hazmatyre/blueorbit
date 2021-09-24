import React from 'react'

const divider = ( data ) => {
	return(
		<div className={data.className}>
			<svg size={50} className="mx-auto" width="50" height="31" viewBox="0 0 101 41" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d)">
					<circle cx="50.5" cy="16.5" r="16.5" fill="white"/>
					<circle cx="50.5" cy="16.5" r="15.5" stroke="#161B39" stroke-width="2"/>
				</g>
				<circle cx="50.5" cy="16.5" r="10.5" fill="#ED0E74"/>
				<circle cx="90.5" cy="16.5" r="10.5" fill="#C4C4C4"/>
				<circle cx="10.5" cy="16.5" r="10.5" fill="#C4C4C4"/>
				<defs>
					<filter id="filter0_d" x="30" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="2"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
					</filter>
				</defs>
			</svg>			
		</div>
	)
}

export default divider