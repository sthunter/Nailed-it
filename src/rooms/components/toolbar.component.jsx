import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeRoom, addPhoto } from '../actions/rooms.action';
import { Row, Col, Modal, Button} from 'react-materialize';
import { Link, browserHistory } from 'react-router';
import Dropzone from 'react-dropzone';
import ColorInput from './colorPicker.component';
//import Designer from '../../room_designer/components/drawingTool.component'
import Designing from '../../designer/drawingtool/components/Mondrian'
//import Designer from '../../designer/drawingtool/App'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Toolbar extends Component {
  state = {
    displayColorPicker: false,
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleColorClick () {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }
  onDrop(files, title) {
    this.props.addPhoto(files, title);
  }
  removeRoomCall(title) {
    this.props.removeRoom(title);
    Materialize.toast(title + ' removed', 4000)
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const { title } = this.props;
    return (
      <Row>
        <Col l={6}>
            <div className='card-control' hoverable>
              <Dropzone style={{'width': '24px', 'height': '24px', 'border': '0px'}} onDrop={files => this.onDrop(files, title)}>
                <i className="card-controls material-icons md-dark">add_a_photo</i>
              </Dropzone>
            </div>
            <div className='card-control' hoverable><i className="card-controls material-icons md-dark">create</i></div>
            <div className='card-control' hoverable><i className="card-controls material-icons md-dark" onClick={() => {this.removeRoomCall(title)}}>delete_sweep</i></div>
            <Link to={ 'designer/' + title }> 
              <div className='card-control' hoverable><i className="card-controls material-icons md-dark" >gesture</i></div>
            </Link>
            <ColorInput />
            <div>
              <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
              <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
              >
                <Row><Col s={12}><Designing /></Col></Row>
              </Dialog>
            </div>
        </Col>
      </Row>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return   bindActionCreators({ removeRoom, addPhoto }, dispatch);
}

function mapStateToProps({ rooms, roomSelected, shared, route }) {
  return { rooms, roomSelected };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
