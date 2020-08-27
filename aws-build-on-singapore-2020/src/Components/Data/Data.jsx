import React, { Component } from "react";
import axios from 'axios';
import { Bar } from "react-chartjs-2"; 
import "./Data.css";
import Paper from '@material-ui/core/Paper';
    
  export default class App extends Component {
    state = {
      barState: {
        labels: ['Cluster 1', 'Cluster 2', 'Cluster 3 ',
               'Cluster 4', 'Cluster 5', 'Cluster 6', 'Cluster 7'],
        datasets: [
          {
            label: 'Client Count',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 2,
            data: [],
          }
        ]
      }      
    }

    componentDidMount() {
      axios.get(`https://cors-anywhere.herokuapp.com/https://ebjyty6n50.execute-api.us-east-2.amazonaws.com/awsbuildon/get`)
      .then(res => {        
        const data = res.data[0];        
        this.setState(
          {
            barState: {
              labels: [...this.state.barState.labels],
              datasets: [{...this.state.barState.datasets[0], data}]
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