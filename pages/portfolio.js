import React, { Component } from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'
import BaseLayout from '../components/layouts/BaseLayout'

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    const postId = query.id
    let post = {}
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      post = response.data
    } catch (e) {
      throw new Error(e.message)
    }

    return { post }
  }

  render() {
    return (
      <BaseLayout>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p> 
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio)
 