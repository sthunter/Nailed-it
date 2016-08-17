import React from 'react';
import UpdateFurnitureFormTable from '../containers/updateFurnitureFormTable.container.jsx';

export default function listingFurnitureRow(props)  {
  const _props = props;
  //console.log('listingFurnitureRow props: ', props);
  const { roomName, furnitureName, furnitureObj } = props.data;

  function controlsClick(e, type) {
    // todo: Convert this to a switch-object
    if (type === 'edit') {
      e.preventDefault();
      props.updateEditStatus(furnitureName, true);
    } else if (type === 'cancel') {
      e.preventDefault();
      // todo: reset form to initial values
      props.updateEditStatus(furnitureName, false);
    } else if (type === 'submit') {
      e.preventDefault(); // todo: remove this once I know the data looks right
      props.updateEditStatus(furnitureName, false);
    }
  }

  return props.editing ? (
    <UpdateFurnitureFormTable data={ props.data } controlsClick={ controlsClick }
      formKey={ props.data.furnitureName }
      initialValues={ props.initialValues } />
  ) : (
    <div className="table-item tr">
      <span className="td room slimDown"><strong>{ roomName }</strong></span>
      <span className="td slimDown furniture">{ furnitureName }</span>
      <span className="td slimDown price">{ furnitureObj.price }</span>
      <span className="td slimDown size">{ furnitureObj.size }</span>
      <span className="td slimDown quantity">{ furnitureObj.quantity }</span>
      <span className="td slimDown notes">{ furnitureObj.notes }</span>
      <span className="td slimDown deliveryDate">{ furnitureObj.deliveryDate }</span>
      <span className="td controls slimDown">
        <button className={ `btn-flat` } onClick={ (e) => controlsClick(e, 'edit') }>Edit</button>
      </span>
    </div>
  );
}

/*
 onClick={ (e) => this.controlsClick(e, 'edit') }
 */