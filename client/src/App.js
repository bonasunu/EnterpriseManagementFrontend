import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false)

  const handleBurgerMenu = () => setBurgerMenu(!burgerMenu)

  const classes = {
    wrapper:
      'overflow-x-hidden h-screen grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-1 md:grid-cols-1',
    main: 'overflow-y-auto h-auto flex flex-col lg:col-span-5',
    sidebarWeb:
      'bg-white hidden sm:hidden md:hidden lg:inline xl:inline xl:col-span-1 lg:col-span-1',
    sidebarMobile: 'sticky bg-white lg:hidden xl:hidden',
    sidebarMobileHid: 'hidden',
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.sidebarWeb}>
        <Sidebar />
      </div>
      <main className={classes.main}>
        <Navbar burgerBtn={handleBurgerMenu} burgerMenu={burgerMenu} />
        <div
          className={
            burgerMenu ? classes.sidebarMobile : classes.sidebarMobileHid
          }
        >
          <Sidebar />
        </div>
        <Content />
      </main>
    </div>
  )
}

export default App
