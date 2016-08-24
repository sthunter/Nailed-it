import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateFurniture } from '../actions/furniture.action';

const UpdateFurnitureFormTable = props => {
  const { roomName, furnitureName, furnitureObj } = props.data;
  const { fields: { itemName, price, size, color }, handleSubmit } = props;
  const boundProps = {
    furnitureName,
    roomName,
    furnitureObj,
    controlsClick: props.controlsClick,
  };
  const boundUpdateFurniture = props.updateFurniture.bind(null,
    boundProps, null, null
  );

  return (
    <form onSubmit={ handleSubmit(boundUpdateFurniture) } className={ `table-item tr ${props.invalid ? 'row-has-error' : ''}` }>
      <span className="td room slimDown"><strong>{ roomName }</strong></span>
      <span className="td furniture slimDown">
        <div className="edit-view help-text"><span className="form-warning">{ (itemName.error) }</span></div>
        <input type="text" className={ (itemName.error) ? 'invalid' : 'valid' } { ...itemName }  />
      </span>
      <span className="td price slimDown">
        <div className="edit-view help-text"><span className="form-warning">{ price.error }</span></div>
        <input type="text" className={ price.error ? 'invalid' : 'valid' } { ...price }  />
      </span>
      <span className="td size slimDown">
        <div className="edit-view help-text"><span className="form-warning">{ size.error }</span></div>
        <input type="text" className={ size.error ? 'invalid' : 'valid' } { ...size }  />
      </span>
      <span className="td color slimDown">
        <div className="edit-view help-text"><span className="form-warning">{ color.error }</span></div>
        <input type="text" className={ color.error ? 'invalid' : 'valid' } { ...color }  />
      </span>
      <span className="td controls slimDown">
        <button className="btn-flat" type="submit">Submit</button>
        <button className="btn-flat" type="reset" onClick={ (e) => props.controlsClick(e, 'cancel') }>Cancel</button>
      </span>
    </form>
  );
};

function validate(values) {
  const errors = {};

  if (!values.itemName) {
    errors.itemName = 'The item must have a name.'
  }

<<<<<<< cee7153d9f8bc91f165de468c38d11744cada613
  if (values.price && values.price.match(/\D/)) {
    errors.price = 'Numbers only.';
||||||| merged common ancestors
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
        <span className="td color slimDown">
          <input type="text" className={ price.error ? 'invalid' : 'valid' } { ...color }  />
          <div className="edit-view help-text"><span className="form-warning">{ color.error }</span></div>
        </span>
        <span className="td controls slimDown">
          <button className="btn-flat" type="submit">Submit</button>
          <button className="btn-flat" type="reset" onClick={ (e) => this.props.controlsClick(e, 'cancel') }>Cancel</button>
        </span>
      </form>
    );
=======
    return (
      <tr>
        <form onSubmit={ handleSubmit(boundUpdateFurniture) } >
          <td><strong>{ roomName }</strong></td>
          <td>
            <input type="text" className={ itemName.error ? 'invalid' : 'valid' } { ...itemName }  />
            <div className="edit-view help-text"><span className="form-warning">{ itemName.error }</span></div>
          </td>
          <td>
            <input type="text" className={ price.error ? 'invalid' : 'valid' } { ...price }  />
            <div className="edit-view help-text"><span className="form-warning">{ price.error }</span></div>
          </td>
          <td>
            <input type="text" className={ price.error ? 'invalid' : 'valid' } { ...size }  />
            <div className="edit-view help-text"><span className="form-warning">{ size.error }</span></div>
          </td>
          <td >
            <input type="text" className={ price.error ? 'invalid' : 'valid' } { ...color }  />
            <div className="edit-view help-text"><span className="form-warning">{ color.error }</span></div>
          </td>
          <td >
            <button className="btn-flat" type="submit">Submit</button>
            <button className="btn-flat" type="reset" onClick={ (e) => this.props.controlsClick(e, 'cancel') }>Cancel</button>
          </td>
        </form>
      </tr>
    );
>>>>>>> style(wip): change table in progress
  }

  return errors;
}

export default reduxForm({
  form: 'UpdateFurnitureFormTable',
  fields: ['itemName', 'price', 'size', 'color'],
  validate,
}, null, { updateFurniture })(UpdateFurnitureFormTable);
