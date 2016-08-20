import React, { Component } from 'react';
import { CardPanel, Row, Col, Modal} from 'react-materialize';
import Avatar from 'material-ui/Avatar';
import Mailto from 'react-mailto';

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
          furnitures.push(<img key={item} src={this.props.lists.rooms[room].furniture[item].url} width='100'/>);
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
      photoURL = "https://firebasestorage.googleapis.com/v0/b/nailed-it-c1d80.appspot.com/o/images%2FScreen%20Shot%202016-08-10%20at%2010.06.37%20AM.png?alt=media&token=eb6a6ea4-3f04-42e4-99c0-a639aa414792"
    }
    else {
      photoURL = this.props.lists.profile.photoURL
    }
    Number.prototype.formatMoney = function(c, d, t){
    var j,
        n = this, 
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
        <Col s={6}>
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
                          <img src={photoURL} key={itemName} width='100' style={{"cursor": "pointer"}}/>
                        }>
                        <div className="center-align">
                          {this.getfurniture(itemName)}
                        </div>
                      </Modal>
                      <span className='center-align'>{itemName}</span>
                    </Col>
                  </div>
                );
              })}
            </Row>
            <br/>
          </CardPanel>
        </Col>
      </div>
    );
  }
}

export default ListItem;
