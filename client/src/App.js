import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  const classes = {
    wrapper:
      'overflow-x-hidden h-screen grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-1 md:grid-cols-1',
    main: 'overflow-y-auto flex flex-col lg:col-span-5',
  }

  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <main className={classes.main}>
        <Navbar />
        <Content />
      </main>
    </div>
  )
}

export default App
