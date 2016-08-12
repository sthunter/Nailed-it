import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeRoom, addPhoto } from '../actions/rooms.action';
import { Row, Col} from 'react-materialize';
import { Link, browserHistory } from 'react-router';
import Dropzone from 'react-dropzone';
import ColorInput from './colorPicker.component';

class Toolbar extends Component {
  state = {
    displayColorPicker: false,
  }

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