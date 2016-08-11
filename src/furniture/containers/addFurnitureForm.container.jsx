import React, { Component } from 'react';
import { Card, CardTitle, Icon, Button, Input, Row, Col } from 'react-materialize';
import { reduxForm, reset } from 'redux-form';
import { addFurniture } from '../actions/furniture.action.js';
import { DatePicker } from 'material-ui/DatePicker';

class AddFurnitureForm extends Component {

  render() {
    const { fields: {
      itemName, price, description, url, size, ETA, photoURL
      }, handleSubmit, } = this.props;
 
    return (
      <form onSubmit={ handleSubmit(this.props.addFurniture.bind(null, this.props.roomSelected)) }>
      <Row>
        <Input s={6} placeholder='Item'{ ...itemName } />
        <Input s={6} placeholder='Price'{ ...price } />
      </Row>
      
        <Input s={6} placeholder='Notes'{ ...description } />
        <Input s={6} placeholder='Photo URL'{ ...url } />
      <Row>
        <Input s={6} placeholder="Size" {...size} />
        <Input s={6} placeholder="ETA" {...ETA} />
      </Row>
     
      <Button small type="submit">Submit</Button>
     </form>
    );
  }
}

export default reduxForm({
  form: 'AddFurnitureForm',
  fields: ['itemName', 'price', 'description', 'url', 'size', 'ETA', 'photoURL', 'roomSelected'],
}, state => ({ roomSelected: state.roomSelected }), { addFurniture })(AddFurnitureForm);
              
// {...deliveryDate}
// <input s={6} type='file' {...photoURL}><i className="material-icons">add_a_photo</i></input>
 // <Row>
 //        <i className="material-icons">add_a_photo</i>
          
      
 //      </Row>