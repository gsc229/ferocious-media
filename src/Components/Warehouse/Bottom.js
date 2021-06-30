import React, {useContext} from 'react'
import { LocationsContext } from '../../Contexts/LocationsContext'
import ImageGrid from '../ImageGrid/ImageGrid'
import PropertyCard from '../PropertyCard/PropertyCard'

const Bottom = () => {

  const { data, filters } = useContext(LocationsContext)
  console.log({filters, data})
  return (
    <div className='warehouse-bottom'>
      {/* <pre>{JSON.stringify({filters, data}, null, 2)}</pre> */}
      {/* <ImageGrid /> */}
      <div className="property-card-container">
        {data.map(property => (
          <PropertyCard property={property} />
        ))}
      </div>
    </div>
  )
}

export default Bottom
