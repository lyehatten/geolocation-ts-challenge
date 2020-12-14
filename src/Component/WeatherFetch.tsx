import React from 'react';
import WeatherDisplay from './WeatherDisplay';

type locationWeatherState = {
  latitude: number,
  longitude: number,
  description: string,
  temp: number,
}




export default class WeatherFetch extends React.Component<{}, locationWeatherState> {
  constructor(props: any){
    super(props);
    this.state = {
      latitude: 8,
      longitude: 38,
      description: '',
      temp: 0
    }
  }

  success = (pos: any) => {
    let crd = pos.coords;
    const lat: number = crd.latitude;
    const lon: number = crd.longitude;
    this.setState({
      latitude: lat,
      longitude: lon
    })

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=af496dee01395e172a4de4f29c13faef`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          description: data.weather[0].description,
          temp: data.main.temp
        })
      })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success)
  }

  render(){
    return(
      <div>
        <WeatherDisplay description={this.state.description} temp={this.state.temp}/>
      </div>
    )
  }
}