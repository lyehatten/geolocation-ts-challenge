import React from 'react';
import "./App.css";
import WeatherFetch from './Component/WeatherFetch';

const App: React.FunctionComponent = () => {
  return ( 
    <div className="App">
      <WeatherFetch />
    </div>
  );
}

export default App;
