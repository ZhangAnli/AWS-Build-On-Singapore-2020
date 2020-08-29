import React, { Component } from "react";
import axios from 'axios';
import "./ClientForm.css";
import InvestmentTable from '../InvestmentTable/InvestmentTable.jsx'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class ClientForm extends Component { 

  constructor(props){ 
    super(props) 
    this.state = { 
      clusterNumber: null,
      ClientID:"", 
      Age:"", 
      Income:"", 
      InvestmentPeriod:"", 
      BankAccountSavings:"", 
      CreditScore:"", 
      MonthlyOutwardSpending:"", 
      TimeAndCommitment:"", 
      NumberOfDependencies:"", 
      CountryOfResidence:"", 
      EducationLevel:"", 
      MaritalStatus:"", 
      Nationality:"", 
      Occupation:"", 
      RiskAppetite:"", 
      RetirementPlan:""
    }
  }

  getData() {
    axios.post('https://ebjyty6n50.execute-api.us-east-2.amazonaws.com/awsbuildon/awsbuildonhandler/',
    JSON.stringify({ 
      "data": this.state.ClientID + "," 
      + this.state.Age + "," 
      + this.state.Income + ","
      + this.state.InvestmentPeriod + ","  
      + this.state.BankAccountSavings + ","  
      + this.state.CreditScore + ","  
      + this.state.MonthlyOutwardSpending + ","  
      + this.state.TimeAndCommitment + ","  
      + this.state.NumberOfDependencies + ","  
      + this.state.CountryOfResidence + ","  
      + this.state.EducationLevel + ","  
      + this.state.MaritalStatus + ","  
      + this.state.Nationality + ","  
      + this.state.Occupation + ","  
      + this.state.RiskAppetite + ","  
      + this.state.RetirementPlan
    })).then(res => this.setState({
      clusterNumber: res.data[0].closest_cluster
    })).catch(err => console.log(err));
  }

  handleSubmit = (event) => { 
    event.preventDefault(); 

    if (this.state.ClientID.length === 0 || 
      this.state.Age.length === 0 || 
      this.state.Income.length === 0 ||
      this.state.InvestmentPeriod.length === 0 ||
      this.state.BankAccountSavings.length === 0 ||
      this.state.CreditScore.length === 0 ||
      this.state.MonthlyOutwardSpending.length === 0 ||
      this.state.TimeAndCommitment.length === 0 ||    
      this.state.NumberOfDependencies.length === 0 ||   
      this.state.CountryOfResidence.length === 0 ||  
      this.state.EducationLevel.length === 0 || 
      this.state.MaritalStatus.length === 0 ||
      this.state.Nationality.length === 0 ||
      this.state.Occupation.length === 0 ||
      this.state.RiskAppetite.length === 0 ||
      this.state.RetirementPlan.length === 0
    ) { 
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert("Please fill in all fields before submitting."); 

    } else {             
      // Submit to AWS 
      this.getData(); 

      // console.log(JSON.stringify({ 
      //   "data": this.state.ClientID + "," 
      //   + this.state.Age + "," 
      //   + this.state.Income + ","
      //   + this.state.InvestmentPeriod + ","  
      //   + this.state.BankAccountSavings + ","  
      //   + this.state.CreditScore + ","  
      //   + this.state.MonthlyOutwardSpending + ","  
      //   + this.state.TimeAndCommitment + ","  
      //   + this.state.NumberOfDependencies + ","  
      //   + this.state.CountryOfResidence + ","  
      //   + this.state.EducationLevel + ","  
      //   + this.state.MaritalStatus + ","  
      //   + this.state.Nationality + ","  
      //   + this.state.Occupation + ","  
      //   + this.state.RiskAppetite + ","  
      //   + this.state.RetirementPlan
      // }))
    }
  }

  handleChange = (event) => { 
    event.preventDefault()
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <Paper className="paper" elevation={10} >
          <form onSubmit={this.handleSubmit}> 
            <h3> Client Details </h3>
            <h4 className="header"> Part 1</h4><hr/>

            {/* Continuous */}
            <input type="number" placeholder="Client" className = "clientInput" name="ClientID" onChange={this.handleChange}/> 
            <input type="number" placeholder="Age" className = "clientInput" name="Age" onChange={this.handleChange}/> 
            <input type="number" placeholder="Income" className = "clientInput" name="Income" onChange={this.handleChange}/> 
            <input type="number" placeholder="Investment period (months)" className = "clientInput" name="InvestmentPeriod" onChange={this.handleChange}/> 
            <input type="number" placeholder="Bank Account Savings (SGD)" className = "clientInput" name="BankAccountSavings" onChange={this.handleChange}/> 
            <input type="number" placeholder="Credit Score" className = "clientInput" name="CreditScore" onChange={this.handleChange}/> 
            <input type="number" placeholder="Monthly Outward Spending (SGD)" className = "clientInput" name="MonthlyOutwardSpending"onChange={this.handleChange}/> 
            <input type="number" placeholder="Time and Commitment (hours/day)" className = "clientInput" name="TimeAndCommitment" onChange={this.handleChange} /> 
            <input type="number" placeholder="Number of Dependencies" className = "clientInput" name="NumberOfDependencies" onChange={this.handleChange}/> 
            
            <h4> Part 2</h4><hr/>
            {/* Categorical */} 
            <select  className = "clientInput" name="CountryOfResidence" onChange={this.handleChange}>
              <option value="">--Please choose Country of Residence--</option>
              <option value="0">Singapore</option>
              <option value="1">Outside Singapore</option>
            </select>

            <select  className = "clientInput" name="EducationLevel" onChange={this.handleChange}>
              <option value="">--Please choose Education Level--</option>
              <option value="0">Pre-School</option>
              <option value="1">Primary School</option>
              <option value="2">Secondary School</option>
              <option value="3">Diploma</option>
              <option value="4">A-Level</option>
              <option value="5">Degree</option>
              <option value="6">Masters</option>
              <option value="7">PhD</option>
            </select>

            <select  className = "clientInput" name="MaritalStatus" onChange={this.handleChange}>
              <option value="">--Please choose Marital Status--</option>
              <option value="0">Married</option>
              <option value="1">Single</option>
            </select>

            <select  className = "clientInput" name="Nationality" onChange={this.handleChange}>
              <option value="">--Please choose Nationality--</option>
              <option value="0">Singapore</option>
              <option value="1">Permanent Resident</option>
              <option value="2">Foreigner</option>
            </select>

            <select  className = "clientInput" name="Occupation" onChange={this.handleChange}>
              <option value=''>--Please choose Occupation--</option>
              <option value="0">Chemical Industries</option>
              <option value="1">Agriculture, Plantations, OtherRuralSectors</option>
              <option value="2">Basic Metal Production</option>
              <option value="3">Chemical Industries</option>
              <option value="4">Commerce</option>
              <option value="5">Construction</option>
              <option value="6">Education</option>
              <option value="7">FinancialServices</option>
              <option value="8">Food, Drink, Tobacco</option>
            </select>

            <select  className = "clientInput" name="RiskAppetite" onChange={this.handleChange}>
              <option value=''>--Please choose Risk Appetite--</option>
              <option value="0">Low</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
              <option value="3">Very High</option>
            </select>

            <select  className = "clientInput" name="RetirementPlan" onChange={this.handleChange}>
              <option value=''>--Please choose Retirement Plan--</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
              
            <br/>
              
            <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
          </form> 
        </Paper>
        <br />
        {this.state.clusterNumber && <InvestmentTable clusterNumber={this.state.clusterNumber}/>}
      </>
    )
  }
}

export default ClientForm; 