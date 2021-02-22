import './App.css';

import Body from './component/body'
import TabList from './component/tablist'
import { Component } from 'react'

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }
  constructor(){
    super();
    this.state = {
      active: 1
    }
    this.changeTab = (id) => {
      this.setState({
        active: id
      })
    }
    this.topFunction = this.topFunction.bind(this);
  }

  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollFunction = () => {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  render(){
    const tabs= [{
      id: 1,
      title: 'Text'
    },
    {
      id: 2,
      title: 'Image'
    },
    {
      id: 3,
      title: 'Video'
    },
    {
      id: 4,
      title: 'Table'
    },
    {
      id: 5,
      title: 'Email'
    }]

    return (
      <div className="App">
        <div className="nav-bar">
          <TabList tabs= {tabs} activeTab= {this.state.active} cTab= {this.changeTab}/>
        </div>
        <div className="Body">
          <Body activeTab= {this.state.active}/>
        </div>
        <button onClick={this.topFunction} id="myBtn" title="Go to top">Scroll to Top</button>
      </div>
    );
  }
}

export default App;