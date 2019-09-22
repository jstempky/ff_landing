import logo from './resources/logo.png';
import './App.css';
import React, { Component } from 'react'
import { emails } from './Components/UserFunctions'

class App extends Component {
    constructor() {
      super()
      this.state = {
        email: '',
        errors: {}
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
      e.preventDefault()
  
      const newEmail = {
        email: this.state.email
      }
  
      emails(newEmail).then(_res => {
        this.props.history.push(`/thanks`)
      })
    }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <h3>
            FitFort helps Fitness Professionals/Personal Trainers sustain longer client relationships by making it easier to build personalized fitness plans and helping clients see their progress.
          </h3>
                  <form className="container-style">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Sign up to be a pilot user!"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                 <input
              className="button-style"
              type="submit"
              value="Sign up to be a pilot user!"
            />
          </form>
        </header>
      </div>
      )
    }
  }
  
  export default App
