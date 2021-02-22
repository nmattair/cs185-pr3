import React, { Component } from 'react'
import './style.css';

class Email extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    validate = () => {
        if(this.state.email.includes("@") && (this.state.email.endsWith(".com") || this.state.email.endsWith(".edu"))){
            document.querySelector("#response").innerHTML = "Email successfully recorded";
        }
        else{
            document.querySelector("#response").innerHTML = "Invalid email address";
        }
    }
    render() {
        return (
            <div>
                <div class="container">
                    <br/>
                    <form id="emailForm">  
                        <label for="address">Email:</label><br/>
                        <input type="text" name="email" id="address" onChange={this.handleChange}/><br/>
                        <button id="submitEmail" onClick={this.validate} type="button">Submit</button>
                    </form>
                </div>
                <div class="container" id="response"></div>
            </div>
        );
    }
}

export default Email;