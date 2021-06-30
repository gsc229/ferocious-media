import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import ToolbarLarge from './ToolbarLarge'
import logo from '../../images/one-stop-logo (1).png'
import { Cross as Hamburger } from 'hamburger-react'
import { makeStyles } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const listItems = ["Home", "About Us", "Our Team", "Our Clients", "Message For Develpers", "News", "Press", "Contact Us"]

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
        <Grid style={{border: '1px solid hotpink'}} item xs={4} >
          <img 
          className={classes.logo}
          src={logo} alt="Logo" />
        </Grid>
        <Grid style={{border: '1px solid hotpink'}}  item xs={8} >
          {!isSmall && <ToolbarLarge listItems={listItems} />}
          {isSmall && <h1>SMALL</h1>}
        </Grid>
        {/* <Hamburger /> */}
      </Grid>
    </AppBar>
  )
}

export default TopBar
