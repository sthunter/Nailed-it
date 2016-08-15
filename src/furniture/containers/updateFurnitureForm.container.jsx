import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateFurniture } from '../actions/furniture.action';
//import { Table, Input } from 'react-materialize';

class UpdateFurnitureForm extends Component {
  render() {
    const { fields: { itemName, price, deliveryDate, size, description }, handleSubmit } = this.props;
    const currentFurnitureObj = this.props.rooms[this.props.roomSelected].furniture[this.props.name];
    const boundUpdateFurniture = this.props.updateFurniture.bind(null,
      this.props.name, this.props.roomSelected, currentFurnitureObj
    );

    return (
      <form onSubmit={ handleSubmit(boundUpdateFurniture) }>
        <table className="furniture-detail">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td><input type="text" { ...itemName }  /></td>
              <td><input type="text" { ...price }  /></td>
            </tr>
            <tr>
              <th>Delivery</th>
              <th>Size</th>
            </tr>
            <tr>
              <td><input type="text" { ...deliveryDate }  /></td>
              <td><input type="text" { ...size }  /></td>
            </tr>
            <tr>
              <th>Notes</th>
            </tr>
            <tr>
              <td colSpan="3"><textarea { ...description }  /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit" disabled={this.props.pristine}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ roomSelected, rooms }) => ({ roomSelected, rooms });

function validate(values) {
  const errors = {};

  if (!values.itemName.trim()) {
    errors.itemName = 'The item must have a name.'
  }

  return errors;
}

export default reduxForm({
  form: 'UpdateFurnitureForm',
  fields: ['itemName', 'price', 'deliveryDate', 'size', 'description'],
  validate,
}, mapStateToProps, { updateFurniture })(UpdateFurnitureForm);