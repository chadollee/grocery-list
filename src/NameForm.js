import React from "react";
import List from "./components/lists/List";
import { Form, } from "semantic-ui-react";

class GroceryForm extends React.Component {
  state = { name: "",};

handleSubmit = (e) => {
  e.preventDefault();
  if (this.props.id) {
    this.props.updateName( this.props.id, this.state )
  } else {
    this.props.add(this.state)
  }
  this.setState({ name: "", })
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
          label="Grocery Store Name" 
          placeholder={this.state.name}
          name="name" 
          value={this.state.name} 
          onChange={this.handleChange}
        />
        <Form.Button>Edit</Form.Button>
      </Form.Group>
    </Form>
  );  
}
}


export default NameForm;