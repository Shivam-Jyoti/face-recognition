import React from 'react';


class SignIn extends React.Component{
// constructor(props){
//   super(props);
// }


  onSubmitSignIn=()=>{  
  alert(document.querySelector('#email-address').value);
  alert(document.querySelector('#password').value);
    fetch('http://localhost:3001/signin',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
          email:document.querySelector('#email-address').value,
          password:document.querySelector('#password').value
      })
    }).then(res=>res.json())
      .then(data=>{
           if (data ==='suceess'){
               this.props.onRouteChange('home');
            }
           else{
              this.props.onRouteChange('signin');
            }})
      .catch(console.log('error occured during fetching request from server!!!'))
    
  alert("hello 2");
 
}



   render(){    
   // const {onRouteChange}=this.props;
	 return(
		<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 black-80">
    <form className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>     
    </fieldset>
    <div className="">
      <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=> this.props.onRouteChange('Register')} href="#0" className="f6 link pointer dim black db">Register</p>      
    </div>
    </form>
    </main>
    </article>
	); }
}

export default SignIn ;

