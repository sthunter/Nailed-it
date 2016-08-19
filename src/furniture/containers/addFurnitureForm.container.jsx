import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Card, CardTitle, Icon, Button, Input, Row, Col } from 'react-materialize';
import { reduxForm, reset, change as changeFieldValue } from 'redux-form';
import { addFurniture } from '../actions/furniture.action.js';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ColorInput from '../../rooms/components/colorPicker.component.jsx';

class AddFurnitureForm extends Component {
  handleColorPick(color) {

  }

  render() {
    const { fields: {
      itemName, price, description, url, size, color
      }, handleSubmit, } = this.props;
    //console.log('color: ', color);

    return (
      <form onSubmit={ handleSubmit(this.props.addFurniture.bind(null, this.props.roomSelected)) }>
      <Row>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Item'{ ...itemName } />
        </Col>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Price'{ ...price }  type="number" validate />
        </Col>
      </Row>
      <Row>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Notes'{ ...description } />
        </Col>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder='Photo URL'{ ...url } />
        </Col>
      </Row>
      <Row>
        <Col s={6} m={6} l={6}>
        <input s={6} placeholder="Size ( L x W )" { ...size } />
        </Col>
        <Col s={5} m={5} l={5}>
        <input s={1} placeholder="Primary color" { ...color } />
        </Col>
        <ColorInput s={1} action={ colorObj => this.props.changeFieldValue('AddFurnitureForm', 'color', colorObj.hex) } />
      </Row>
     
      <RaisedButton type="submit" label="submit"/>
     </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFurniture, changeFieldValue }, dispatch);
}

export default reduxForm({
  form: 'AddFurnitureForm',
  fields: ['itemName', 'price', 'description', 'url', 'size', 'color'],
}, state => ({ roomSelected: state.roomSelected }), mapDispatchToProps)(AddFurnitureForm);
              
// {...deliveryDate}
// <input s={6} type='file' {...photoURL}><i className="material-icons">add_a_photo</i></input>
 // <Row>
 //        <i className="material-icons">add_a_photo</i>
          
      
 //      </Row>