import React, { useContext } from 'react';
import { LocationsContext } from '../../Contexts/LocationsContext';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 500,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    height: 300
  },
});

export default function MediaCard({property}) {
  const classes = useStyles()

  const history = useHistory()

  const { setSelectedProperty } = useContext(LocationsContext)

  const handleClick = () => {
    setSelectedProperty(property)
    history.push(`/property/${property._id}`)
  }

  return (
    <Card onClick={handleClick} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://ospadmin.ferociousmediaweb.com/uploads/${property.featuredimg}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {property.propertytitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div dangerouslySetInnerHTML={{__html: property.propertydetails }}></div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleClick}  size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

