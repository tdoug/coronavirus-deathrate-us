import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [state, dispatch] = useState({ cases: 100, deaths: 1 });
  let token;
  let url = 'https://coronavirus-19-api.herokuapp.com/countries/usa';

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
      <div className="pct">{state.deaths > 1 ? ((state.deaths / state.cases) * 100).toFixed(2) + "%": "Loading..."}</div>
      <div className="stats">Confirmed Cases: {state.deaths > 1 ? state.cases.toLocaleString() : "Loading..."} | Confirmed Deaths: {state.deaths > 1 ? state.deaths.toLocaleString() : "Loading..."}</div>
      <div className="footer">
        <span className="red">*</span> NOTE: confirmed cases are NOT all actual cases.  <br /><br />Hundreds of thousands, perhaps millions, of people have been infected with the virus and are asymptomatic or contracted the virus without being tested.
      </div>
    </div>
  )
}

export default App;
