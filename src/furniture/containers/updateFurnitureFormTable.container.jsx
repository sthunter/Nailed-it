import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateFurniture } from '../actions/furniture.action';

class UpdateFurnitureFormTable extends Component {
  handleClick(e, type) {
    // Todo: Should I refactor this function some? It isn't doing a lot.
    e.preventDefault(); // Prevent the page from reloading due to form being submitted

    if (type === 'cancel') {
      this.props.controlsClick(e, 'cancel');
    } else {
      this.props.controlsClick(e, 'submit');
    }
  }

  render() {
    const { roomName, furnitureName, furnitureObj } = this.props.data;
    const { fields: { itemName, price, size, color }, handleSubmit } = this.props;
    const boundProps = {
      furnitureName,
      roomName,
      furnitureObj,
      controlsClick: this.props.controlsClick,
    };
    const boundUpdateFurniture = this.props.updateFurniture.bind(null,
      boundProps, null, null
    );

    return (
      <form onSubmit={ handleSubmit(boundUpdateFurniture) } className={ `table-item tr ${this.props.invalid ? 'row-has-error' : ''}` }>
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
          <button className="btn-flat" type="reset" onClick={ (e) => this.props.controlsClick(e, 'cancel') }>Cancel</button>
        </span>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.itemName) {
    errors.itemName = 'The item must have a name.'
  }

  if (values.price && values.price.match(/\D/)) {
    errors.price = 'Numbers only.';
  }

  return errors;
}

export default reduxForm({
  form: 'UpdateFurnitureFormTable',
  fields: ['itemName', 'price', 'size', 'color'],
  validate,
}, null, { updateFurniture })(UpdateFurnitureFormTable);
