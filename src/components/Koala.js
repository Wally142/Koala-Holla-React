import React from 'react';
import './Component.css';

const Koala = (props) => {

    return (
        <table className="table-striped table table-hover">
            <thead>
                <tr>
                    <th className="head">Name</th>
                    <th className="head">Age</th>
                    <th className="head">Gender</th>
                    <th className="head">Ready For Transfer</th>
                    <th className="head">Notes</th>
                    <th className="head">Mark Ready</th>
                    <th className="head">Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tabletext">{props.name}</td>
                    <td className="tabletext">{props.age}</td>
                    <td className="tabletext">{props.gender}</td>
                    <td className="tabletext">{props.ready}</td>
                    <td className="tabletext">{props.notes}</td>
                    <td className="tabletext"><button>Mark Transfer</button></td>
                    <td className="tabletext"><button>Delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Koala;