import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateFurniture } from '../actions/furniture.action';
import { Card, CardTitle, Row, Col, Input} from 'react-materialize';

class UpdateFurnitureFormTable extends Component {
  render() {
    const { roomName, furnitureName, furnitureObj } = this.props.data;
    const { fields: { itemName, price, deliveryDate, size, quantity, description }, handleSubmit } = this.props;
    const boundUpdateFurniture = this.props.updateFurniture.bind(null,
      furnitureName, roomName, furnitureObj
    );
    let editing = false;

    return (
      <form onSubmit={ handleSubmit(boundUpdateFurniture) }>
        <tr>
          <td className="slimDown"><strong>{ roomName }</strong></td>
          <td className="slimDown">
            <div className={ editing ? 'hide' : '' }>{ furnitureName }</div>
            <div className={ editing ? '' : 'hide' }></div>
          </td>
          <td className="slimDown">
            <div className={ editing ? 'hide' : '' }>{  }</div>
            <input type="text" className={ `${editing ? '' : 'hide' } ${itemName.error ? 'invalid' : 'valid' }` } { ...itemName }  />
            <div className="edit-view help-text"><span className="form-warning">{ itemName.error }</span></div>
          </td>
          <td className="slimDown">
            <div className={ editing ? 'hide' : '' }>{ furnitureObj.price }</div>
            <input type="text" className={ `${editing ? '' : 'hide' } ${price.error ? 'invalid' : 'valid' }` } { ...price }  />
            <div className="edit-view help-text"><span className="form-warning">{ price.error }</span></div>
          </td>
          <td className="slimDown">
            <div className={ editing ? 'hide' : '' }>{ furnitureObj.size }</div>
            <input type="text" className={ `${editing ? '' : 'hide' } ${size.error ? 'invalid' : 'valid' }` } { ...size }  />
            <div className="edit-view help-text"><span className="form-warning">{ size.error }</span></div>
          </td>
          <td className="slimDown">
            <div className={ editing ? 'hide' : '' }>{ furnitureObj.quantity }</div>
            <input type="text" className={ `${editing ? '' : 'hide' } ${quantity.error ? 'invalid' : 'valid' }` } { ...quantity }  />
            <div className="edit-view help-text"><span className="form-warning">{ quantity.error }</span></div>
          </td>
          <td className="slimDown">
            <div className={ editing ? 'hide' : '' }>{ furnitureObj.notes }</div>
            <input type="text" className={ `${editing ? '' : 'hide' } ${description.error ? 'invalid' : 'valid' }` } { ...description }  />
            <div className="edit-view help-text"><span className="form-warning">{ description.error }</span></div>
          </td>
          <td className="slimDown">
            <div className={ editing ? 'hide' : '' }>{ furnitureObj.deliveryDate }</div>
            <input type="text" className={ `${editing ? '' : 'hide' } ${deliveryDate.error ? 'invalid' : 'valid' }` } { ...deliveryDate }  />
            <div className="edit-view help-text"><span className="form-warning">{ deliveryDate.error }</span></div>
          </td>
        </tr>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  return errors;
}

export default reduxForm({
  form: 'UpdateFurnitureFormTable',
  fields: ['itemName', 'price', 'deliveryDate', 'size', 'quantity', 'description'],
}, null, { updateFurniture })(UpdateFurnitureFormTable);
