import React, { Component } from 'react'
import './style.css';
import plane from '../videos/plane.mp4';
import leaf from '../videos/leaf.mp4';
import ocean from '../videos/ocean.mp4';

class Video extends Component {
    constructor(){
        super();
        this.modal = React.createRef();
        this.modalVid= React.createRef();
        this.enlargeVideo = this.enlargeVideo.bind(this);
    }

    enlargeVideo = (event) => {
        const modalNode = this.modal.current;
        modalNode.style.display = "block";
        const vidNode = this.modalVid.current;
        vidNode.src = event.target.children[0].src;
    }

    close = () => {
        const modalNode = this.modal.current;
        modalNode.style.display = "none";
    }

    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="column">
                        <video id="vid1" controls onClick={this.enlargeVideo.bind(this)}>
                            <source src={plane} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video> 
                        <div id="myModal" class="modal" ref={this.modal}>
                            <span class="close" onClick={this.close}>&times;</span>
                            <video class="modal-content" id="vid01" controls ref={this.modalVid}></video>
                        </div>  
                    </div>
                    <div class="column">
                        <video id="vid2" controls onClick={this.enlargeVideo.bind(this)}>
                            <source src={leaf} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video> 
                    </div>
                    <div class="column">
                        <video id="vid3" controls onClick={this.enlargeVideo.bind(this)}>
                            <source src={ocean} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;