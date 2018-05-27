import React from 'react';

const Weather = (props) => (
    <div>
        {props.city && <p>City: {props.city}</p>}
        {props.country && <p>Country: {props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions: {props.description}</p>}
        {props.error && <p>{props.error}</p>}               
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