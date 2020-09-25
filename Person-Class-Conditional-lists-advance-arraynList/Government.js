import React, { Component } from 'react';
import { Person } from './Person';

class GovernmentsClassListAdvance extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        { id: 'a1', name: 'Arijit', age: 22 },
        { id: 'a2', name: 'Fenink', age: 25 },
        { id: 'a3', name: 'Alexiy', age: 21 },
      ],
      otherState: "some other value",
      showPerson: false
    }
  }
  toggler = () => {
   
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }
  nameChangedHandler = (event,id) => {
    console.log(id);
  }
  deletePerson=(delIndex)=>{
    const persons = [...this.state.person];
    persons.splice(delIndex,1); //at position delIndex remove 1 item
    console.log(persons);
    this.setState({person:persons})
    console.log(persons);
  }


  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }
    console.log("called");
    let person = null;

    if (this.state.showPerson) {

      person = (
        <div>
          {this.state.person.map((person,index) => {
            console.log(index,person);
            return <Person
              click={() => this.deletePerson(index)}
              status={true}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Conditional adv Features</h1>
        <button style={style} onClick={() => this.toggler()}>Toggle</button>
        {person}
      </div>
    );
  }

}
export default GovernmentsClassListAdvance;