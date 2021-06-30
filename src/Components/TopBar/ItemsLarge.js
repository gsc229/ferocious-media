import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export const useStyles = makeStyles((theme) => {
  return{
    itemList: {
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
      fontWeight: '400',
    },
    contactBtn: {
      backgroundColor: 'white',
      borderRadius: 0,
      padding: '10px',
      fontFamily: 'var(--fdos)'
    }
  }
})

const ItemsLarge = ({ listItems }) => {

  const classes = useStyles()

  return (
    <Grid
    justify='center'
    alignItems='center'
    container>
        <Grid 
        alignItems='center'
        className={classes.itemList} item xs={8}>
          {listItems.map(item => (
            <Link
            key={item}
            className={`${classes.item} link-item-hover-effect`}
            to={item !== "Home" ? 'warehouse-search' : '/'}>
              {item.toUpperCase()}
            </Link>
          ))}
        </Grid>
        <Grid 
        alignItems='center'
        item xs={2}>
          <div
          className='btn-item-hover-effect'
          >
            <span className='btn-span-hover-effect'>CONTACT US</span>
          </div>
        </Grid>
    </Grid>
  )
}

export default ItemsLarge


