import React from 'react';

const Navigation = ({onRouteChange,isSignedIn})=>{
	
		if(isSignedIn){
			return(
         <nav style={{display:'flex',justifyContent:'flex-end'}}>
          <p onClick={()=>onRouteChange('signin')} className='f4 link pa3 pointer dim red underline'>Sign Out</p>
         </nav>)
		}
		else{
			return(
		 <nav style={{display:'flex',justifyContent:'flex-end'}}>
           <p onClick={()=>onRouteChange('signin')} className='f4 link pa3 pointer dim red underline'>Sign In</p>
           <p onClick={()=>onRouteChange('register')} className='f4 link pa3 pointer dim red underline'>Register</p>
         </nav>)
		}    
	
}

export default Navigation;