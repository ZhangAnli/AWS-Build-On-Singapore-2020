import React, { Component } from "react";
import { Bar } from "react-chartjs-2"; 
import "./Data.css";
import Paper from '@material-ui/core/Paper';

const state = {
    labels: ['Cluster 1', 'Cluster 2', 'Cluster 3 ',
             'Cluster 4', 'Cluster 5', 'Cluster 6', 'Cluster 7'],
    datasets: [
      {
        label: 'Client Count',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 2,
        data: [4090, 2234, 1943, 1067, 1044, 601, 578 ]
      }
    ]
  }
  
  export default class App extends Component {
    render() {
      return (
        <Paper className="paper" elevation={10}>
          <Bar
            data={state}
            options={{
              title:{
                display:true,
                text:'Cluster Data',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </Paper>
      );
    }
  }