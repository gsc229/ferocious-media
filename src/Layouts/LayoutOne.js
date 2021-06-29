import React from 'react'
import Container from '@material-ui/core/Container'

const LayoutOne = ({ children }) => {
  return (
    <Container size="sm">
      { children }
    </Container>
  )
}

export default LayoutOne
