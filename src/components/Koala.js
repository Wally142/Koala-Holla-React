import React from 'react';
import './Component.css';

const Koala = (props) => {

    return (
        <table class="table-striped table table-hover">
            <thead>
                <tr>
                    <th class="head">Name</th>
                    <th class="head">Age</th>
                    <th class="head">Gender</th>
                    <th class="head">Ready For Transfer</th>
                    <th class="head">Notes</th>
                    <th class="head">Mark Ready</th>
                    <th class="head">Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tabletext">{props.name}</td>
                    <td class="tabletext">{props.age}</td>
                    <td class="tabletext">{props.gender}</td>
                    <td class="tabletext">{props.ready}</td>
                    <td class="tabletext">{props.notes}</td>
                    <td class="tabletext"><button>Mark Transfer</button></td>
                    <td class="tabletext"><button>Delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Koala;