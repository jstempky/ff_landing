import React, {Component} from 'react';
import logo from './resources/logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {email: 'fitfort@email.com'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    alert('Thank you for signing up: ' + this.state.email);
    event.preventDefault();
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
            <input className="input-style" placeholder="enter your email here!" value={this.state.value} onChange={this.handleChange} type="text" name="email" />
            <input className="button-style" type="submit" value="Sign up to be a pilot user!" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
