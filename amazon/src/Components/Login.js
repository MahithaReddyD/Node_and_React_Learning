import React,{Component} from 'react';
import Dropdown from './Dropdown';

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
        var data =["mahitha","rishika"];
        return <div>
            <h1>Login</h1>
            <input type="text" name="username" onChange={this.handlechange}/><br></br>
            <input type="text" name="password" onChange={this.handlechange}/><br></br>
            <Dropdown list={data} />
             <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
            
        </div>
    }
}