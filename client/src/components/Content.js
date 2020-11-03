import React from 'react'

const Content = () => {
  const classes = {
    wrapper: 'flex-grow overflow-y-auto bg-orange-100 px-5',
    pageTitle: 'm-8 text-gray-600 font-bold text-xl',
    data: 'm-8 bg-white h-screen',
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.pageTitle}>Content</h2>
      <div className={classes.data}>Data</div>
    </div>
  )
}

export default Content
