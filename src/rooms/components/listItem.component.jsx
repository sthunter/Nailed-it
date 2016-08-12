import React, { Component } from 'react';
import { CardPanel, Button, Row, Col, MediaBox } from 'react-materialize';
import { Link, browserHistory } from 'react-router';
import Toolbar from './toolbar.component'




class ListItem extends Component {

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
          <Toolbar title={ title } />
        </CardPanel>
      );
  }
}

export default ListItem;
