import React, {Component} from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import '../App.css';

class List extends Component {
  itemList () {
    if (this.props.contatos !== null) {
      return this.props.contatos.map (contato => (
        <TableRow key={contato.id}>
          <TableCell>{contato.name}</TableCell>
          <TableCell>{contato.lastname}</TableCell>
          <TableCell>{contato.email}</TableCell>
          <TableCell>{contato.phone}</TableCell>
          <TableCell><Button onClick={() => console.log('edit')}><CreateIcon/></Button></TableCell>
          <TableCell><Button onClick={() => console.log('delete')}><DeleteIcon/></Button></TableCell>
        </TableRow>
      ));
    } else {
      return <TableRow />;
    }
  }
  render () {
    return (
      <div className="list">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Sobrenome</TableCell>
                <TableCell>e-mail</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.itemList ()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default List;
