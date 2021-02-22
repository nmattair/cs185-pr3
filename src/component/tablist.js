import React, { Component } from 'react';
import IndTab from "./indtab";

class TabList extends Component {
    render() {
        return (
            this.props.tabs.map((tab) =>
                <IndTab className="tab-list-item" out= {tab} activeTab= {this.props.activeTab} cTab= {this.props.cTab}/>
            )
        );
    }
}

export default TabList;