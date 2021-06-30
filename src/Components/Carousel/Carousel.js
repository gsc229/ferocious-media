import React, { useContext } from 'react'
import { LocationsContext } from '../../Contexts/LocationsContext'
import ImageGallery from 'react-image-gallery'

const Carousel = () => {

  const baseUrl = 'https://ospadmin.ferociousmediaweb.com/uploads/'

  const { selectedProperty } = useContext(LocationsContext)
  
  let images = []

  if(selectedProperty.gallery.length > 0){
    images = selectedProperty.gallery
    .map(imgObj => {
      if(!imgObj) return { original:'http://via.placeholder.com/640x360', thumbnail:'http://via.placeholder.com/640x360'}
      
      return { original: `${baseUrl}${imgObj.fileName}`, thumbnail: `${baseUrl}${imgObj.fileName}`}
    })
  }

  return (
    <div className="carousel-container">
      <ImageGallery items={images} />
    </div>
  )
}

export default Carousel



