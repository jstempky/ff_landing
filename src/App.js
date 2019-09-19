import React, {Component} from 'react';
import logo from './resources/logo.png';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
    console.log(this.state)
  }

  handleSubmit(event) {
    axios.post('fitfort.herokuapp.com/emailsignup', {
      email: this.state.email,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            FitFort helps Fitness Professionals/Personal Trainers sustain longer client relationships by making it easier to build personalized fitness plans and helping clients see their progress.
          </h3>
          <form className="container-style">
            <input
              className="input-style"
              placeholder="enter your email here!"
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              name="email"
            />
            <input
              className="button-style"
              type="submit"
              value="Sign up to be a pilot user!"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
