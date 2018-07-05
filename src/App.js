import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Koala from './components/Koala';
// import Form from './components/Form';

const url = 'http://localhost:5000/api';

class App extends Component {

  state = {
    koalas: [],
    name: '',
    age: '',
    gender: '',
    transfer: 'false',
    notes: '',
    // markready: '',
    // remove: ''
  }

  constructor(props) {
    super(props)
    this.updateName = this.updateName.bind(this)
    this.updateAge = this.updateAge.bind(this)
    this.updateGender = this.updateGender.bind(this)
    this.updateTransfer = this.updateTransfer.bind(this)
    this.updateNotes = this.updateNotes.bind(this)
    this.addKoala = this.addKoala.bind(this)
    this.deleteKoala = this.deleteKoala.bind(this)

  }

  componentDidMount() {
    console.log('koalas loaded')
    this.getKoalas();
  }

  componentDidUpdate() {
    this.getKoalas();
  }

  updateName(event) {
    this.setState({ name: event.target.value })
  }

  updateAge(event) {
    this.setState({ age: event.target.value })
  }

  updateGender(event) {
    this.setState({ gender: event.target.value })
  }

  updateTransfer() {
    this.setState({ transfer: 'true' })
    console.log('hello')
  }

  updateNotes(event) {
    this.setState({ notes: event.target.value })
  }

  getKoalas() {
    fetch(`${url}/koalas`)
      .then(response => response.json())
      .then(koalaResponseArray => {
        this.setState({
          koalas: koalaResponseArray
        })
      })
      .catch(error => console.log(`Error with fetch getKoalas: ${error} `));
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
        this.getKoalas();
      })
      .catch(error => console.log(`fetch failed addCountry: ${error}`)
      )
  }

  deleteKoala(id) {
    const kId = id;
    fetch(`${url}/remove/${kId}`)
      .then(response => {
        console.log(`delete was successful: ${response}`)
      })
      .catch(error => console.log(`fetch failed delete koala: ${error}`)
      )
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title />
        </Wrapper>
        {/* <Form onClick={this.addKoala} onChange={this.updateKoala} /> */}
        <div className="form-group">
          <h2 className="title">Koala Intake </h2>
          <input value={this.state.name} onChange={this.updateName} type="text" className="form-control" placeholder="Name" />
          <br />
          <input value={this.state.age} onChange={this.updateAge} type="text" className="form-control" placeholder="Age" />
          <br />
          <input value={this.state.gender} onChange={this.updateGender} type="text" className="form-control" placeholder="Gender" />
          <br />
          <input value={this.state.notes} onChange={this.updateNotes} type="text" className="form-control" placeholder="Notes" />
          <br />
          <button onClick={this.addKoala} className="btn btn-primary">Submit Koala</button>
        </div>
        <Koala
          koala={this.state.koalas}
          onClick={this.deleteKoala}
          onChange={this.updateTransfer}
        />
      </div>
    );
  }
}

export default App;