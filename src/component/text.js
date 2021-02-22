import React from 'react'
import './style.css';

function Text() {
    return (
        <div className="container">
            <br/>
            <form>
                <label htmlFor="first">First Name:</label><br/>
                <input type="text" name="fname" id="first" defaultValue="John"/><br/>
                <label htmlFor="last">Last Name:</label><br/>
                <input type="text" name="lname" id="last" defaultValue="Smith"/><br/>
                
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="female"/>
                <label htmlFor="female">Female</label><br/>
                <input type="radio" id="other" name="gender" value="other"/>
                <label htmlFor="other">Other</label><br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Text;