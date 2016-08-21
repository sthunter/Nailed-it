import React from 'react';
import UpdateFurnitureFormTable from '../containers/updateFurnitureFormTable.container.jsx';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';

export default function listingFurnitureRow(props)  {
  const { roomName, furnitureName, furnitureObj } = props.data;
  const styles = {
    cellPad: {
      'padding':'5px'
    },
    buttonColor: {
      'color':'rgba(0,0,0,0.7)'
    }
  }

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
    <tr>
      <td style={styles.cellPad}><strong>{ roomName }</strong></td>
      <td style={styles.cellPad}>{ furnitureName }</td>
      <td style={styles.cellPad}>$ { furnitureObj.price }</td>
      <td style={styles.cellPad}>{ furnitureObj.size }</td>
      <td style={styles.cellPad}>{ furnitureObj.color }</td>
      <td style={styles.cellPad}>
        <IconButton onClick={ (e) => controlsClick(e, 'edit')}><ModeEdit style = {styles.buttonColor}x/></IconButton>
      </td>
    </tr>
  );
}
