/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from 'react'

import { FaGlobeAmericas, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const footerContact = () => {

	return(
		<>
      <div className="mt-6">
          <div>
            <FaEnvelope className="float-left mt-1" sx={{ fill: 'secondary' }} />
            <a href="mailto:hello@plusgroup.org" target="_self" title="hello@plusgroup.org" className="text-black ml-2"><span>hello@plusgroup.org</span></a>
          </div>
      </div>
      <div className="mt-2">
          <div>
            <FaPhoneAlt className="float-left mt-1" sx={{ fill: 'secondary' }} />
            <a href="tel:0151 559 1332" target="_self" title="0151 559 1332" className="text-black ml-2"><span>0151 559 1332</span></a>
          </div>
      </div>		
		</>
	)

}

export default footerContact