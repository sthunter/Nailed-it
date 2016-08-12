import React, { Component } from 'react';
import { CardPanel, Button, Row, Col, MediaBox } from 'react-materialize';
import { Link, browserHistory } from 'react-router';
import { removeRoom, addPhoto, selectRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import ColorInput from './colorPicker.component';


class ListItem extends Component {

  handleClick(title) {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  }
  removeRoomCall(title) {
    this.props.removeRoom(title);
    Materialize.toast(title + ' removed', 4000)
  }

  state = {
    displayColorPicker: false,
  }

  handleColorClick () {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  onDrop(files, title) {
    this.props.addPhoto(files, title);
  }

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    }

    const title = this.props.title;
    var cardStyle = {'background':'#e0e0e0'}
    if(this.props.rooms[title].color) {
      cardStyle = {'background': this.props.rooms[title].color.hex }
    }

    return (
    
        <CardPanel
          onTouchTap={ () => this.handleClick(title) }
          className={'hoverable'}
          style={cardStyle}>

          <Link className="card-title" to={ 'furniture/' + title }>
            <Row onTouchTap={ () => this.handleClick(title) }>
              <Col s={9}>
                  <span>{title}</span>
              </Col>
              <Col s={3}>
                {this.props.rooms[title].photoURL ? <div className="valign-wrapper"><MediaBox key={title} className="valign right-align" src={this.props.rooms[title].photoURL} width='100'/></div> : null}
              </Col>
            </Row>
          </Link>
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
        </CardPanel>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return   bindActionCreators({ removeRoom, addPhoto }, dispatch);
}

function mapStateToProps({ rooms, roomSelected, shared, route }) {
  return { rooms, roomSelected, shared, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
