import React from 'react'
import axios from 'axios'
// import Link from 'next/link'
import BaseLayout from '../components/layouts/BaseLayout'
import { Link } from '../routes'



class Portfolios extends React.Component {
  static async getInitialProps({ req }) {
    let posts = {}
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = response.data
    } catch (e) {
      throw new Error(e.message)
    }
    // const userAgent = req ? req.headers['user-agent']: navigator.userAgent
    // console.log(userAgent)
    return { posts: posts.splice(0, 15) }
  }

  renderPosts(posts) {
    return posts.map(item => (
      <li key={item.id}>
        <Link route={`portfolio/${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </li>
    ))
  }

  render() {
    return (
      <BaseLayout>
        <h1>Portfolios</h1>
        <ul>
          {this.renderPosts(this.props.posts)}
        </ul>
      </BaseLayout>
    )
  }
} 

export default Portfolios
