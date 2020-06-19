import React from 'react';
import { Button, Table } from "semantic-ui-react";
import List from './List';

const Lists = ({ lists }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        lists.map( list => (
          <List key={list.id} {...list} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Lists;