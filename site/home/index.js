import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state.loaded = false
  }

  componentDidMount () {
    this.setState({
      loaded: true
    })
  }

  render () {
    return (
      <div>
        <p>Hello, {this.props.name}</p>
        <p>Loaded: {this.state.loaded}</p>
      </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string.isRequired
}
