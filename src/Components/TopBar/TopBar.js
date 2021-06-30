import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Bottom from './Bottom'
import ItemsLarge from './ItemsLarge'
import ItemsSmall from './ItemsSmall'
import logo from '../../images/one-stop-logo (1).png'
import { makeStyles } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const listItems = ["Home", "About Us", "Our Team", "Our Clients", "Message For Develpers", "News", "Press"]

const useStyles = makeStyles((theme) => {
  return{
    topBar: {
      backgroundColor: 'transparent'
    },
    appBarTop: {
      backgroundColor: 'rgba(0,0,0,.9)',
      display: 'flex',
      justifyContent: 'center',
      height: '150px'
    },
    gridContainer: {
      width: '90%',
      margin: 'auto'
    },
    logo: {
      width: '170px',
      cursor: 'pointer'
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
      <div
      className={classes.appBarTop}>
        <Grid
        className={classes.gridContainer}
        alignItems='center'
        justify='space-between'
        container>
          <Grid item xs={3} >
            <img 
            className={classes.logo}
            src={logo} alt="Logo" />
          </Grid>
          <Grid  item xs={9} >
            {!isSmall && <ItemsLarge listItems={listItems} />}
            {isSmall &&  <ItemsSmall listItems={listItems} />
            }
          </Grid>
        </Grid>
      </div>
      <Bottom />
    </AppBar>
  )
}

export default TopBar
