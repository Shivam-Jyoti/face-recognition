import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

import Logo1 from './Brain.jpg';


 



const Logo = ()=>{
	return(
     <div className='ma4 mt0'>
     	<Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 100, width: 100 }} >
           <div className="Tilt-inner"> <img className='br2' src={Logo1} alt='Shivam'/> </div>
        </Tilt>
     </div>


	);
}

export default Logo;