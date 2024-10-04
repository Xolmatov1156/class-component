import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Dashboard } from '../pages'

export default class CustomRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    )
  }
}
