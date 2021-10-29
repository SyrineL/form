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
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
    const regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)


    if (regex) {
        this.setState({ emailIsValid: true })
    }
}
    handlePasswordChange = (e) => {
      this.setState({ password: e.target.value })

      if (e.target.value.length > 5) {
          this.setState({ passwordIsValid: true })
      }
    }

    handleRememberMe = (e) => {
      if (e) {
          this.setState({ rememberMe: true })
      }
    }

    onSubmit = (e) => {
      e.preventDefault()
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
          <Input type="checkbox" onChange={this.handleRememberMe } />
            <p>Remember Me</p>
          </label>
          <label>
          <Input type="submit" onChange={this.onSubmit } />
          </label>
        </form>
    </>
    
  );
  }
}

export default App;
