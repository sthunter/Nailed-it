import React, { Component } from 'react';
import { CardPanel, Button, Row, Col, MediaBox, Modal, Input } from 'react-materialize';
import { Link, browserHistory } from 'react-router';
import Toolbar from './toolbar.component'
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import UpdateRoomForm from '../containers/updateRoomForm.container'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      update: false
    }
  }
  handleToggle() {
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

  handleClick(title) {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  }
  
  //state change to handle update form
  handleChange() {
    if (this.state.expanded) {
      this.setState({update: false});
    }
    else {
      this.setState({update: true});
    }
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

    const { title, rooms } = this.props;
    const size = rooms[title].size || 'no size';
    const notes = rooms[title].notes || 'no notes';
    const splitNotes = notes.split('\n')
    var cardStyle = {'background':'#e0e0e0'}
    if(this.props.rooms[title].color) {
      cardStyle = {'background': this.props.rooms[title].color.hex }
    }
    const initialFormValues = {
      price: rooms[title].size,
      notes: notes
    }


    return (
        <div>
    
          <Card 
            expanded={this.state.expanded} onExpandChange={this.handleExpandChange}
            style={cardStyle}
            >

            <Link className="card-title" to={ 'furniture/' + title }>
              <CardHeader
                onTouchTap={ () => this.handleClick(title) }
                title= { title }
                subtitle=""
              />
            </Link>

            <CardActions>
              <Toolbar title={ title } handleToggle={this.handleToggle} /> 
              <RaisedButton fullWidth={true} label="Details" onTouchTap={ () => this.handleToggle()} style={{'opacity':'0.4'}}/>
            </CardActions>

            { this.props.rooms[title].photoURL? <CardMedia
              expandable={true}
              overlay={<CardTitle title={title} subtitle="" />}
              >
              <img src= {this.props.rooms[title].photoURL }/>
            </CardMedia> : null}
            
            <CardText expandable={true} className="updateRoom">
              <UpdateRoomForm title={title} formKey={title} initialFormValues={ initialFormValues }/>
            </CardText>
          </Card>
        </div>
      );
  }
}

export default ListItem;
