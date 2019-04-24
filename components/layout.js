import React, {Component} from 'react'
import Head from 'next/head'
import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {children} = this.props

    return (
      <React.Fragment>
        <Head>
          <title>AWS Lambda Serverless Example</title>
        </Head>
        <div style={layoutStyle}>
          <Header />
          {children}
        </div>
      </React.Fragment>
    )
  }
}

