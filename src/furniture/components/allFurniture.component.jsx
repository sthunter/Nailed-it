import React, { Component } from 'react';
import { connect } from 'react-redux';
import furnitureHelper from '../furnitureHelper';
import { bindActionCreators } from 'redux';
import { deleteFurniture } from '../actions/furniture.action';
import { GridList, GridTile } from 'material-ui/GridList';


class AllFurniture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: furnitureHelper.listByFurniture,
      edit:false
    }
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  deleteFurnitureCall(itemName, itemRoom) {
    this.props.deleteFurniture(itemName, itemRoom);
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
    let columns;
    const { rooms } = this.props;
    let furnitureList = this.state.filter(rooms);
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

    if (window.matchMedia("(min-width: 800px)").matches) {
      /* the viewport is at least 800 pixels wide */
      columns = 4;
    } else {
      /* the viewport is less than 800 pixels wide */
      columns = 1;
    }
    
    return (
        <div style={styles.root}>
          <GridList
            cols={columns}
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
