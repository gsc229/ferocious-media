import React, {useContext} from 'react'
import { LocationsContext } from '../../Contexts/LocationsContext'
import PropertyCard from '../PropertyCard/PropertyCard'

const Bottom = () => {

  const { data } = useContext(LocationsContext)

  return (
    <div className='warehouse-bottom'>
      <div className="property-card-container">
        {data.map(property => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  )
}

export default Bottom
