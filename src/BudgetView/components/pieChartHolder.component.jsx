import React, { Component } from 'react';
import { PieChart } from 'react-easy-chart';


class PieChartHolder extends Component {
  state = {
    genData: this.props.genData
  }
  componentWillReceiveProps(nextProps) {
    this.setState({genData: nextProps.genData})
  } 

  render() {
    const genData = this.state.genData;
    
    return(
      <PieChart
          labels
          size={ 400 }
          innerHoleSize={ 215 }
          data={ genData }
        />
    )
  }
};

export default PieChartHolder