import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateFurniture } from '../actions/furniture.action';

class UpdateFurnitureFormTable extends Component {
  render() {
    const { roomName, furnitureName, furnitureObj } = this.props.data;
    const { fields: { itemName, price, deliveryDate, size, quantity, description }, handleSubmit } = this.props;
    const boundUpdateFurniture = this.props.updateFurniture.bind(null,
      furnitureName, roomName, furnitureObj
    );

    return (
      <form onSubmit={ handleSubmit(boundUpdateFurniture) } className="table-item tr">
        <span className="td room slimDown"><strong>{ roomName }</strong></span>
        <span className="td furniture slimDown">
          <input type="text" className={ itemName.error ? 'invalid' : 'valid' } { ...itemName }  />
          <div className="edit-view help-text"><span className="form-warning">{ itemName.error }</span></div>
        </span>
        <span className="td price slimDown">
          <input type="text" className={ price.error ? 'invalid' : 'valid' } { ...price }  />
          <div className="edit-view help-text"><span className="form-warning">{ price.error }</span></div>
        </span>
        <span className="td size slimDown">
          <input type="text" className={ price.error ? 'invalid' : 'valid' } { ...size }  />
          <div className="edit-view help-text"><span className="form-warning">{ size.error }</span></div>
        </span>
        <span className="td quantity slimDown">
          <input type="text" className={ quantity.error ? 'invalid' : 'valid' } { ...quantity }  />
          <div className="edit-view help-text"><span className="form-warning">{ quantity.error }</span></div>
        </span>
        <span className="td notes slimDown">
          <input type="text" className={ description.error ? 'invalid' : 'valid' } { ...description }  />
          <div className="edit-view help-text"><span className="form-warning">{ description.error }</span></div>
        </span>
        <span className="td deliveryDate slimDown">
          <input type="text" className={ deliveryDate.error ? 'invalid' : 'valid' } { ...deliveryDate }  />
          <div className="edit-view help-text"><span className="form-warning">{ deliveryDate.error }</span></div>
        </span>
        <span className="td controls slimDown">
          <button className="btn-flat" onClick={ (e) => this.props.controlsClick(e, 'submit') } type="submit">Submit</button>
          <button className="btn-flat" onClick={ (e) => this.props.controlsClick(e, 'cancel') }>Cancel</button>
        </span>
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
