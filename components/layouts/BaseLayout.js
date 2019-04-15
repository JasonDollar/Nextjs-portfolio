import React from 'react'
import Header from '../shared/Header'

const BaseLayout = props => (
  <div>
    <Header />
    {props.children}
  </div>
)

export default BaseLayout
