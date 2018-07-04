import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Koala from './components/Koala';
import Form from './components/Form';

const url = 'http://localhost:5000/api/';

class App extends Component {

  state = {
    name: 'Greg',
    age: '30',
    gender: 'Male',
    transfer: 'true',
    notes: 'Legit',
    // markready: '',
    // remove: ''
  }

  constructor(props) {
    super(props)
    this.updateKoala = this.updateKoala.bind(this)
    
  }

  updateKoala(event) {
    this.setState({ name: event.target.value })
    this.setState({ age: event.target.value })
    this.setState({ gender: event.target.value })
    this.setState({ transfer: event.target.value })
    this.setState({ notes: event.target.value })
    console.log(this.state.name);
  }

  addKoala() {

    const koala_data = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      transfer: this.state.transfer,
      notes: this.state.notes
    }

    const request = new Request(`${url}/new-koala`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(koala_data)
    })

    fetch(request)
      .then(response => {
        console.log(`post was successful: ${response}`)
        // this.getKoalas();
      })
      .catch(error => console.log(`fetch failed addCountry: ${error}`)
      )
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title />
        </Wrapper>
        <Form onClick={this.addKoala} onChange={this.updateKoala} />
        <Koala
          // id={item.id}
          // key={item.id}
          name={this.state.name}
          age={this.state.age}
          gender={this.state.gender}
          ready={this.state.transfer}
          notes={this.state.notes}
        // onClick={this.purchase}
        />

      </div>
    );
  }
}

export default App;

// updateAge(event) {
//   this.setState({ age: event.target.value })
// }

// updateGender(event) {
//   this.setState({ gender: event.target.value })
// }

// updateTransfer(event) {
//   this.setState({ transfer: event.target.value })
// }

// updateNotes(event) {
//   this.setState({ notes: event.target.value })
// }
