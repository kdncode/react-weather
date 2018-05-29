import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City" />
        <button> Get Weather </button>
    </form>
)
// import React, { Component } from 'react';

// class Form extends Component {
//     render() {
//         return (
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="City" />
//                 <button>Get Weather</button>
//             </form>
//         );
//     }
// }

export default Form;