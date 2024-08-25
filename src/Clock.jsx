import React from 'react'

const list = ['1', '2', '3']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}

export default class Clock extends React.Component {
  // chạy lần đầu
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      list: [],
      darkMode: false
    }
    this.date = '24/08/2024'
  }

  componentDidMount() {
    fetchApi().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        list: res
      }))
    })
  }

  componentDidUpdate() {
    if (this.state.darkMode) {
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }

  getTime = () => {
    const newState = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }
  render() {
    console.log(this.state)

    return (
      <div>
        <h1>Hello, world! {this.props.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id='seconds'>It is {this.state.seconds.created}</h2>
        <h3>{this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
      </div>
    )
  }
}
