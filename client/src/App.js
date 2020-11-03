import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  const classes = {
    wrapper: 'grid grid-cols-6',
  }

  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <Navbar />
      <Content />
    </div>
  )
}

export default App
