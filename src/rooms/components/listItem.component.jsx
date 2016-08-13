import React, { Component } from 'react';
import { CardPanel, Button, Row, Col, MediaBox, Modal } from 'react-materialize';
import { Link, browserHistory } from 'react-router';
import Toolbar from './toolbar.component'
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
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
                subtitle="Subtitle"
              />
            </Link>
            <CardActions>
              <Toolbar title={ title } /> 
              <RaisedButton fullWidth={true} label="Notes" onTouchTap={ () => this.handleToggle()} />
            </CardActions>
            { this.props.rooms[title].photoURL? <CardMedia
              expandable={true}
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src= {this.props.rooms[title].photoURL }/>
            </CardMedia> : null}
            <CardText expandable={true}>
              <p>Size: {size} </p>
              <p>Notes: </p>
              {splitNotes.map((note)=> {
                return (
                  <p>{ note }</p>
                )
              }
              )}

            </CardText>
          </Card>
        </div>
      );
  }
}

export default ListItem;
// <CardPanel
//   onTouchTap={ () => this.handleClick(title) }
//   className={'hoverable'}
//   style={cardStyle}>

//   <Link className="card-title" to={ 'furniture/' + title }>
//     <Row onTouchTap={ () => this.handleClick(title) }>
//       <Col s={9}>
//         <span>{ title }</span>
//         <p style={{fontSize: '16px'}}>Size : { size }</p>
//         {splitNotes.map((note)=> {
//           return (
//             <p style={{fontSize: '16px'}}>{ note }</p>
//             )
//         })}
//       </Col>
//       <Col s={3}>
//         {this.props.rooms[title].photoURL ? <div className="valign-wrapper"><MediaBox key={title} className="valign right-align" src={this.props.rooms[title].photoURL} width='100'/></div> : null}
//       </Col>
//     </Row>
//   </Link>
//   <Toolbar title={ title } />
// </CardPanel>
