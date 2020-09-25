import React, { Component } from 'react';
import { Person } from './Person';

class GovernmentsClassList extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        { name: 'Arijit', age: 22 },
        { name: 'Fenink', age: 25 },
        { name: 'Alexiy', age: 21 },
      ],
      otherState: "some other value",
      showPerson: false
    }
  }
  toggler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }


  render() {
    const style = { //inline style
      backgroundColor: "green",
      font: 'inherit',
      padding: '8px'
    }

    let person = null;

    if (this.state.showPerson) {

      person = (
        <div>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} > 1234546</Person>
        </div>
      );
      style.backgroundColor = "red";
      style.cursor="pointer";
    }
    return (
      <div className="App">
        <h1>Conditional Features</h1>
        <button style={style} onClick={() => this.toggler()}>Toggle</button>
        {person}
      </div>
    );
  }

}
export default GovernmentsClassList;