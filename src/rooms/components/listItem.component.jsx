import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-materialize';
import { Link } from 'react-router';
import { removeRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ListItem extends Component {
  handleClick(title) {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  }
  removeRoomCall(title) {
    removeRoom(title);
  }

  render() {

    const title = this.props.title;
    return (
      <Link to={ 'furniture' }>
        <Card
          onClick={ () => this.handleClick(title) }
          className='grey lighten-2'
          title={ title }
          textClassName='black-text'
        >
          <p>
            description
          </p>
          <Row>
            <Col offset='s8' >
              <Button
                onClick={() => {this.removeRoomCall(title)} }
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card>
      </Link>
      );
  }
}

// export default ListItem;
// function mapStateToProps() {
//   return {  };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeRoom }, dispatch);
}

export default connect(null, mapDispatchToProps)(ListItem);
