import React, { useState } from 'react';

function IndTab(props) {
    const addStyle = () => {
        if(props.out.id === props.activeTab){
            return {textDecoration: 'underline'}
        }
    };
    const [hovered, setHovered]= useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <div className={hovered ? 'tab-list-item-hovered' : 'tab-list-item'} style = {addStyle()} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick= {props.cTab.bind(this, props.out.id)}>{props.out.title}</div>
    );
}

export default IndTab;