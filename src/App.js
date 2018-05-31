import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '7be5cee53b873db905098ce620e5de18';

class App extends Component {

	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		icon: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY }&units=Imperial`);
		const data = await api_call.json();
		
		if (city) {
			console.log(data);

			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				icon: data.weather[0].icon,
				error: ''
			})
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter a city'
			})
		}
	}

	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-12 title-container">
									<Title />
								</div>
								<div className="col-12 form-container">
									<Form getWeather={this.getWeather} />
									<Weather 
										temperature={this.state.temperature}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										description={this.state.description}
										icon={this.state.icon}
										error={this.state.error}
									/>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
