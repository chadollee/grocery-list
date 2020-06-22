import React from "react";
import { Button, Table, Checkbox } from "semantic-ui-react";

const List = ({ id, checkbox, name, price, remove }) => (
  <Table.Row>
    <Table.Cell>{checkbox}
      <Checkbox/>
    </Table.Cell>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => remove(id)}>
        Delete
      </Button>
    
    </Table.Cell>
  </Table.Row> 
);

export default List;