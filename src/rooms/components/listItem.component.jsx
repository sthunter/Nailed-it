import React, { Component } from 'react';
import { Link } from 'react-router';
import Toolbar from './toolbar.component';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import UpdateRoomForm from '../containers/updateRoomForm.container'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      update: false
    }
  }
  componentWillReceiveProps(props) {
    this.setState({expanded: false});
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
    const { title, rooms } = this.props;
    const size = rooms[title].size || 'no size';
    const notes = rooms[title].notes || 'no notes';
    var cardStyle = {'background':'#e0e0e0'}
    if(this.props.rooms[title].color) {
      cardStyle = {'background': this.props.rooms[title].color.hex }
    }
    const photoURL = rooms[title].photoURL
    const initialValues = {
      size: size,
      notes: notes,
      photoURL: photoURL
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
                title={ title }
                className="roomListItemHeader"
                titleStyle={{"fontSize":"28px"}}
              />
            </Link>

            <CardActions>
              <Toolbar title={ title } />
              <RaisedButton fullWidth={true} label="Details" onTouchTap={ () => this.handleToggle()} style={{'opacity':'0.4'}}/>
            </CardActions>

            { photoURL ? <CardMedia
              expandable={true}
              overlay={<CardTitle title={title} subtitle="" />}
              >
              <img src={ photoURL }/>
            </CardMedia> : null}
            
            <CardText expandable={true} className="updateRoom">
              <UpdateRoomForm title={title} formKey={title} initialValues={ initialValues } />
            </CardText>
          </Card>
        </div>
      );
  }
}

export default ListItem;
