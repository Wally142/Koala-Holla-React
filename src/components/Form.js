import React from 'react';
import './Component.css';

const Form = props =>

    <div className="form-group">
        <h2 className="title">Koala Intake Data</h2>
        <input type="text" className="form-control" placeholder="Name" />
        <br />
        <input type="text" className="form-control" placeholder="Age" />
        <br />
        <input type="text" className="form-control" placeholder="Gender" />
        <br />
        <input type="text" className="form-control" placeholder="Transfer" />
        <br />
        <input type="text" className="form-control" placeholder="Notes" />
    </div>;

export default Form