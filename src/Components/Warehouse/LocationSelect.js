import React, {useContext} from 'react'
import { LocationsContext } from '../../Pages/LocationsContext'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const LocationSelect = () => {

  const { setFilters, filters } = useContext(LocationsContext)

  const handleSelect = (e) => {
    setFilters({...filters, loc: e.target.value})
  }

  const locations = ["All Locations", "Brooklyn", "Queens", "Long Island", "Bronx"]

  return (
    <div className='form-div location-select'>
      <TextField
        id="location-select-text"
        select
        label="Location"
        onChange={handleSelect}
        value={filters.loc}
      >
        {locations.map(_loc => (
          <MenuItem key={_loc} value={_loc}>
            {_loc}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}

export default LocationSelect
