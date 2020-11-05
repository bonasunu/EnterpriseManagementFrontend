import React from 'react'

const Sidebar = () => {
  const classes = {
    title:
      'text-red-500 font-extrabold text-center text-2xl hidden sm:hidden md:hidden lg:block xl:block w-full mt-5 mb-5 px-5',
    linkWrapper: 'w-full text-left flex flex-col',
    link:
      'mt-1 mb-1 px-6 py-3 text-lg font-semibold w-full h-12 hover:bg-orange-200 hover:text-gray-800 text-gray-600',
  }

  return (
    <>
      <div className={classes.title}>
        <h1>React Dashboard</h1>
      </div>
      <div className={classes.linkWrapper}>
        <a className={classes.link} href="/">
          Dashboard
        </a>
        <a className={classes.link} href="/">
          My Task
        </a>
        <a className={classes.link} href="/">
          Project
        </a>
        <a className={classes.link} href="/">
          Data
        </a>
        <a className={classes.link} href="/">
          Documents
        </a>
      </div>
    </>
  )
}

export default Sidebar
