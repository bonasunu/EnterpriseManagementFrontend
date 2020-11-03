import React from 'react'

const Navbar = () => {
  const classes = {
    nav:
      'sticky top-0 flex items-center justify-between flex-wrap bg-gray-800 p-6',
  }

  return <nav className={classes.nav}></nav>
}

export default Navbar
