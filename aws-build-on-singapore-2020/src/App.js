import React from 'react';
import './index.css';
import ClientForm from './Components/ClientForm/ClientForm.jsx'; 
import {Client as Styletron} from 'styletron-engine-atomic'; 
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <img src ="https://i.pinimg.com/originals/f7/d2/c0/f7d2c09c8b0feff8ee6378d1a8ae0ddd.png" alt="Logo" className="center" />       
        <hr id="logoHR" /> 
        <h1> Investment Recommendation </h1>
        <ClientForm/>
        <br/>         
        <br/>
      </BaseProvider> 
    </StyletronProvider>
  );
}

export default App;
