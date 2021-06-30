import React, { useContext } from 'react'
import { LocationsContext } from '../Contexts/LocationsContext'
import LayoutOne from '../Layouts/LayoutOne'
import Carousel from '../Components/Carousel/Carousel'

const PropertyPage = () => {

  const { selectedProperty } = useContext( LocationsContext )

  console.log({ selectedProperty })

  return (
    <LayoutOne>
      <div className='selected-property-page'>
        <div className='property-page-inner'>
          {selectedProperty.gallery.length <= 0 && <h2 className='no-images-msg'>Sorry. There are no images for this property. </h2>}
          <h1>{selectedProperty.propertytitle}</h1>
          <p>{selectedProperty.propertyaddress}</p>
          {selectedProperty.gallery.length > 0 && <Carousel />}
          <div dangerouslySetInnerHTML={{__html: selectedProperty.propertydetails }} className="details-container">

          </div>
        </div>
      </div>
    </LayoutOne>
  )
}

export default PropertyPage
