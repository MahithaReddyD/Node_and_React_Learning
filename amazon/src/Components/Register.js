import React,{Component} from 'react';
export class RegisterComponent extends Component{
constructor(){
super();
this.state={
username:"",
firstname:"",
lastname:"",
email:"",
age:"",
gender:""
}
}
//onchange handler event binding
handleInputChange=(e)=>{
console.log(e.target.value);
let currentstate = this.state;
currentstate[e.target.name]=e.target.value;
this.setState(currentstate);
}
render(){
return <div>
<h1>Registration</h1>
<form>
<div>
<input type="text" placeholder="username" name="username" onChange={this.handleInputChange}/>
</div>
<div>
<input type="text" placeholder="firstname" name="firstname" onChange={this.handleInputChange}/>
</div>
<div>
<input type="text" placeholder="lastname" name="lastname" onChange={this.handleInputChange}/>
</div>
<div>
<input type="email" placeholder="Email" name="email" onChange={this.handleInputChange}/>
</div>
<div>
<input type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/>
</div>
<div>
<input type="radio" id="male" name="gender" value="male" onChange={this.handleInputChange}/>
<label for="male">Male</label>
</div>
<div>
<input type="radio" id="female" name="gender" value="female" onChange={this.handleInputChange}/>
<label for="female">Female</label>
</div>
<div>
<button type="button" onClick={this.handleInputChange}>Register</button>
</div>
</form>
<h1>{this.state.username}</h1>
<h1>{this.state.firstname}</h1>
<h1>{this.state.lastname}</h1>
<h1>{this.state.email}</h1>
<h1>{this.state.age}</h1>
<h1>{this.state.gender}</h1>
</div>
}
}