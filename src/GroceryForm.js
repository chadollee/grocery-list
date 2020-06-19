import React from "react";
import { Form, } from "semantic-ui-react";

class GroceryForm extends React.Component {
  state = { name: "", price: "", };

handleSubmit = (e) => {
  e.preventDefault();
  if (this.props.id) {
    this.props.updateList( this.props.id, this.state )
  } else {
    // add the contact to the array of obj
    this.props.add(this.state)
  }
  // clear out the form
  this.setState({ name: "", price: "", })
}


handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, });
}; 

render() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
          fluid 
          label="Grocery Item" 
          placeholder="Grocery Item" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleChange}
        />
        <Form.Input 
          fluid 
          label="Price" 
          placeholder="Price" 
          name="price" 
          value={this.state.phone} 
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form.Group>
    </Form>
  );  
}
}


export default GroceryForm;