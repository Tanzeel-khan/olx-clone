import React from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import banner from '../assets/hero_bg_pk.jpg';
import phoneimg from '../assets/phone-app.png';
import appstore from '../assets/appstore_2x.png';
import playstore from '../assets/playstore_2x.png';
import civic1 from '../assets/civic 2020.jpg';
import civic2 from '../assets/civic 2.jpeg';
import civic3 from '../assets/reborn2.jpg';
import civic4 from '../assets/reborn.jpg';
import civic5 from '../assets/eagle eye.jpg';
import vigo from '../assets/vigo.jpg';
import vigo2 from '../assets/vigo 2.jpg';
import revo from '../assets/revo.jpg';
import revo2 from '../assets/revoo.jpg';
import fortuner from '../assets/fortuner.jpg';
import ybr from '../assets/ybrg.jpg';
import y1 from '../assets/r1.jpg';
import y3 from '../assets/r3.jpg';
import house from '../assets/bahria.jpg';
import mobile from '../assets/p30.jpg';
import smart from '../assets/smart.jpeg';
import pel from '../assets/pel.jpg';
import Card from '../components/cards';
class Home extends React.Component{
 
    render(){
     
      return(
        <React.Fragment>
        <div className="_2fcb">
        <div className="ban"></div>
        </div>
        <div className="container">
          <h1 className="s22 b font fresh">Fresh recommendations</h1> <br></br>
          <div className="row">
        <div className='col-xs-3 col-sm-3 col-md-3'>
              <Card
                imgsrc= {civic1}
        price = "3500000"
        title = "Honda Civic 2020 model "
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {civic2}
        price = "3200000"
        title = "Honda Civic 2020 model turbo"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {fortuner}
        price = "7500000"
        title = "Toyota Fortuner 2.8"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {y1}
        price = "350000"
        title = "yamaha R1"
              />
        </div>
          </div>

          <br></br>

          <div className="row">
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {y3}
        price = "300000"
        title = "Yamaha R3"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {civic3}
        price = "1100000"
        title = "Honda Civic Reborn 2012"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {ybr}
        price = "170000"
        title = "Yamaha YBR 125 g"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {civic4}
        price = "1200000"
        title = "Honda Civic reborn 2012"
              />
        </div>
          </div>
          <br></br>
          <div className="row">
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {civic5}
        price = "9500000"
        title = "Honda Civic 2005 Eagle eye"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {vigo}
        price = "3600000"
        title = "Toyota Vigo Champ"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {vigo2}
        price = "3200000"
        title = "Toyota vigo"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {house}
        price = "10000000"
        title = "120 Yards Huse for sale in bahria town karachi"
              />
        </div>
          </div>
          <br></br>
          <div className="row">
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {revo}
        price = "3500000"
        title = "Toyota Revo"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {revo2}
        price = "3500000"
        title = "Toyota revo 2.0"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {mobile}
        price = "25000"
        title = "Huawei P30 lite"
              />
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {pel}
        price = "55000"
        title = "Pel 19 cu.ft fridge"
              />
        </div>
          </div>
          <br></br>
          <div className="row">
        <div className='col-xs-3 col-sm-3 col-md-3'>
        <Card
                imgsrc= {smart}
        price = "2000"
        title = "Smart watch"
              />
        </div>
        </div>
        
        <br></br>
        <div className="load">
        <button type="button" class="btn btn-outline-dark">Load More</button>
        </div>
        <br></br>
        <div className="foot-ban">
        <div className="row">
        <div className='col-xs-4 col-sm-4 col-md-4'>
        <img src={phoneimg} alt="phone"></img>
        </div>
        <div className='col-xs-4 col-sm-4 col-md-4'>
        <div className="El-uo">
        <h1 className="try s30 font b">TRY THE OLX APP</h1>
        <p className="try">Buy, sell and find just about anything using the app on your mobile.</p>
        </div>
        </div>
        <div className='col-xs-4 col-sm-4 col-md-4'>
        <div className="ljs"></div>
        <div className="txc">
        <h1 className="try s20 font b">GET YOUR APP TODAY</h1>
        <Link to='/appstore'>
          <img className = "_10wyb" src={appstore} alt="app"></img>
          </Link>
          <Link to='/appstore'>
          <img className = "_10wyb" src={playstore} alt="play"></img>
          </Link>
          </div>
        </div>
        </div>
        </div>
        </div>
        </React.Fragment>
      );
    }
  }
  
  export default Home;
  