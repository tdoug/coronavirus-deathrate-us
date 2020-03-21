import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [state, dispatch] = useState({ cases: 100, deaths: 1 });
  let token = 'Bearer 71700bcc-e75b-3929-a318-4feff99bb38a';
  let url = 'https://coronavirus-19-api.herokuapp.com/countries/us';

  useEffect(()=>{
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(url, { headers: {'Accept': 'application/json', 'Authorization': token} } );
      dispatch({ cases: response.data.cases, deaths: response.data.deaths });
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="header">As of this moment, the death rate of confirmed<span className="red">*</span> COVID-19 cases in the United States is:</div>
      <div className="pct">{(state.deaths / state.cases).toFixed(5) * 100} %</div>
      <div className="footer">
        <span className="red">*</span> NOTE: confirmed cases are NOT all actual cases.  <br /><br />Hundreds of thousands or even millions of people have been infected with the virus.  You are -far- more likely to receive a test if you are symptomatic or have a severe case.
      </div>
    </div>
  )
}

export default App;
