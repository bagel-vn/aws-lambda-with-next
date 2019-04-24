import React, {Component} from 'react'
import Layout from '../components/layout'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <h1>AWS Lambda with Next.JS</h1>
        <br />
        <img src={'/static/nextjs.png'} alt={'Node.js logo'} />
      </Layout>
    )
  }
}
