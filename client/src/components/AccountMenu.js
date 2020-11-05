import React from 'react'

const accountMenu = () => {
  const classes = {
    wrapper: 'block sm:hidden md:hidden lg:block xl:block',
    link: 'text-gray-200 ml-1 mr-1 px-1 py-3',
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.link}>Hi, Jane Doe!</p>
      <p className={classes.link}>My Account</p>
      <p className={classes.link}>Log Out</p>
    </div>
  )
}

export default accountMenu
