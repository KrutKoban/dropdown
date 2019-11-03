import React from 'react';

const ELEMS = [
  {value: 'some'},
  {value: 'body'},
  {value: 'once'},
  {value: 'told'},
  {value: 'me'},
];

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.openDrowDown = this.openDrowDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.searchElement = this.searchElement.bind(this);
    this.state = {
      choosenElements: [],
      filteredList: ELEMS,
      isOpened: false,
      search: '',
    };
  }

  openDrowDown = () => {
    this.setState({
      isOpened: true
    });
  }

  closeDropDown = () => {
    this.setState({
      isOpened: false,
      search: '',
      filteredList: ELEMS
    });
  }

  addElement = el =>  {
    this.setState(prevState => {
      const list = [...prevState.choosenElements, el];
      return ({
      choosenElements: list
    })});
    this.closeDropDown();
  }

  removeElement = index => {
    const list = this.state.choosenElements;
    list.splice(index, 1);
    this.setState(() => ({
      choosenElements: list
    }));
  }

  searchElement(e) {
    const list = ELEMS.filter(item => item.value.toString().includes(e.target.value));
    this.setState({
      search: e.target.value,
      filteredList: list
    });
  }

  render() {
    let list;
    if (this.state.isOpened) {
      list = <div className="drop-down-list">{this.state.filteredList.map((item, index) => (
        <div
          key={index}
          className="drop-down-list__item"
          onClick={() => this.addElement(item)}
        >
          {item.value}
        </div>
      ))}</div>;
    }
    return (
      <div className="drop-down">
        <div className="input-block">
          <div className="choosen-list">{this.state.choosenElements.map((item, index) => (
            <div
              key={index}
              onClick={() => this.removeElement(index)}
              className="choosen-list_item"
            >
              {`${item.value}`}
            </div>
          ))}</div>
          <input
            type="text"
            value={this.state.search}
            onFocus={this.openDrowDown}
            onChange={this.searchElement}/>
        </div>

        {list}
      </div>
    );
  }
  
}

export default Dropdown;
