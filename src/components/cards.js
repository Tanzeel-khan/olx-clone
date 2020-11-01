import React from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom';


class Card extends React.Component{
    constructor(props){
        super()
        this.state={
          imgsrc: "",
          title : "",
          text : ""
        }
      }
    render(){
        return(
            <div className="card" >
            <div className="sq">
            <img src={this.props.imgsrc} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">RS: {this.props.price}</h5>
              <p className="card-text">{this.props.title}</p>
            </div>
          </div>
        )
    }
}

export default Card;