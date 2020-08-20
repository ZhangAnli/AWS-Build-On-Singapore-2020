import React, { Component } from "react";
import "./ClientForm.css";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class ClientForm extends Component { 

    constructor(props){ 
        super(props) 
        this.state ={ 
            Name:"", 
            Age:"", 
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

    handleSubmit = (event) => { 
        event.preventDefault(); 

        if (this.state.Name.length === 0 || 
            this.state.Age.length === 0 || 
            this.state.InvestmentPeriod.length === 0 ||
            this.state.BankAccountSavings.length === 0 ||
            this.state.CreditScore.length === 0 ||
            this.state.MonthlyOutwardSpending.length === 0 ||
            this.state.TimeAndCommitment.length === 0 ||    
            this.state.NumberOfDependencies.length === 0 ||   
            this.state.Name.length === 0 ||  
            this.state.Name.length === 0 || 
            this.state.Name.length === 0 ||
            this.state.Name.length === 0 ||
            this.state.Name.length === 0 ||
            this.state.Name.length === 0
            ) { 
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          alert("Please fill in all fields before submitting."); 

        } else {
            const data = this.state; 
            console.log(data); 
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
            <div>

                <Paper className="paper" elevation={10} >
                    <form onSubmit={this.handleSubmit}> 
                        <h3> Client Details </h3>
                        <h4 className="header"> Part 1</h4><hr/>

                        {/* Continuous */}
                        <input type="text" placeholder="Name" className = "clientInput" name="Name" onChange={this.handleChange}/> 
                        <input type="number" placeholder="Age" className = "clientInput" name="Age" onChange={this.handleChange}/> 
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
                            <option value="Singapore">Singapore</option>
                            <option value="OutsideSingapore">Outside Singapore</option>
                        </select>

                        <select  className = "clientInput" name="EducationLevel" onChange={this.handleChange}>
                            <option value="">--Please choose Education Level--</option>
                            <option value="Preschool">Pre-School</option>
                            <option value="PrimarySchool">PrimarySchool</option>
                            <option value="SecondarySchool">Secondary School</option>
                            <option value="Diploma">Diploma</option>
                            <option value="ALevel">A-Level</option>
                            <option value="Degree">Degree</option>
                            <option value="Masters">Masters</option>
                            <option value="PhD">PhD</option>
                        </select>

                        <select  className = "clientInput" name="MaritalStatus" onChange={this.handleChange}>
                            <option value="">--Please choose Marital Status--</option>
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                        </select>

                        <select  className = "clientInput" name="Nationality" onChange={this.handleChange}>
                            <option value="">--Please choose Nationality--</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Permanent Resident">Permanent Resident</option>
                            <option value="Foreigner">Foreigner</option>
                        </select>

                        <select  className = "clientInput" name="RiskAppetite" onChange={this.handleChange}>
                            <option value="">--Please choose Risk Appetite--</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Very High">Very High</option>
                        </select>

                        <select  className = "clientInput" name="Occupation" onChange={this.handleChange}>
                            <option value="">--Please choose Occupation--</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Very High">Very High</option>
                        </select>
                    {/* 
                        <select  className = "clientInput" name="RetirementPlan">
                            <option value="">--Please choose Occupation--</option>
                            <option value="IndustriesAndSectors">Industries and Sectors</option>
                            <option value="AgriculturePlantationsOtherRuralSectors">Agriculture, Plantations, OtherRuralSectors</option>
                            <option value="BasicMetalProduction">Basic Metal Production</option>
                            <option value="ChemicalIndustries">Chemical Industries</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Construction">Construction</option>
                            <option value="Education">Education</option>
                            <option value="FinancialServices">FinancialServices</option>
                            <option value="FoodDrinkTobacco">Food, Drink, Tobacco</option>
                        </select> */}

                        <select  className = "clientInput" name="RetirementPlan" onChange={this.handleChange}>
                            <option value="">--Please choose Retirement Plan--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                          
                        <br/>
                         
                        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </form> 
                </Paper>

            </div>
        )
    }
}

export default ClientForm; 