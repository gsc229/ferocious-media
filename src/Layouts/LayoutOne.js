import React from 'react'
import TopBar from '../Components/TopBar/TopBar'

const LayoutOne = ({ children }) => {
  return (
    <div className='layout-one'>
      <TopBar />
      { children }
    </div>
  )
}

export default LayoutOne
