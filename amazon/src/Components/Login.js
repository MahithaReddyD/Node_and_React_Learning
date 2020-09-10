import React,{Component} from 'react';


export class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
    }
    handlechange=(e)=>{
        console.log(e.target.value);
        let currentstate = this.state;
        currentstate[e.target.name]=e.target.value;
        this.setState(currentstate);
    }
    render(){
        return <div>
            <h1>Login</h1>
            <input type="text" name="username" onChange={this.handlechange}/>
            <input type="text" name="password" onChange={this.handlechange}/>
             <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
        </div>
    }
}