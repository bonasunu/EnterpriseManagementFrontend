import React from 'react'

const Content = () => {
  const classes = {
    wrapper: 'flex-grow overflow-y-auto bg-red-200',
    data: 'bg-blue-200 h-screen',
  }

  return (
    <div className={classes.wrapper}>
      <h1>Content</h1>
      <div className={classes.data}>Data</div>
    </div>
  )
}

export default Content
