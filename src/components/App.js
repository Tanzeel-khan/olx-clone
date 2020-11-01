import React ,{Component} from 'react'; 
import './App.css';
import './props.css';
import {BrowserRouter , Link , Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './footer.js';
import Mobile from './Mobile'
class App extends React.Component{
  render(){
    return(
      <React.Fragment>
      <BrowserRouter>
      <Header/>
     
      <Home/>
        {/* <Route path='/' component={Home}></Route> */}
        {/* <Route path='/nav' component={Header}></Route> */}
      
        <Footer/>
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
