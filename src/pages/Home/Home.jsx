import React from 'react'
import './Home.css'

import { KeyFeatures } from '../../components'
import { Header } from '../../containers'

// EFFECTIVELY ACTING AS THE NEW APP.JSX FOR THE HOME PAGE

const Home = () => {
  return (
    <div className='page home-page'>
      <KeyFeatures />
      <Header />
    </div>
  )
}

export default Home