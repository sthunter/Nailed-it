import React, { Component } from 'react';
import { Button, Input, Col, Row } from 'react-materialize';
import { reduxForm, reset } from 'redux-form';
import { addRoom } from '../actions/rooms.action.js';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class AddRoomForm extends Component {
  state = {
    expanded:false
  }

  handleToggle = () => {
    if (this.state.expanded) {
      this.setState({expanded: false});
    }
    else {
      this.setState({expanded: true});
    }
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  }

  addRoom(newRoomObj) {
    
    const {addRoom, dispatch} = this.props;
    addRoom(newRoomObj);
    dispatch(reset('AddRoomForm'));
  }

  render() {
    const { fields: { roomName, size, notes }, handleSubmit } = this.props;

    return (
     <Card
      style={{'background':'#e0e0e0'}}
     >
        <CardHeader
            showExpandableButton={false}
        />

        <CardActions actAsExpander={true}>
          <RaisedButton  fullWidth={true} label="Add a Room" onTouchTap={ () => this.handleToggle()} style={{'opacity':'0.4'}}/>
        </CardActions>

        <CardText expandable={true}>
           <form onSubmit={ handleSubmit(this.addRoom.bind(this)) } >
            <Col s={12}>
              <Row>
                <Input type="text" placeholder="Room Name" s={6} label="Room Name" { ...roomName } />
                <Input type="text" placeholder="Size" s={6} label="Size" { ...size } />
              </Row>
              <Row>
                <div class="input-field col s12">
                  <label for="textarea1">Notes</label>
                  <textarea id="textarea1" className="materialize-textarea" placeholder="Notes" { ...notes }></textarea>
                </div>
              </Row>
            </Col>
            <Button type="submit">Submit</Button>
          </form>
        </CardText>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'AddRoomForm',
  fields: ['roomName', 'size', 'notes'],
}, null, { addRoom })(AddRoomForm);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(null, dispatch);
}


    