import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import ItemsLarge from './ItemsLarge'
import ItemsSmall from './ItemsSmall'
import logo from '../../images/one-stop-logo (1).png'
import { makeStyles } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const listItems = ["Home", "About Us", "Our Team", "Our Clients", "Message For Develpers", "News", "Press"]

const useStyles = makeStyles((theme) => {
  return{
    topBar: {
      backgroundColor: 'rgba(0,0,0,.9)',
      display: 'flex',
      justifyContent: 'center',
      height: '150px',
      position: 'fixed'
    },
    logo: {
      width: '170px',
      border: '1px solid green'
    },
    contactBtn: {
      backgroundColor: 'white'
    }
  }
})

const TopBar = () => {

  const isSmall = useMediaQuery('(max-width:955px)')
  const classes = useStyles()

  return (
    <AppBar
    elevation={0} 
    className={classes.topBar}>
      <Grid
      alignItems='center'
      justify='space-between'
      container 
      spacing={2}>
        <Grid style={{border: '1px solid hotpink'}} item xs={3} >
          <img 
          className={classes.logo}
          src={logo} alt="Logo" />
        </Grid>
        <Grid style={{border: '1px solid hotpink'}}  item xs={9} >
          {!isSmall && <ItemsLarge listItems={listItems} />}
          {isSmall &&  <ItemsSmall listItems={listItems} />
          }
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default TopBar
