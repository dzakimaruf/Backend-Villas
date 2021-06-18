import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import './assets/styles/index.css'
import store from './views/store'
import { Provider } from 'react-redux'



hydrate(<Provider store={store}><App/></Provider>, document.getElementById('root'))