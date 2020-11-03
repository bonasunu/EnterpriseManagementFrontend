import React from 'react'

const Navbar = () => {
  const classes = {
    nav:
      'sticky top-0 flex flex-wrap justify-end bg-red-600 border-b-4 border-red-700 h-16',
    link: 'text-gray-200 ml-1 mr-1 px-1 py-3',
  }

  return (
    <nav className={classes.nav}>
      <p className={classes.link}>Hi, Jane Doe!</p>
      <p className={classes.link}>My Account</p>
      <p className={classes.link}>Log Out</p>
    </nav>
  )
}

export default Navbar
