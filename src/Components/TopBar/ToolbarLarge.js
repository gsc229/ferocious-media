import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => {
  return{
    toolBar: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: 'fit-content',
      border: '1px solid yellow'
    },
    item: {
      marginRight: '15px',
      textDecoration: 'none',
      color: 'white',
      fontSize: '16px',
      fontFamily: 'var(--fdos)',
      fontWeight: '200'
    }
  }
})

const ToolbarLarge = ({ listItems }) => {

  const classes = useStyles()

  return (
    <Toolbar className={classes.toolBar}>
      {listItems.map(item => {
        return item !== "Contact Us"
        ? <Link
          key={item}
          className={`${classes.item} link-item-hover-effect`}
          to={item !== "Home" ? 'warehouse-search' : '/'}>
              {item.toUpperCase()}
          </Link>
        : <Button
          color='white'
          className={`${classes.item} link-item-hover-effect`}>
            {item}
          </Button>
      })}
    </Toolbar>
  )
}

export default ToolbarLarge


