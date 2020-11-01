import React, { Component } from 'react'
import {BrowserRouter , Link , Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import Footer from './footer';
class Mobile extends React.Component{
    render(){
        return(
            <React.Fragment>
         <Header/>   
         <Footer/>
         </React.Fragment>
        )
    }
}

export default Footer;