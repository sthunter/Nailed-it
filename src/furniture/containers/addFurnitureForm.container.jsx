import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'react-materialize';
import { reduxForm } from 'redux-form';
import { addFurniture } from '../actions/furniture.action.js';
import { DatePicker } from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';

class AddFurnitureForm extends Component {
  componentWillMount(){
    injectTapEventPlugin();
  }
  
  render() {
    const { fields: {
      itemName, price, description, url, deliveryDate,
      }, handleSubmit, } = this.props;

        
    return (
      <Col s={12} l={6}>
        <form onSubmit={ handleSubmit(this.props.addFurniture.bind(null, this.props.roomSelected)) }>
          <Row>
            <Input s={6} placeholder='Item'{ ...itemName } />
            <Input s={6} placeholder='Price'{ ...price } />
          </Row>
          <Row>
            <Input s={6} placeholder='Description'{ ...description } />
            <Input s={6} placeholder='URL'{ ...url } />
          </Row>
          <Row>
            <Col s={6}>
              <input type='date' className='datepicker'{...deliveryDate} />
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </form>
      </Col>
    );
  }
}

export default reduxForm({
  form: 'AddFurnitureForm',
  fields: ['itemName', 'price', 'description', 'url', 'deliveryDate', 'roomSelected'],
}, state => ({ roomSelected: state.roomSelected }), { addFurniture })(AddFurnitureForm);
              

