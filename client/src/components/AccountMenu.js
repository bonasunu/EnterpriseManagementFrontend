import React from 'react'

const accountMenu = ({ classes }) => {
  // const classes = {
  //   link:
  //     'hidden sm:hidden md:hidden lg:block xl:block text-gray-200 ml-1 mr-1 px-1 py-3',
  // }

  return (
    <>
      <p className={classes}>My Account</p>
      <p className={classes}>Log Out</p>
    </>
  )
}

export default accountMenu
