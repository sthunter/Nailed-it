import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Table, Input } from 'react-materialize';

class UpdateFurnitureForm extends Component {
  render() {
    const { fields: { itemName } } = this.props;
    const name = this.props.name;

    return (
      <Table className="furniture-detail">
        <tbody>
          <tr>
            <th>Name</th><td><Input type="text" { ...itemName } defaultValue={ name } /></td>
            <th>Price</th><td>{ this.props.details.price }</td>
          </tr>
          <tr>
            <th>Delivery</th><td>{ this.props.details.deliveryDate }</td>
            <th>Size</th><td>{ this.props.details.size }</td>
          </tr>
          <tr>
            <th>Notes</th><td colSpan="3">{ this.props.details.description }</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default reduxForm({
  form: 'UpdateFurnitureForm',
  fields: ['itemName'],
}, null, {})(UpdateFurnitureForm);