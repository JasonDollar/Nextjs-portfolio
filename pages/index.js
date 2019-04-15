import React, { Component } from 'react'
import axios from 'axios'
import BaseLayout from '../components/layouts/BaseLayout'

export class Index extends Component {
  state = {
    title: 'Index page'
  }

  static async getInitialProps({req}) {
    let userData = {}
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      userData = response.data
    } catch (e) {
      throw new Error(e.message)
    }
    console.log(userData)
    // const userAgent = req ? req.headers['user-agent']: navigator.userAgent
    // console.log(userAgent)
    return {userData}
  }

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
      <BaseLayout>
        <h1>{this.state.title}</h1>
        <button onClick={() => {this.setState({title: 'lol'})}}>Change Title</button>
        <p>{this.props.userData.title}</p>
      </BaseLayout>
    )
  }
}

export default Index
