import React from 'react';
import './App.css';
import Dropdown from './Dropdown';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addDropDown = this.addDropDown.bind(this);
    this.state = {
      dropdownCount: 0
    }
  }

  addDropDown = () => {
    this.setState({
      dropdownCount: this.state.dropdownCount + 1
    });
  }

  render() {
    let dropdownList = [];
    for(let i = 0; i < this.state.dropdownCount; i++) {
      dropdownList.push(<Dropdown />);
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.addDropDown}>Add dropdown</button>
          {dropdownList.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </header>
      </div>
    );
  }
  
}

export default App;
