import React from 'react'
import AccountMenu from './AccountMenu'

const Navbar = ({ burgerBtn, burgerMenu }) => {
  const classes = {
    nav:
      'sticky top-0 flex flex-wrap sm:justify-start md:justify-start md:justify-end xl:justify-end bg-red-600 border-b-4 border-red-700 h-12',
    btn: 'h-12 w-8 fill-current text-white outline-none',
  }

  return (
    <nav className={classes.nav}>
      <button onClick={burgerBtn} type="button">
        <svg className={classes.btn} viewBox="0 0 24 24">
          {burgerMenu ? (
            <path
              fillRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
      <AccountMenu />
    </nav>
  )
}

export default Navbar
