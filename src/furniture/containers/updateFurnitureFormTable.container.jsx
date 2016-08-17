import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateFurniture } from '../actions/furniture.action';

class UpdateFurnitureFormTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      editing: false,
    };
  };

  controlsClick(e, type) {
    if (type === 'edit') {
      e.preventDefault();
      this.setState({ editing: true });
      console.log('now editing? ', this.state.editing);
    } else if (type === 'cancel') {
      e.preventDefault();
      // todo: reset form to initial values
      this.setState({editing: false});
    } else if (type === 'submit') {
      e.preventDefault(); // todo: remove this once I know the data looks right
      this.setState({ editing: false });
    }
  }
  
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
          <div className={ this.state.editing ? 'hide' : '' }>{ furnitureName }</div>
          <input type="text" className={ `${this.state.editing ? '' : 'hide' } ${itemName.error ? 'invalid' : 'valid' }` } { ...itemName }  />
          <div className="edit-view help-text"><span className="form-warning">{ itemName.error }</span></div>
        </span>
        <span className="td price slimDown">
          <div className={ this.state.editing ? 'hide' : '' }>{ furnitureObj.price }</div>
          <input type="text" className={ `${this.state.editing ? '' : 'hide' } ${price.error ? 'invalid' : 'valid' }` } { ...price }  />
          <div className="edit-view help-text"><span className="form-warning">{ price.error }</span></div>
        </span>
        <span className="td size slimDown">
          <div className={ this.state.editing ? 'hide' : '' }>{ furnitureObj.size }</div>
          <input type="text" className={ `${this.state.editing ? '' : 'hide' } ${size.error ? 'invalid' : 'valid' }` } { ...size }  />
          <div className="edit-view help-text"><span className="form-warning">{ size.error }</span></div>
        </span>
        <span className="td quantity slimDown">
          <div className={ this.state.editing ? 'hide' : '' }>{ furnitureObj.quantity }</div>
          <input type="text" className={ `${this.state.editing ? '' : 'hide' } ${quantity.error ? 'invalid' : 'valid' }` } { ...quantity }  />
          <div className="edit-view help-text"><span className="form-warning">{ quantity.error }</span></div>
        </span>
        <span className="td notes slimDown">
          <div className={ this.state.editing ? 'hide' : '' }>{ furnitureObj.notes }</div>
          <input type="text" className={ `${this.state.editing ? '' : 'hide' } ${description.error ? 'invalid' : 'valid' }` } { ...description }  />
          <div className="edit-view help-text"><span className="form-warning">{ description.error }</span></div>
        </span>
        <span className="td deliveryDate slimDown">
          <div className={ this.state.editing ? 'hide' : '' }>{ furnitureObj.deliveryDate }</div>
          <input type="text" className={ `${this.state.editing ? '' : 'hide' } ${deliveryDate.error ? 'invalid' : 'valid' }` } { ...deliveryDate }  />
          <div className="edit-view help-text"><span className="form-warning">{ deliveryDate.error }</span></div>
        </span>
        <span className="td controls slimDown">
          <button className={ `${this.state.editing ? 'hide' : ''} btn-flat` } onClick={ (e) => this.controlsClick(e, 'edit') }>Edit</button>
          <button className={ `${this.state.editing ? '' : 'hide'} btn-flat` } onClick={ (e) => this.controlsClick(e, 'submit') } type="submit">Submit</button>
          <button className={ `${this.state.editing ? '' : 'hide'} btn-flat` } onClick={ (e) => this.controlsClick(e, 'cancel') }>Cancel</button>
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
