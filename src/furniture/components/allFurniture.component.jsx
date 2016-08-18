import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col, Input} from 'react-materialize';
import AddItemButton from '../../app/addItemButton.component.jsx';
import { connect } from 'react-redux';
import furnitureHelper from '../furnitureHelper';
import FlatButton from 'material-ui/FlatButton';
import UpdateFurnitureForm from '../containers/updateFurnitureForm.container';
import { bindActionCreators } from 'redux';
import { deleteFurniture } from '../actions/furniture.action';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';



class AllFurniture extends Component {
  constructor(props) {
    super(props);
  
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  deleteFurnitureCall(itemName, itemRoom) {
    this.props.deleteFurniture(itemName, itemRoom);
  }

  state = {
    filter: furnitureHelper.listByFurniture,
    edit:false
  }
  
  filterByFurnitureName() {
    this.setState({filter: furnitureHelper.filterByFurniture});
  }
  filterByFurniturePrice() {
    this.setState({filter: furnitureHelper.filterByPrice});
  }
  filterByDeliveryDate() {
    this.setState({filter: furnitureHelper.filterByDate});
  }
  filterByRoomName = () => {
    this.setState({filter: furnitureHelper.filterByRoom});
  }
  unfilter() {
    this.setState({filter: furnitureHelper.listByFurniture});
  }
  render () {
    const { rooms } = this.props;
    const roomName = Object.keys(rooms);
    const toTitleCase = this.toTitleCase;
    let furnitureList = this.state.filter(rooms);
    const defaultUrl = "http://blog.wanken.com/wp-content/uploads/2010/10/Eames-Lounge-Chair-and-Ottoman.jpeg";
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 'auto',
        height: 'auto',
        overflowY: 'auto',
        marginBottom: 24,
      },
    };
    
    return (
        <div style={styles.root}>
          <GridList
            cols={4}
            cellHeight={400}
            style={styles.gridList}
          >
            
            {furnitureList.map((tile, i) => (
              <GridTile
                key={i}
                title={tile.furnitureName}
                subtitle={<span> in <b>{tile.roomName}</b></span>}
                
              >
                <img src={tile.furnitureObj.url} />
              </GridTile>
              
            ))}
          </GridList>
        </div>
    );          
  }
}

function mapDispatchToProps(dispatch) {
  return   bindActionCreators({ deleteFurniture }, dispatch);
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFurniture);

// actionIcon={<IconButton><ModeEdit color="white" /></IconButton>}
 // <div >
        // {furnitureList.map((element, i) => {      // 
          // return (
            // <div key={i} >
              // <Col l={4} m={6} s={12}>
                // <Card className='card-panel hoverable' header={<CardTitle reveal image={ element.furnitureObj.url || defaultUrl } waves='light'/>}
                  // title={element.furnitureName}
                  // reveal={
                    // <span>{element.furnitureName}</span>
                  // }
                // >
                  // <div className='card-control'><i className="card-controls material-icons md-dark" onClick={() => {this.deleteFurnitureCall(element.furnitureName, element.roomName)}}>delete</i></div>
                  // <span className='card-body'>Room: {element.roomName}   Price: ${element.furnitureObj.price} <a href={element.furnitureObj.url}>Link</a></span>
                // </Card>
              // </Col>
            // </div>
          // );
        // })}
      // </div>
      // )


// const item = element.furnitureName;
//           const initialFormValues = {
//             item,
//             price: element.furnitureObj.price,
//             deliveryDate: element.furnitureObj.deliveryDate,
//             size: element.furnitureObj.size,
//             description: element.furnitureObj.description,
//           };



// <UpdateFurnitureForm formKey={element.furnitureName} name={item}
                       // details={item}
                       // initialValues={ initialFormValues }
                     // />
//const roomList = furnitureHelper.listByRoom(rooms);
 //data shape is [{furnitureName, roomName, furnitureObj}, ...]
     // {furnitureList.map(function(data, i){
                  
                      
     //                )
     //            })}

     // <UpdateFurnitureForm formKey={itemName} name={itemName}
                      // details={item}
                      // initialValues={ initialFormValues }
                    // />
