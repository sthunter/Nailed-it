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
          size={ 330 }
          data={ genData }
          clickHandler={(selection) => {
            let data = this.props.onClick(selection.data);
          }}

        />
    )
  }
};

export default PieChartHolder