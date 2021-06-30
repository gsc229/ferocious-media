import React, {useContext} from 'react'
import TypeSelect from './TypesSelect'
import LocationSelect from './LocationSelect'
import { LocationsContext } from '../../Pages/LocationsContext'
import FormControl from '@material-ui/core/FormControl'

const Top = () => {

  const { filters, setFilters, initialFiliters } = useContext(LocationsContext)


  return (
    <div className='warehouse-top'>
      <div className='text-container'>
        <h1>Our Spaces</h1>
        <h3>{filters.loc}</h3>
      </div>
      <div className="select-container">
          <form>
            <LocationSelect />
            <TypeSelect />
            <div className='form-div reset-button'>
              <button onClick={() => setFilters(initialFiliters) } className="reset-btn">
                Reset Filter
              </button>
            </div>
          </form>

      </div>
    <div className="warehouse-top-overlay"></div>
    </div>
  )
}

export default Top
