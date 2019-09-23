import React, { Component } from 'react'
import Popup from './Components/popup'
import { emails } from './Components/UserFunctions'
import './App.css';

import logo from './resources/logo.png';

class App extends Component {
    constructor() {
      super()
      this.state = {
        showPopup: false,
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

      const descriptionText = "FitFort helps Fitness Professionals/Personal Trainers sustain longer client relationships by making it easier to build personalized fitness plans and helping clients see their progress."

      emails(newEmail).then(_res => {
          return (
          <div className='popup'>
          <div className='popup\_inner'>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
          </div>
          );
      })
    }

    togglePopup() {
      this.setState({
           showPopup: !this.state.showPopup
      });
       }

    render() {
      return (
            <div className="appStyle">
              <div className="logoBucket">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div>
                <p className="overviewStyle">FitFort helps Fitness Professionals/Personal Trainers sustain longer client relationships by making it easier to build personalized fitness plans and helping clients see their progress.</p>
              </div>
              {this.state.showPopup ?
              <Popup
                text='You have sucessfully registered for the Fitfort Beta!'
                  closePopup={this.togglePopup.bind(this)}
              />
              : null
              }
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="App-header">Signup for Fitfort Beta!</h1>
                <div className="formContainterStyle">
                  <input
                    type="text"
                    className="inputStyle"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  onClick={this.togglePopup.bind(this)}
                  type="submit"
                  className="submitStyle"
                >
                Sign Up!
                </button>
              </form>
            </div>
      )
    }
  }



  export default App
