import React from 'react'

const Navbar = () => {
  const classes = {
    nav:
      'sticky top-0 flex items-center justify-between flex-wrap bg-red-600 p-6 border-b-4 border-red-700',
  }

  return <nav className={classes.nav}></nav>
}

export default Navbar
