import React, { Component } from 'react'
import Popup from './Components/popup'
import { emails } from './Components/UserFunctions'

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
            <div className="App">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Signup for Fitfort Beta</h1>
                <div className="form-group">
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <button 
                  onClick={this.togglePopup.bind(this)}
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Register

                  {this.state.showPopup ?  
                  <Popup  
                    text='You have sucessfully registered for the Fitfort Beta'  
                      closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}   
                </button>
              </form>
            </div>
      )
    }
  }


  
  export default App