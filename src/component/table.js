import React from 'react'
import './style.css';

function Table() {
    return (
        <div>
            <div className="container"><h1>Projects</h1></div>
            <div className="container">
                <table style={{width: "100%"}}>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <th style={{fontWeight: "lighter"}}><a href="https://github.com/ucsb-cs48-w20/MessageOrg">MessageOrg</a></th>
                        <th style={{fontWeight: "lighter"}}>Implemented an email organizational tool using React and the Google Api.</th>
                        <th style={{fontWeight: "lighter"}}>2020</th>
                    </tr>
                    <tr>
                        <th style={{fontWeight: "lighter"}}><a href="https://github.com/Kimeiga/muzake">Muzake</a></th>
                        <th style={{fontWeight: "lighter"}}>Implemented a decision-making/debate platform using Vue.</th>
                        <th style={{fontWeight: "lighter"}}>2019</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Table;