import React from 'react';

const Weather = (props) => (
    <div className="weather__info">
        {props.city && <p className="weather__key">City: <span className="weather__value"> {props.city} </span></p>}
        {props.country && <p className="weather__key">Country: <span className="weather__value"> {props.country} </span></p>}
        {props.temperature && <p className="weather__key">Temperature: <span className="weather__value"> {props.temperature} &#8457; </span></p>}
        {props.humidity && <p className="weather__key">Humidity: <span className="weather__value"> {props.humidity} </span></p>}
        {props.description && <p className="weather__key">Conditions: <span className="weather__value">{props.description} <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon"/></span></p>}
        {props.error && <p className="weather__key"><span className="weather__error">{props.error}</span></p>}               
    </div>
)

// import React, { Component } from 'react';

// class Weather extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.city && <p>City: {this.props.city}</p>}
//                 {this.props.country && <p>Country: {this.props.country}</p>}
//                 {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//                 {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//                 {this.props.description && <p>Conditions: {this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}               
//             </div>
//         );
//     }
// }

export default Weather;