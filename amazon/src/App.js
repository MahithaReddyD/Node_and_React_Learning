import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {LoginComponent} from './Components/Login';
import {RegisterComponent} from './Components/Register';
const App = function(){
    const companyname = 'Pega Systems';
    return <div>
        <Header title={companyname}/>
        <LoginComponent />
        <RegisterComponent />
        <Footer />
    </div>;
};
export default App;