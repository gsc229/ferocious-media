import React, {useContext} from 'react'
import { LocationsContext } from '../../Contexts/LocationsContext'
import { warehouseTypes } from './typeData'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const TypeSelect = () => {

  const { setFilters, filters } = useContext(LocationsContext)
  
  const handleSelect = (e) => {
    setFilters({...filters, cat: e.target.value})
  }

  return (
    <div className="form-div type-select">
      <TextField
        select
        label="Space Type"
        onChange={handleSelect}
        value={filters.cat}
      >
        {warehouseTypes.map(_type => (
          <MenuItem key={_type} value={_type}>
            {_type}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}

export default TypeSelect
