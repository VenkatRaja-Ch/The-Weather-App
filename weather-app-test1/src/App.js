import React, { useState } from 'react';
import CurrentWeather from './components/CurrentWeather'; // component
import Header from './components/Header'; // component
import Search from './components/Search'; // component
import NextDaysForecast from './components/NextDaysForecast'; //component
import useRequest from './hooks/useRequest';  //hook


function App() {

  const [searchResults, setSearchResults] = useState("Riga");

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchResults}&appid=${process.env.REACT_APP_APIKEY}&units=metric&cnt=40`;

  const {data} = useRequest(url);

  console.log(data)
  return (
    <div className="App">
      <Header/>
      <br/>
      {Object.keys(data).length !== 0 && (
        <>
          <Search setSearchResults={setSearchResults}/>
          <br/>
          <CurrentWeather data={data}/>
          <br/>
          <NextDaysForecast data={data}/>
        </>
      )}
      
    </div>
  );
}

export default App;
