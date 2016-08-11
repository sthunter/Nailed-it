import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col, Input, Button } from 'react-materialize';
import AddItemButton from '../../app/addItemButton.component.jsx';
import ColorPalette from '../../colorPalette/containers/colorPalette.container'
import AddFurnitureForm from '../containers/addFurnitureForm.container'

class FList extends Component {

  state = {
    edit:false
  }

  changeHandler() {
    this.setState({edit:true})
  }

  clickEdit() {

  }

  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <div>
      <div>
        <Row>
          <div className='center-align' ><ColorPalette /></div>
        </Row>
      <Row>
       <div className="CardList">
        {listNames.map((itemName, i) => {
          return (
            <div key = {i}> 
              <Col l={3} s={12}>
              <Card 
                className='card-panel hoverable' header={<CardTitle reveal image={ "http://blog.wanken.com/wp-content/uploads/2010/10/Eames-Lounge-Chair-and-Ottoman.jpeg" } waves='light'/>}
                title={itemName}
                reveal={
                  <div>
                  <Row>
                    <div className='center-align'>
                    <Input s={6} placeholder='Item' value={itemName} />
                    <Input s={6} placeholder='Price' onChange={()=> this.changeHandler()}value={this.props.list[itemName].price}  />
                    <Input s={6} placeholder='URL' />
                    
                    
                    </div>
                  </Row>  
                  <Row>
                    {this.state.edit ? <Button small type="submit">Submit</Button> : <div></div>}
                  </Row>
                  </div>
                }>
                <span className='card-body'>Price: ${this.props.list[itemName].price} <a href={this.props.list[itemName].url}>Link</a></span>
              </Card>
              </Col>
            </div>
          );
        })}
        <AddItemButton view={this.props.view === 'rooms' ? 'room' : 'furniture'} />
      </div>
      </Row>
      </div>
      </div>
    );
  }
}



export default FList;

// <Input s={6} placeholder="Size"  />
//                     <Input s={6} placeholder="ETA"  />
//                     <Input s={12} placeholder='Notes'  />