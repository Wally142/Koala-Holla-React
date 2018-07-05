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
                {props.koala.map(item => (
                    <tr key={item.id}>
                        <td className="tabletext">{item.name}</td>
                        <td className="tabletext">{item.age}</td>
                        <td className="tabletext">{item.gender}</td>
                        <td className="tabletext">{item.ready}</td>
                        <td className="tabletext">{item.notes}</td>
                        <td className="tabletext"><button>Mark Transfer</button></td>
                        <td onClick={() => props.onClick(item.id)} className="tabletext"><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Koala;