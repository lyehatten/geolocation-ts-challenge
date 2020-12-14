const WeatherDisplay = (props: any) => {
  return ( 
    <div className="App">
        <h1> Weather ! </h1>
        <h4>Description: {props.description}</h4>
        <h4>Temperature: {props.temp}°F</h4>
    </div>
  );
}

export default WeatherDisplay;