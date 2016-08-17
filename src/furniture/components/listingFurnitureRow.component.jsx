import React from 'react';
import UpdateFurnitureFormTable from '../containers/updateFurnitureFormTable.container.jsx';

export default function listingFurnitureRow(props)  {
  const _props = props;
  //console.log('listingFurnitureRow props: ', props);
  const { roomName, furnitureName, furnitureObj } = props.data;

  function controlsClick(e, type) {
    // todo: Convert this to a switch-object. Or refactor otherwise; it's looking like it
    // hardly does anything, and maybe could just be done inline or something.
    if (type === 'edit') {
      props.updateEditStatus(furnitureName, true);
    } else if (type === 'cancel') {
      props.updateEditStatus(furnitureName, false);
    } else if (type === 'submit') {
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