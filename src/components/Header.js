import React, { Component } from 'react'
import {BrowserRouter , Link , Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logoimg from './olxlogo.png'
import { faCaretDown, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import {Dropdown,Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Mobile from './Mobile';

class Header extends React.Component {
    render() {
        const nav =[
            {id:1,label:"Mobile Phones"},
            {id:1,label:"Cars"},
            {id:1,label:"Motorcycles"},
            {id:1,label:"Houses"},
            {id:1,label:"Tv-video-Audio"},
            {id:1,label:"Tablets"},
            {id:1,label:"Land & Plots"}
        ];
        return (
            <React.Fragment>



<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="header flex fixed">
    <div className="logo flex aic">
               <img src={Logoimg} alt="logo" />
               </div>
               <div className="location  flex aic">
               <div className="ico">
                    <FontAwesomeIcon icon={faSearch} className="s24"></FontAwesomeIcon>
                </div>
                    <input className="label s16 font" value="Pakistan" placeholder=""></input>
                    <button className="arrow s24">
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                    </button>
               </div>
               <div className="search flex aic">
                    <input type="text" placeholder="Find Cars, Mobile phones and more..." className="query s16"></input>
                    <button className="go"> 
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
               </div>
               <div className="actions flex aic">
                <Link to='/account/login' className="s18 font noul noulh b">Login</Link>
                <button className="sell">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <h2 className="s15 font sl">SELL</h2>
                </button>
               </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>

            {/* <div className="header flex fixed">
                <div className="logo flex aic">
               <img src={Logoimg} alt="logo" />
               </div>
               <div className="location  flex aic">
               <div className="ico">
                    <FontAwesomeIcon icon={faSearch} className="s24"></FontAwesomeIcon>
                </div>
                    <input className="label s16 font" value="Pakistan" placeholder=""></input>
                    <button className="arrow s24">
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                    </button>
               </div>
               <div className="search flex aic">
                    <input type="text" placeholder="Find Cars, Mobile phones and more..." className="query s16"></input>
                    <button className="go"> 
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
               </div>
               <div className="actions flex aic">
                <Link to='/account/login' className="s18 font noul noulh b">Login</Link>
                <button className="sell">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <h2 className="s15 font sl">SELL</h2>
                </button>
               </div>
            </div> */}
            <div className="hnav flex aic">
                <Dropdown className="viewcat flex aic">
  <Dropdown.Toggle variant="success" id="dropdown-basic" className="s18 font gw">
    All Categories
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
{
    nav.map(item =>{
        return (
            <Link to={'/Mobile'+item.id} className="noul noulh s15 font bl">{item.label}</Link>
        )
    })
}

            </div>
          
            </React.Fragment>
        )
    }
}

export default Header;
