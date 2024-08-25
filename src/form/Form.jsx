import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      food: 'c',
      marriage: false
    }
  }

  handleChange = (e) => {
    const { target } = e
    console.log(target)

    const value = target.value === 'checkbox' ? target.checked : target.value
    const { name } = target
    // console.log(name)

    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <textarea
            name='address'
            value={this.state.address}
            onChange={this.handleChange}
          />
          <select
            value={this.state.food}
            onChange={this.handleChange}
            name='food'
          >
            <option value='a'>a</option>
            <option value='b'>b</option>
            <option value='c'>c</option>
            <option value='d'>d</option>
          </select>
          <input
            type='checkbox'
            name='marriage'
            checked={this.state.marriage}
            onChange={this.handleChange}
          />

          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default Form
