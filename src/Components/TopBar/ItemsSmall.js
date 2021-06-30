import React from 'react'
import { Link } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import { border } from '@material-ui/system';

export const useStyles = makeStyles((theme) => {
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
      color: 'black',
      fontSize: '16px',
      fontFamily: 'var(--fdos)',
      fontWeight: '200'
    },
    ddBtn: {
      color: 'white',
      borderRadius: '50%',
      backgroundColor: 'gray'
    }
  }
})


const ItemsSmall = ({ listItems }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles()

  return (
    <div>
      <Button className={classes.ddBtn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
        <Hamburger />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {listItems.map(item => {
          return item !== "Contact Us"
          ? <MenuItem>
              <Link
                key={item}
                className={`${classes.item} link-item-hover-effect`}
                to={item !== "Home" ? 'warehouse-search' : '/'}>
                    {item.toUpperCase()}
              </Link>
            </MenuItem>
          : <MenuItem>
              <Button
              color='white'
              className={`${classes.item} link-item-hover-effect`}>
                {item}
              </Button>
            </MenuItem>
        })}
        
      </Menu>
    </div>
  )
}

export default ItemsSmall
/* 
{listItems.map(item => {
        return item !== "Contact Us"
        ? <MenuItem>
            <Link
              key={item}
              className={`${classes.item} link-item-hover-effect`}
              to={item !== "Home" ? 'warehouse-search' : '/'}>
                  {item.toUpperCase()}
            </Link>
          </MenuItem>
        : <MenuItem>
            <Button
            color='white'
            className={`${classes.item} link-item-hover-effect`}>
              {item}
            </Button>
          </MenuItem>
      })}


        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>

*/