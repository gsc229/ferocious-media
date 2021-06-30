import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import logo from '../../images/one-stop-logo (1).png'
import { Cross as Hamburger } from 'hamburger-react'
import { makeStyles } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { width } from '@material-ui/system'

const listItems = ["Home", "About Us", "Our Team", "Our Clients", "Message For Develpers", "News", "Press"]

 

const useStyles = makeStyles((theme) => {
  return{
    topBar: {
      backgroundColor: 'rgba(0,0,0,.8)',
      display: 'flex',
      justifyContent: 'center',
      height: '150px',
      position: 'fixed'
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 'fit-content',
      border: '1px solid yellow'
    },
    item: {
      marginRight: '20px',
      textDecoration: 'none',
      color: 'white',
      fontSize: '16px',
      fontFamily: 'var(--fdos)',
      fontWeight: '200'
    },
    logo: {
      width: '170px',
      border: '1px solid green'
    }
  }
})

const TopBar = () => {

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
          <Toolbar className={classes.toolBar}>
            {listItems.map(item => (
              <Link
              className={`${classes.item} link-item-hover-effect`}
              to={item !== "Home" ? 'warehouse-search' : '/'}>
                  {item.toUpperCase()}
              </Link>
            ))}
          </Toolbar>
        </Grid>
        {/* <Hamburger /> */}
      </Grid>
    </AppBar>
  )
}

export default TopBar
