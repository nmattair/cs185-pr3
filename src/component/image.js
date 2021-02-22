import React, { Component } from 'react'
import './style.css';
import ps from '../images/ps.jpg';
import lt from '../images/lt.jpg';
import gc from '../images/gc.jpg';
import zp from '../images/zp.jpg';
import ys from '../images/ys.jpg';
import jt from '../images/jt.jpg';

class Image extends Component {
    constructor(){
        super();
        this.modal = React.createRef();
        this.modalImg= React.createRef();
        this.captionText = React.createRef();
        this.enlargeImage = this.enlargeImage.bind(this);
    }

    enlargeImage = (event) => {
        const modalNode = this.modal.current;
        modalNode.style.display = "block";
        const imgNode = this.modalImg.current;
        imgNode.src = event.target.src;
        const captionNode = this.captionText.current;
        captionNode.innerHTML = event.target.alt;
    }

    close = () => {
        const modalNode = this.modal.current;
        modalNode.style.display = "none";
    }

    render(){
        return (
            <div className="container">
                <div class="row">
                    <div class="column">
                        <img id="img1" alt="Palm Springs" onClick={this.enlargeImage.bind(this)} src={ps}/>
                        <div id="myModal" class="modal" ref={this.modal}>
                            <span class="close" onClick={this.close}>&times;</span>
                            <img class="modal-content" alt="Enlarged" id="img01" ref={this.modalImg}/>
                            <div id="caption" ref={this.captionText}></div>
                        </div>
                        <img id="img2" alt="Lake Tahoe" onClick={this.enlargeImage.bind(this)} src={lt}/>
                    </div>
                    <div class="column">
                        <img id="img3" alt="Grand Canyon" onClick={this.enlargeImage.bind(this)} src={gc}/>
                        <img id="img4" alt="Zion" onClick={this.enlargeImage.bind(this)} src={zp}/>  
                    </div>
                    <div class="column">
                        <img id="img5" alt="Yellowstone" onClick={this.enlargeImage.bind(this)} src={ys}/>
                        <img id="img6" alt="Joshua Tree" onClick={this.enlargeImage.bind(this)} src={jt}/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;