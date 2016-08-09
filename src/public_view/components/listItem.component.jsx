import React, { Component } from 'react';
import { CardPanel, Row, Col, MediaBox} from 'react-materialize';
import { Link } from 'react-router';
import Mailto from 'react-mailto';


class ListItem extends Component {
  handleClick = (title) => {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  }
  getfurniture(rooms) {
    this.props.lists.rooms.forEach(function(room) {
      room.furniture.forEach(function(itemName) {
        return (
          <div key={itemName}>
            <Col s={1}>
              <MediaBox src={itemName.url} caption={itemName} width='25'/>
              <span className='center-align'>{itemName}</span>
            </Col>
          </div>
        )
      })
    })
  }

  render() {
    console.log(this.props);
    // this.props.clickHandler('the other ballpit');
    //  onClick={}
    const title = this.props.lists.profile.displayName;
    const lists = this.props.lists
    const listNames = Object.keys(lists.rooms);
    var photoURL;
    if (this.props.lists.profile.photoURL === "null") {
      photoURL = "https://www.buira.net/assets/images/shared/default-profile.png"
    }
    else {
      photoURL = this.props.lists.profile.photoURL
    }

    return (
      <div>
        <CardPanel
          className='grey lighten-2 card-panel hoverable'
          title={ title }
          style={{'color':'black'}}
        >
          <Row>
            <Col s={6}>
              <MediaBox src={photoURL} width='25'/>
              <span onClick={() => {this.handleClick(title)}} style={{'fontWeight':'bold'}}>{title}</span>
              <span> <Mailto email={this.props.lists.profile.email} obfuscate={true}>
                Contact me!
              </Mailto></span>
            </Col>
            <Col s={6}>
              <span>Budget: ${lists.budget}</span>

            </Col>
          </Row>
          <Row>
            {listNames.map((itemName) => {
              if(!lists.rooms[itemName].photoURL) {
                var photoURL = "http://cdn.home-designing.com/wp-content/uploads/2010/10/living-room-artificial-light-by-ferdaviola.jpg";
              }
              else {
                var photoURL = lists.rooms[itemName].photoURL.url;
              }
              return (
                <div key={itemName}>
                  <Col s={3}>
                    <MediaBox src={photoURL} caption={itemName} width='100'/>
                    <span className='center-align'>{itemName}</span>
                  </Col>
                </div>
              );
            })}
          </Row>
        </CardPanel>
      </div>
    );
  }
}

export default ListItem;
