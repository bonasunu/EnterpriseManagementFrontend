import React from 'react'

const accountMenu = ({ classes }) => {
  return (
    <>
      <a className={classes} href="/">
        My Account
      </a>
      <a className={classes} href="/">
        Log Out
      </a>
    </>
  )
}

export default accountMenu
