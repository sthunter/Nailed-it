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
      <Col s={12} l={3}>
        <Card
          style={{'background':'(255, 255, 255, 0.3)'}} 
          className='card-panel hoverable' header={<CardTitle reveal image={"http://cdn.onlinewebfonts.com/svg/img_193500.svg"} waves='light'/>}
          title={<i className="medium material-icons center-align">add</i>}
          reveal={
            <form onSubmit={ handleSubmit(this.props.addFurniture.bind(null, this.props.roomSelected)) }>
           
              <Input s={6} placeholder='Item'{ ...itemName } />
              <Input s={6} placeholder='Price'{ ...price } />
            
            
              <Input s={6} placeholder='Description'{ ...description } />
              <Input s={6} placeholder='URL'{ ...url } />
              <Input s={6} placeholder="Size" {...size} />
              <Input s={6} placeholder="ETA" {...ETA} />
            
            <Row>
              <i className="material-icons">add_a_photo</i>
                
            
            </Row>
            <Button small type="submit">Submit</Button>
           </form>
          }>
        </Card>
      </Col>
    );
  }
}

export default reduxForm({
  form: 'AddFurnitureForm',
  fields: ['itemName', 'price', 'description', 'url', 'size', 'ETA', 'photoURL', 'roomSelected'],
}, state => ({ roomSelected: state.roomSelected }), { addFurniture })(AddFurnitureForm);
              
// {...deliveryDate}
// <input s={6} type='file' {...photoURL}><i className="material-icons">add_a_photo</i></input>
