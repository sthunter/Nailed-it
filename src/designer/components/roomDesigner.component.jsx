import React, {Component} from 'react';
import classes from '../roomDesigner.module.css'
import Designing from '../containers/mondrian.container';
import ColorPalette from '../../colorPalette/containers/colorPalette.container';
import FlatButton from 'material-ui/FlatButton'

export default class Designer extends Component {

state = {
  color:false
}

handleColor = () => {
  if(this.state.color) {
    this.setState({color:false})
  } else {
    this.setState({color:true})
  }

}
  render() {

    return (
      <div className={classes.container} >
        <div className={classes.example}>
          <div className={classes.info}>
          </div>
          <div className={classes.preview}>
            <FlatButton label="Color Tool" onClick={this.handleColor}/>
            {this.state.color ? <ColorPalette /> : null}
            <Designing params={this.props.params} />
          </div>
        </div>
      </div>
    );
  }
}
