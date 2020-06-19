import React from "react";
import { Button, Table, } from "semantic-ui-react";

const List = ({ name, price }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell>
      <Button color="red">
        Delete
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default List;