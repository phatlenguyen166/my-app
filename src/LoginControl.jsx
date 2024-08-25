import React from 'react'
class LoginBtn extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}
class LogoutBtn extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }
  handleLogout = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }))
  }
  handleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }))
  }
  render() {
    const { isLoggedIn } = this.state
    const { hidden } = this.props
    if (hidden) {
      return null
    }
    return (
      <div className='login-control'>
        {isLoggedIn ? (
          <LogoutBtn onClick={this.handleLogout} />
        ) : (
          <LoginBtn onClick={this.handleLogin} />
        )}
      </div>
    )
  }
}

export default LoginControl
