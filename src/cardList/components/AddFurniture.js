import React,{ Component } from 'react';
import {Button, Input, Col, Row} from 'react-materialize';
import DatePicker from 'material-ui/DatePicker';
import { reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class AddFurniture extends Component {
  render() {
    console.log('[AddFurniture form] roomSelected: ', this.props.roomSelected);

    return (
      <div>
        <Row>
          <Input s={6} placeholder='Item'/><Input s={6} placeholder='Price'/>
        </Row>
        <Row>
          <Input s={6} placeholder='Description'/><Input s={6} placeholder='URL'/>
        </Row>
        <Row>
          <Input s={6} placeholder='Delivery Date' label='Date' />
        </Row>
        </div>
      )
  }
}

function mapStateToProps({ roomSelected }) {
  return { roomSelected };
}

export default connect(mapStateToProps)(AddFurniture);
