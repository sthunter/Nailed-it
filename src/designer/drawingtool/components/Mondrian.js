import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    objects: [{
      "width": 300,
      "height": 245,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "#424242",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 10,
      "y": 5
    }, {
      "width": 330,
      "height": 245,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "#424242",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 369,
      "y": 3
    }, {
      "width": 300,
      "height": 350,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 10,
      "y": 262
    }, {
      "width": 143,
      "height": 160,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 241, 0, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 190,
      "y": 16
    }]
  };

  handleUpdate(objects) {
    this.setState({objects});
  }

  render() {
    return (
      <Designer
        width={800} height={600}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}