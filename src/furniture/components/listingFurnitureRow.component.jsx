import React from 'react';
import UpdateFurnitureFormTable from '../containers/updateFurnitureFormTable.container.jsx';

export default function listingFurnitureRow(props)  {
  const { roomName, furnitureName, furnitureObj } = props.data;

  function controlsClick(e, type) {
    const status = {
      edit: true,
      cancel: false,
      submit: false,
    };
    props.updateEditStatus(furnitureName, status[type]);
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
      <span className="td slimDown color">{ furnitureObj.color }</span>
      <span className="td controls slimDown">
        <button className={ `btn-flat` } onClick={ (e) => controlsClick(e, 'edit') }>Edit</button>
      </span>
    </div>
  );
}
