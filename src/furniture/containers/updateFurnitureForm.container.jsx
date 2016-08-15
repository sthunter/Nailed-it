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
              <th>Name</th><td><input type="text" { ...itemName }  /></td>
              <th>Price</th><td><input type="text" { ...price }  /></td>
            </tr>
            <tr>
              <th>Delivery</th><td><input type="text" { ...deliveryDate }  /></td>
              <th>Size</th><td><input type="text" { ...size }  /></td>
            </tr>
            <tr>
              <th>Notes</th><td colSpan="3"><textarea { ...description }  /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit" disabled={this.props.pristine}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ roomSelected, rooms }) => ({ roomSelected, rooms });

export default reduxForm({
  form: 'UpdateFurnitureForm',
  fields: ['itemName', 'price', 'deliveryDate', 'size', 'description'],
}, mapStateToProps, { updateFurniture })(UpdateFurnitureForm);