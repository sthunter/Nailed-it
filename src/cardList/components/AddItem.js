import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-materialize';
import './cardList.css';
import AddRoom from './AddRoom';

class AddItem extends Component {
  state = {
    form: 'room'
  }

  render() {


    // handleSubmit = () => {}
    const store = this.props.store
    //this.props.header
    const header="Add a Room";
    // const onClick = 
    const actions = [<Button waves='light' modal='close' flat >Submit</Button>, <Button waves='light' modal='close' flat>Close</Button>]
    
    const _form = <AddRoom store={ store } />
    return (
      <Card className="blue-grey lighten-1 center-align">

        <Modal
          header={header}
          actions={actions}
          trigger={
            <Button floating large
              centered="true"
              className="grey"
              waves="light"
              icon="add"
            />
          }
        >
          <div>
            {(() => {
              switch (this.state.form) {
              case "room":   return <AddRoom store={ store }/>;
              default:      return "Did not work";
            }
            })()}
          </div>
        </Modal>
      </Card>
    );
  }
};

export default AddItem;