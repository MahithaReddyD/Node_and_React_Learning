import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {LoginComponent} from './Components/Login';
import {RegisterComponent} from './Components/Register';
import ProductList from './Components/ProductList'
export class App extends Component{
    constructor(){
        super();
        this.state={
            companyname:"",
            cartCount:0
        }
    }
    handleClick=(data)=>{
        console.log(data);
        this.setState({cartCount:this.state.cartCount+1});

    }
    render(){
    return <div>
        <Header title={this.state.companyname} cartCount={this.state.cartCount}/>
        <ProductList handleClick={this.handleClick} />
    </div>;
    }
};
export default App;