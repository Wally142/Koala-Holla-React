import React from 'react';
import './Component.css';
import logo from '../logo.JPG';
import icon from '../icon.png';
const Title = (props) =>
    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <img alt="A Koala Was Here" src={icon} />
            </div>
            <div className="col-md-8">
                <h1 className="title">Koala Holla</h1>
                <h4 className="title">First National Bank Building</h4>
                <h4 className="title">Subsidiary Of Rodeo LLC</h4>
            </div>
            <div className="col-md-2">
                <img alt="A Koala Was Here" src={logo} />
            </div>
        </div>
    </div>

export default Title;
