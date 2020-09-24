import { format } from 'crypto-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './common/style/frame.css'
import {Provider} from 'react-redux'
import store from './store'
import {HashRouter,BrowserRouter,Route} from 'react-router-dom'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter

ReactDOM.render(
    <Provider store={store}>
     <Router>
        <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
    )