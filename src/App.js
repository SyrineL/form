import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "./components/Input"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

handleEmailChange= (event) => {
  this.setState({email : this.state.email = event.target.value})
}
handlePasswordChange = (event) => {
  this.setState({password : this.state.password = event.target.value})
}
handleRememberMeChange = (event) => {
  this.setState({rememberMe : this.state.rememberMe = event.target.value})
}
handleSubmit = (event) => {
  this.setState({isSubmitted : this.state.isSubmitted = event.target.value})
}

  render() {
  return (
    <>
      <div><h1>Login</h1></div>
        <form >
          <label>
          Email Adress
          <Input type="email" onChange={this.handleEmailChange} />
          </label>
          <label>
            Password
          <Input type="password" onChange={this.handlePasswordChange } />
          </label>
          <label>
          <Input type="checkbox" onChange={this.handleRememberMeChange } />
            <p>Remember Me</p>
          </label>
          <label>
            
          <Input type="submit" onChange={this.handleSubmit } />
          </label>
        </form>
    </>
    
  );
  }
}

export default App;
