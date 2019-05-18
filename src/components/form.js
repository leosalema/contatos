import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';

class Form extends Component {
  state = {id: null, name: '', lastname: '', email: '', phone: ''};

  componentDidMount () {
    if (localStorage.getItem ('@contato:') === null) {
      this.setState ({id: 0});
    } else {
      console.log ('eu');
      let contatos = JSON.parse (localStorage.getItem ('@contato:'));
      this.setState ({id: contatos.length});
    }
  }

  handleChange (event) {
    this.setState ({...this.state, [event.target.id]: event.target.value});
  }

  handleClick () {
    let contatos = JSON.parse (localStorage.getItem ('@contato:'));
    console.log(contatos.length)
    return this.props.handleClick (this.state), this.setState ({
      id: (contatos.length + 1),
      name: '',
      lastname: '',
      email: '',
      phone: '',
    });
  }

  render () {
    return (
      <div className="form">
        <form>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            value={this.state.name}
            onChange={this.handleChange.bind (this)}
          />
          <TextField
            margin="dense"
            id="lastname"
            label="Sobrenome"
            type="text"
            fullWidth
            value={this.state.lastname}
            onChange={this.handleChange.bind (this)}
          />
          <TextField
            margin="dense"
            id="email"
            label="e-mail"
            type="email"
            fullWidth
            value={this.state.email}
            onChange={this.handleChange.bind (this)}
          />
          <TextField
            margin="dense"
            id="phone"
            label="Telefone"
            type="tel"
            fullWidth
            value={this.state.phone}
            onChange={this.handleChange.bind (this)}
          />
          {this.state.name === ''
            ? <Button disabled>Salvar</Button>
            : <Button
                variant="contained"
                color="primary"
                onClick={() => this.handleClick ()}
              >
                Salvar
              </Button>}
        </form>
      </div>
    );
  }
}

export default Form;
