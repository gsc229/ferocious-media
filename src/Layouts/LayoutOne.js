import React from 'react'
import Container from '@material-ui/core/Container'

const LayoutOne = ({ children }) => {
  return (
    <div className='layout-one'>
      {/* Menu/App Bar */}
      { children }
    </div>
  )
}

export default LayoutOne
