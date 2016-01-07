import page from 'page'
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './'

page('/', function (ctx, next) {
  ReactDOM.render(<Home />, document.querySelector('#content'))
})
