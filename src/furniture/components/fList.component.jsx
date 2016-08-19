import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import { deleteFurniture } from '../actions/furniture.action';
import UpdateFurnitureForm from '../containers/updateFurnitureForm.container.jsx';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Delete from 'material-ui/svg-icons/action/delete';

class FList extends Component {
  
  componentWillReceiveProps() {
    this.setState({edit:null})
  }

  deleteFurnitureCall = (itemName) => {
    let currentRoom = this.props.roomSelected;
    this.props.deleteFurniture(itemName, currentRoom);
  }

  state = {
    edit: null
  }

  handleEdit = (itemName) => {
    const item = this.props.list[itemName];
    const initialFormValues = {
      itemName,
      price: item.price,
      deliveryDate: item.deliveryDate,
      size: item.size,
      description: item.description,
      color: item.color,
    };

    this.setState({
      edit: itemName,
      initialFormValues,
      item,
    });
    setTimeout(() => this.props.reset('UpdateFurnitureForm'), 50);
  }

  handleCloseEdit = () => {
    this.setState({edit: null});
  }

  render() {
    const listNames = Object.keys(this.props.list);
    const _this = this;
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
        marginBottom: 75,
      },
    };

    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          cellHeight={400}
          style={styles.gridList}
        >
          {/* Generates grid tiles */}
          {listNames.map((itemName, i) => {
            const image = _this.props.list[itemName].url || "https://firebasestorage.googleapis.com/v0/b/nailed-it-c1d80.appspot.com/o/images%2FScreen%20Shot%202016-08-10%20at%2010.06.37%20AM.png?alt=media&token=eb6a6ea4-3f04-42e4-99c0-a639aa414792"

            return( 
              <GridTile
              key={i}
              title={itemName}
              subtitle={<span><b>Price: $</b>{_this.props.list[itemName].price} </span>}
              actionIcon={
                this.state.edit === itemName ? 
                <span><IconButton onClick={()=>{this.deleteFurnitureCall(itemName)}}><Delete color="white" /></IconButton><IconButton onTouchTap={this.handleCloseEdit}><Close color="white" /></IconButton></span> 
                : <span><IconButton onClick={()=> this.deleteFurnitureCall(itemName)}><Delete color="white" /></IconButton><IconButton onTouchTap={()=>{this.handleEdit(itemName)}}><ModeEdit color="white" /></IconButton></span>
                }
              >
              {this.state.edit === itemName ?
                <UpdateFurnitureForm name={itemName}
                  details={_this.state.item}
                  initialValues={ _this.state.initialFormValues } /> 
                : <img src={ image } />}
            </GridTile>
           ) 
          })}
        </GridList>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteFurniture, reset }, dispatch);
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

export default connect(mapStateToProps, mapDispatchToProps)(FList);
