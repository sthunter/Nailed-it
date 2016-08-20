import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-materialize';
import { reduxForm, change as changeFieldValue } from 'redux-form';
import { addFurniture } from '../actions/furniture.action.js';
import RaisedButton from 'material-ui/RaisedButton';
import ColorInput from '../../rooms/components/colorPicker.component.jsx';

class AddFurnitureForm extends Component {

  render() {
    const { fields: {
      itemName, price, description, url, size, color
      }, handleSubmit, } = this.props;
    

    return (
      <form onSubmit={ handleSubmit(this.props.addFurniture.bind(null, this.props.roomSelected)) }>
      <Row>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Item'{ ...itemName } className={ (itemName.touched && itemName.error) ? 'invalid' : 'valid'}/>
        </Col>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Price'{ ...price } className={ price.error ? 'invalid' : 'valid'}/>
        </Col>
      </Row>
      <Row>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Notes'{ ...description } className={ description.error ? 'invalid' : 'valid'}/>
        </Col>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Photo URL'{ ...url } />
        </Col>
      </Row>
      <Row>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder="Size ( L x W )" { ...size } className={ size.error ? 'invalid' : 'valid'}/>
        </Col>
        <Col s={5} m={5} l={5}>
        <input s={1} placeholder="Primary color" { ...color } className={ color.error ? 'invalid' : 'valid'}/>
        </Col>
        <ColorInput s={1} action={ colorObj => this.props.changeFieldValue('AddFurnitureForm', 'color', colorObj.hex) } />
      </Row>
     
      <RaisedButton type="submit" label="submit"/>
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
    errors.price = 'The price must only contain numbers.';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFurniture, changeFieldValue }, dispatch);
}

export default reduxForm({
  form: 'AddFurnitureForm',
  fields: ['itemName', 'price', 'description', 'url', 'size', 'color'], validate,
}, state => ({ roomSelected: state.roomSelected }), mapDispatchToProps)(AddFurnitureForm);
