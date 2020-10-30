import React from 'react'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="h-screen overflow-hidden grid grid-cols-6">
        <SideMenu />
        <div className="bg-gray-300 col-span-5">
          <p>World</p>
        </div>
      </main>
    </>
  )
}

export default App
