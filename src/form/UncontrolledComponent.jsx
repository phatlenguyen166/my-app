import React, { Component, createRef } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.fileInput = createRef()

    this.state = {
      selectedFile: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.input.current.value)
    const formDate = new FormData()
    formDate.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
  }

  onFileChange = (e) => {
    console.log(e.target.files)

    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=''>
            Name:
            <input type='text' ref={this.input} defaultValue='abc' />
          </label>
          <input
            type='file'
            name='avatar'
            ref={this.fileInput}
            onChange={this.onFileChange}
          />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default UncontrolledComponent
