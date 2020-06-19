import React, { Component} from 'react';
// import './App.css';
import { Container, Header, } from "semantic-ui-react";
import Lists from './components/lists/Lists';
import GroceryForm from "./GroceryForm";




class App extends Component {
  state = {
    lists: [
      {id: 1, name: 'apple', price: '1.00'},
      {id: 2, name: 'eggplant', price: '5.00'},
      {id: 3, name: 'blackbeans', price: '4.00'},
    ],
  };
    


  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addContact = (listData) => {
    let list = { id: this.getId(), ...listData, };
    this.setState({ contacts: [list, ...this.state.lists], });
  };

  render() {
    return (
      <Container>
        <Header as="h1">Grocery List </Header>
        <Lists lists = {this.state.lists} />
        <GroceryForm add={this.addList} />
      </Container>
    );
  }
  

  
}


export default App;
