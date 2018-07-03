import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Koala from './components/Koala';
import Form from './components/Form';

class App extends Component {

  state = {
    name: 'Greg',
    age: '30',
    gender: 'Male',
    transfer: 'false',
    notes: 'Really Cool',
    // markready: '',
    // remove: ''
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title />
        </Wrapper>
        <Form />
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
