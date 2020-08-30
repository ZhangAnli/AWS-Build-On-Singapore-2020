import React, { Component } from "react";
import axios from 'axios';
import { Bar } from "react-chartjs-2"; 
import "./Data.css";
import Paper from '@material-ui/core/Paper';
    
  export default class App extends Component {
    state = {
      clusterNumber: null,            
      ageData: [],
      riskData: [],
      barState: {
        labels: ['Cluster 1', 'Cluster 2', 'Cluster 3 ',
               'Cluster 4', 'Cluster 5', 'Cluster 6', 'Cluster 7'],
        datasets: [
          {
            label: 'Client Count',
            backgroundColor: context => {
              if (this.state.clusterNumber && context.dataIndex === this.state.clusterNumber - 1) {
                return "#f04747";
              } else {
                return "#4870a0";
              }
            },
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 2,
            data: [],
          }
        ]
      }      
    }

    componentDidUpdate() {
      const { clusterNumber } = this.props;
      if (clusterNumber && !this.state.clusterNumber) {
          this.setState({
            clusterNumber: clusterNumber,
          })
      }         
    }

    componentDidMount() {
      axios.get(`https://cors-anywhere.herokuapp.com/https://ebjyty6n50.execute-api.us-east-2.amazonaws.com/awsbuildon/get`)
      .then(res => {             
        const numData = res.data[0];
        const ageData = res.data[1];                
        const riskData = res.data[2];                
        this.setState(
          {            
            ageData: ageData,
            riskData: riskData,
            barState: {
              labels: [...this.state.barState.labels],
              datasets: [{...this.state.barState.datasets[0], data: numData}]
            }
          }
        );              
      }).catch(err => console.log(err));  
    }

    render() {
      return (
        <Paper className="paper" elevation={10}>
          <Bar
            data={this.state.barState}                
            options={{
              title: {
                display: true,
                text: 'Cluster Data',
                fontSize: 20
              },              
              tooltips: {
                callbacks: {
                  label: (tooltipItem, data) => {                                        
                    const idx = tooltipItem.index;
                    const originalLabel = `Number of Clients: ${tooltipItem.value}`;
                    const ageLabel = `Median Age: ${this.state.ageData[idx]}`;
                    const risklabel = `Median Risk Level (Out of 10): ${this.state.riskData[idx]}`;                                       
                    return [originalLabel, ageLabel, risklabel];
                  }                  
                }
              }
            }}
          />
        </Paper>
      );
    }
  }