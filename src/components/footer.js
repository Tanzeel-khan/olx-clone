import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom';

import { faCaretDown, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="foot">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3">
                        <h3 className="font s13 b">POPULAR CATEGORIES</h3>
                        <Link to='/ol'>Cars</Link><br></br>
                        <Link to='/ol'>Flats for rent</Link><br></br>
                        <Link to='/ol'>Jobs</Link><br></br>
                        <Link to='/ol'>Mobile Phones</Link>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3">
                    <h3 className="font s12 b">TRENDING SEARCHES</h3>
                    <Link to='/ol'>Bikes</Link><br></br>
                        <Link to='/ol'>Watches</Link><br></br>
                        <Link to='/ol'>Books</Link><br></br>
                        <Link to='/ol'>Dogs</Link>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3">
                    <h3 className="font s12 b">ABOUT US</h3>
                    <Link to='/ol'>About OlX group</Link><br></br>
                        <Link to='/ol'>OLX Blog</Link><br></br>
                        <Link to='/ol'>Contact Us</Link><br></br>
                        <Link to='/ol'>OLX for Business</Link>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3">
                    <h3 className="font s12 b">OLX</h3>
                    <Link to='/ol'>Help</Link><br></br>
                        <Link to='/ol'>SiteMap</Link><br></br>
                        <Link to='/ol'>Legal & Privacy information</Link><br></br>
                        {/* <div className="follow">
                    <h3 className="font s12 b">Follow Us</h3>
                    <Link to='/facebook'>
                        <FontAwesomeIcon icon={faPlus}>

                        </FontAwesomeIcon>
                    </Link>
                    </div> */}
                    </div>
                    </div>
                </div>
            </div>

            <div className="cp">
            <div className="container">
            <div className="country">
                    <h3 className="s13"><span className="s15 b">Other Countries</span>  <Link to=''>India</Link>-<Link to=''>SouthAfrica</Link>-<Link to=''>Indonesia</Link></h3>
                    <h3 className="s13 b classy">Free Classifieds in Pakistan. <span>© 2006-2020 OLX</span></h3>
            </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Footer;