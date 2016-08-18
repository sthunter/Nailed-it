import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateFurniture } from '../actions/furniture.action';

class UpdateFurnitureForm extends Component {
  render() {
    const { fields: {
      itemName, price, deliveryDate, size, description, originalItemName, color
    }, handleSubmit } = this.props;
    const currentFurnitureObj = this.props.rooms[this.props.roomSelected].furniture[this.props.name];
    const boundUpdateFurniture = this.props.updateFurniture.bind(null,
      this.props.name, this.props.roomSelected, currentFurnitureObj
    );

    return (
      <form onSubmit={ handleSubmit(boundUpdateFurniture) }>
        <table className="furniture-detail">
          <tbody>
            <tr>
              <td>
                <label>Name
                  <input type="text" id="itemName" className={ itemName.error ? 'invalid' : 'valid'} { ...itemName }  />
                </label>
                <div className="help-text"><span className="form-warning">{ itemName.error }</span></div>
              </td>
              <td>
                <label>Price
                  <input type="text" className={ price.error ? 'invalid' : 'valid'} { ...price }  />
                </label>
                <div className="help-text"><span className="form-warning">{ price.error }</span></div>
              </td>
            </tr>
            <tr>
              <td>
                <label>Color
                  <input type="text" className={ color.error ? 'invalid' : 'valid'} { ...color }  />
                </label>
                <div className="help-text"><span className="form-warning">{ color.error }</span></div>
              </td>
              <td>
                <label>Dimensions
                  <input type="text" className={ size.error ? 'invalid' : 'valid'} { ...size }  />
                </label>
                <div className="help-text"><span className="form-warning">{ size.error }</span></div>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <label>Notes
                  <textarea className={ description.error ? 'invalid' : 'valid'} { ...description }  />
                </label>
                <div className="help-text"><span className="form-warning">{ description.error }</span></div>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" disabled={this.props.pristine}>Submit</button>
        <input type="text" className="hidden-field" value={ this.props.name } disabled { ...originalItemName } aria-hidden="true" />
      </form>
    );
  }
}

const mapStateToProps = ({ roomSelected, rooms }) => ({ roomSelected, rooms });

function validate(values) {
  const errors = {};

  if (!values.itemName) {
    errors.itemName = 'The item must have a name.'
  }

  //const furnitureNames = Object.keys(this.props.rooms[this.props.roomSelected].furniture);
  //// If the user changed the item name to the name of another existing piece of furniture, alert the user
  //if (values.itemName !== values.originalItemName && ~furnitureNames.indexOf(values.itemName)) {
  //  errors.itemName = `There is already a "${values.itemName}".`;
  //}

  if (values.price && values.price.match(/\D/)) {
    errors.price = 'The price must only contain numbers.';
  }

  return errors;
}

export default reduxForm({
  form: 'UpdateFurnitureForm',
  fields: ['itemName', 'price', 'deliveryDate', 'size', 'description', 'color', 'originalItemName'],
  validate,
}, mapStateToProps, { updateFurniture })(UpdateFurnitureForm);