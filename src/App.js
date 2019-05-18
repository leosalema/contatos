import React, {Component} from 'react';
import Form from './components/form';
import List from './components/list';
import './App.css';

class App extends Component {
  state = {contatos: null};

  componentDidMount () {
    if (localStorage.getItem ('@contato:') !== null) {
      let contatos = JSON.parse (localStorage.getItem ('@contato:'));
      this.setState({...this.state, contatos});
    } else {
      localStorage.setItem('@contato:', JSON.stringify([]));
    }
  }

  handleChange (event) {
    this.setState ({
      ...this.state,
      contato: {...this.state.contato, [event.target.id]: event.target.value},
    });
  }

  handleClick (contato) {
    let contatos = JSON.parse (localStorage.getItem ('@contato:'));
    contatos.push (contato);
    localStorage.setItem ('@contato:', JSON.stringify (contatos));
    this.setState ({contatos});
  }

  render () {
    return (
      <div>
        <div className="header">
          <h1>Contatos</h1>
        </div>
        <Form handleClick={this.handleClick.bind(this)}/>
        <List contatos={this.state.contatos} />
      </div>
    );
  }
}

export default App;
