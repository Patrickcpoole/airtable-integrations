import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './App.css';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          height={null}
          width={null}
          data={this.props.chartData}
          options={{
            aspectRatio:1.1,
            responsive:true,
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text:'Tiers Completed For '+this.props.tierType+' Requests',
              fontSize:18,
              fontColor: 'rgb(40,44,52)'
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition,
              labels: {
                  boxWidth:0,
                  fontColor: 'rgb(40,44,52)'
              }
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;