import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '7be5cee53b873db905098ce620e5de18'

class App extends Component {

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY }&units=metric`);
		const data = await api_call.json();
		console.log(data);
	}

	render() {
		return (
			<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			
			<Title />
			<Form getWeather={this.getWeather} />
			<Weather />
			</div>
		);
	}
}

export default App;
