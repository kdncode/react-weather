import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && <p>City: {this.props.city}</p>}
                {this.props.country && <p>Country: {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {/* <p>City: {this.props.error}</p> */}
            </div>
        );
    }
}

export default Weather;