import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onButtonPress})=>{
	return(
     <div>
           <p className='f3'>
     {'This App will detect faces in your picture!!!'}
     </p>

       <div className='center'>
         <div className='pa4 center form br3 shadow-5'>
           <input className='f4 pa2 br3 center w-70' type='tex' onChange={onInputChange}/>
           <button className='grow br3 f5 link ph3 pv2 dib white bg-light-purple w-30' onClick={onButtonPress}>Show</button>  
         </div>        
        </div>
     </div>
	);
}

export default ImageLinkForm ;