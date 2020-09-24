import React, { Component } from 'react';
import { Person } from './Person';

class GovernmentsClass extends Component {
  constructor(props) {
    super();
    this.state = {
      person: [
        { name: 'Arijit', age: 22 },
        { name: 'Fenink', age: 25 },
        { name: 'Alexiy', age: 21 },
      ],
      otherState: "some other value"
    }
  }

  switchHandler = () => {
    this.setState({
      person: [
        { name: 'Alex', age: 26 },
        { name: 'Siri', age: 32 },
        { name: 'Botik', age: 12 }
      ]
    });
  }
  show = (event) => {
    this.setState({
      person: [
        { name: 'Arijit', age: 22 },
        { name: 'Fenink', age: 25 },
        { name: event.target.value, age: 21 },
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>class two way binding feature</h1>
        <button onClick={() => this.switchHandler()}>Switch Name</button>
        <Person status={false} name={this.state.person[0].name} age={this.state.person[0].age} > 1234546</Person>
        <Person status={false} name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person status={true} changeName={this.show} name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }

}
export default GovernmentsClass;