import React, { Component } from 'react'
import axios from 'axios';
import { Table } from "baseui/table";
import Paper from '@material-ui/core/Paper';

class InvestmentTable extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const { clusterNumber } = this.props;
    
    axios.post(`https://ebjyty6n50.execute-api.us-east-2.amazonaws.com/awsbuildon/query`,
      {
        "statusCode": 200,
        "Body": {
            "type": "select",
            "statement": `select product_code, count(product_code) as repetition from (select product_code from financial_products left join customers on financial_products.customer_id = customers.Customer where customers.cluster_number = ${clusterNumber} ) as joined group by product_code order by repetition desc limit 5`
        }
      }
    ).then(res => {      
      this.setState({
        data: JSON.parse(res.data.body),
      })      
    }
    ).catch(err => console.log(err));        
  }

  render() {    
    return (
      <Paper className="paper" elevation={10}>
      {this.state.data.length !== 0 && 
        <Table
          columns={["Stock Ticker", "Frequency In Cluster"]} 
          data={this.state.data}
        />}
      </Paper>
    )
  }
}

export default InvestmentTable;
