import React, { useState, useEffect } from 'react'
import axiosRequest from '../utils/axiosReques'
import LayoutOne from '../Layouts/LayoutOne'
import Top from '../Components/Warehouse/Top'
import Bottom from '../Components/Warehouse/Bottom'
import { LocationsContext } from './LocationsContext'
import data from '../data.json'

const WarehouseSearchPage = () => {

  const [locationData, setLocationData] = useState([])

  useEffect(() => {
    // currently being blocked by CORS policy setting JSON data in the .catch
    axiosRequest().get('/')
    .then(response => {
      console.log({response})
      setLocationData(response.data)
    })
    .catch(error => {
      console.log({error, JSONdata: data})
      setLocationData(data)
    })

  }, [])

  console.log({locationData})
  return (
    <LayoutOne>
      <div className="page warehouse-search-page">
        <LocationsContext.Provider value={locationData}>
          <Top />
          <Bottom />
        </LocationsContext.Provider>
      </div>
    </LayoutOne>
  )
}

export default WarehouseSearchPage
