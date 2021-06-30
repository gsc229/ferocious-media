import React, { useContext } from 'react';
import { LocationsContext } from '../../Contexts/LocationsContext';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarGridList() {
  const classes = useStyles();

  const { data } = useContext(LocationsContext)


  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {data.map((tile) => (
          <GridListTile key={tile._id}>
            <img
            style={{cursor: 'pointer'}}
            src={`https://ospadmin.ferociousmediaweb.com/uploads/${tile.featuredimg}`} 
            alt={tile.propertytitle} />
    

            <GridListTileBar
              title={tile.propertytitle}
              subtitle={<span>{tile.propertyaddress}</span>}
              actionIcon={
                <IconButton  aria-label={`info about ${tile.propertytitle}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}