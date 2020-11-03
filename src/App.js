import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Rank from './Rank/Rank';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import SignIn from './SignIn/SignIn';
import Register from './Register/Register';
import 'tachyons';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';

import './App.css';

const app = new Clarifai.App({
 apiKey: 'e8611d8669e240f8bd89b89e1a4a64cc'
});

const paticleAttribute={
                particles: {
                  number:{
                    value:80,
                    density:{
                      enable:true,
                      value_area:500
                    }
                  }
                }
              }

class App extends React.Component {

constructor(){
  super();
  this.state={
        input:'',
        imageUrl:'',
        box:{},
        route:'signin',
        isSignedIn:false
  }
}

// componentDidMount(){
//   console.log('did mount');
//   fetch('http://localhost:3000/')
//   .then(response=>response.json())
//   .then(console.log)
// }

calculateFaceLocation=(data)=>{
const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
const image=document.getElementById('inputimg');
const height= Number(image.height);
const width= Number(image.width);
return{
  leftCol:clarifaiFace.left_col*width,
  topRow:clarifaiFace.top_row*height,
  rightCol:width-(clarifaiFace.right_col*width),
  bottomRow:height-(clarifaiFace.bottom_row*height)
  }
}

displayBox=(box)=>{
this.setState({box:box});
}

onRouteChange=(route)=>{  
  if(route==='home'){
    this.setState({isSignedIn:true});
  }
  else{
    this.setState({isSignedIn:false});
  }
this.setState({route:route});
}

onInputChange=(event)=>{ 
this.setState({input:event.target.value});
}


onButtonPress=(event)=>{ 
  this.setState({imageUrl:this.state.input}); 
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  .then(response=> this.displayBox(this.calculateFaceLocation(response)))
  .catch(err=> console.log('Error during API call',err));
}

  render() {
      return (
        <div className="App">  
        <Particles className='particles'params={paticleAttribute} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route==='home'
        ?<div>        
        <Logo /> 
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonPress={this.onButtonPress}/>
        <FaceRecognition box={this.state.box} imageURL={this.state.imageUrl}/>
         </div>
         :(this.state.route==='signin'
          ?<SignIn onRouteChange={this.onRouteChange}/>
          :<Register onRouteChange={this.onRouteChange}/>
           )       
         }
        </div>
      );
  }
}

export default App;
