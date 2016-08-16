import React, { Component } from 'react';
import { CardPanel, Row, Col, MediaBox, Modal} from 'react-materialize';
import Avatar from 'material-ui/Avatar';
import Mailto from 'react-mailto';
import FlatButton from 'material-ui/FlatButton';

class ListItem extends Component {
  handleClick = (title) => {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  };
  getfurniture(room) {
    var furnitures = []
    for (var item in this.props.lists.rooms[room].furniture) {
      if (this.props.lists.rooms[room].furniture.hasOwnProperty(item)) {
        if(this.props.lists.rooms[room].furniture[item].url) {
          furnitures.push(<MediaBox className="MediaBox" src={this.props.lists.rooms[room].furniture[item].url} width='100'/>);
        }
        else {
          furnitures.push(<MediaBox className="MediaBox" src="http://www.iconsdb.com/icons/preview/black/sofa-xxl.png" width='100'/>);
        }
      }
    }
    return (
      <span>{furnitures}</span>
      );
  }

  render() {
    const title = this.props.lists.profile.displayName;
    const lists = this.props.lists
    const listNames = Object.keys(lists.rooms);
    var photoURL;
    if (!this.props.lists.profile.photoURL) {
      photoURL = "https://www.buira.net/assets/images/shared/default-profile.png"
    }
    else {
      photoURL = this.props.lists.profile.photoURL
    }
    Number.prototype.formatMoney = function(c, d, t){
    var n = this, 
        c = isNaN(c = Math.abs(c)) ? 2 : c, 
        d = d == undefined ? "." : d, 
        t = t == undefined ? "," : t, 
        s = n < 0 ? "-" : "", 
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
        j = (j = i.length) > 3 ? j % 3 : 0;
       return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
     };
     var formattedBudget = (lists.budget).formatMoney(2);
    return (
      <div>
        <CardPanel
          className='grey lighten-2 card-panel'
          title={ title } >
          <Row>
            <Col s={.5}>
              <Avatar src={photoURL} />
            </Col>
            <Col s={6}>
            <Row>
              <Mailto email={this.props.lists.profile.email}>
              {this.props.lists.profile.email}
              </Mailto>             
            </Row>
            <Row>
              ${formattedBudget}
            </Row>
            </Col>
          </Row>
          <Row>
            {listNames.map((itemName) => {
              let photoURL;
              if(!lists.rooms[itemName].photoURL) {
                photoURL = "http://cdn.home-designing.com/wp-content/uploads/2010/10/living-room-artificial-light-by-ferdaviola.jpg";
              }
              else {
                photoURL = lists.rooms[itemName].photoURL;
              }
              let cardStyle = {'background':'#e0e0e0'}
              if(lists.rooms[itemName].color) {
                cardStyle = {'background': lists.rooms[itemName].color.hex }
              }
              return (
                <div key={itemName}>
                  <Col s={3}>
                  <Modal
                    style = {cardStyle}
                    header={itemName} 
                    trigger={
                      <MediaBox src={photoURL} caption={itemName} width='100' style={{"cursor": "pointer"}}/>
                    }>
                    <p>
                      {this.getfurniture(itemName)}
                    </p>
                  </Modal>
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
