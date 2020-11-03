import React from 'react'

const Content = () => {
  const classes = {
    wrapper: 'flex-grow overflow-y-auto bg-orange-100',
    data: 'm-5 bg-white h-screen',
  }

  return (
    <div className={classes.wrapper}>
      <h1>Content</h1>
      <div className={classes.data}>Data</div>
    </div>
  )
}

export default Content
