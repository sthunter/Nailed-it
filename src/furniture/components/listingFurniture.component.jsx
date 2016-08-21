import React, { Component } from 'react';
import { connect } from 'react-redux';
import furnitureHelper from '../furnitureHelper';
import ListingFurnitureRow from './listingFurnitureRow.component.jsx';

class ListingFurniture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: furnitureHelper.listByFurniture.bind(this),
      editing: {},
    };
  }


  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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
  updateEditStatus(furniture, status) {
    const editing = Object.assign({}, this.state.editing);
    editing[furniture] = status;
    this.setState({ editing });
  }

  render () {
    const { rooms } = this.props;
    let furnitureList = this.state.filter(rooms);
    const _this = this;
    const styles = {
      cellPad: {
        'padding':'5px'
      },
      buttonColor: {
        'color':'rgba(0,0,0,0.7)'
      }
    }

    return (
      <div className="container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th style={styles.cellPad} data-field="room" onClick={()=> {this.filterByRoomName()}} >Room Name</th>
              <th style={styles.cellPad} data-field="furniture" onClick={()=> {this.filterByFurnitureName()}} >Furniture Name</th>
              <th style={styles.cellPad} data-field="price" onClick={()=> {this.filterByFurniturePrice()}} >Price</th>
              <th style={styles.cellPad} data-field="size">Size</th>
              <th style={styles.cellPad} data-field="color">Color</th>
              <th style={styles.cellPad} className="th controls">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {
            furnitureList.map(function(data, i){
              const initialFormValues = {
                itemName: data.furnitureName,
                price: data.furnitureObj.price,
                deliveryDate: data.furnitureObj.deliveryDate,
                size: data.furnitureObj.size,
                quantity: data.furnitureObj.quantity,
                description: data.furnitureObj.description,
                color: data.furnitureObj.color,
              };

                //<UpdateFurnitureFormTable data={ data } key={ i } formKey={ data.furnitureName }
                //  initialValues={ initialFormValues } editing={ _this.state.editing[data.furnitureName] } />
              return (
                <ListingFurnitureRow
                  editing={ _this.state.editing[data.furnitureName] }
                  data={ data } key={ i }
                  updateEditStatus={_this.updateEditStatus.bind(_this)}
                  initialValues={ initialFormValues }
                />
              );
            })
          }
        </tbody>
      </table>
    </div>
    )
  }
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}


export default connect(mapStateToProps)(ListingFurniture);

    // <table>
    //     <thead>
    //       <tr>
    //           <th data-field="id">Name</th>
    //           <th data-field="name">Item Name</th>
    //           <th data-field="price">Item Price</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>Alvin</td>
    //         <td>Eclair</td>
    //         <td>$0.87</td>
    //       </tr>
