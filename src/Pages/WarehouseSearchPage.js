import React, { useState, useEffect } from 'react'
import axiosRequest from '../utils/axiosReques'
import LayoutOne from '../Layouts/LayoutOne'
import Top from '../Components/Warehouse/Top'
import Bottom from '../Components/Warehouse/Bottom'
import { LocationsContext } from './LocationsContext'
import data from '../data.json'

const WarehouseSearchPage = () => {
  const initialFiliters = {
    loc: "All Locations",
    cat: "All Types"
  }
  const [allData, setAllData] = useState([])
  const [filters, setFilters] = useState(initialFiliters)

  const filteredData = () => {
    return allData.filter(prop => prop.propertylocation.includes(filters.loc) && prop.propertycat.includes(filters.cat))
  }


  

  useEffect(() => {
    // currently being blocked by CORS policy setting JSON data in the .catch

    const loadData = async () => {
      const lsData = await JSON.parse(localStorage.getItem('data'))

      if(!lsData){
        axiosRequest().get('/')
        .then(response => {
          console.log({response})
          setAllData(response.data)
          localStorage.setItem('data', JSON.stringify(response.data))
        })
        .catch(error => {
          // Temporay for CORS blocking
          console.log({error, JSONdata: data})
          setAllData(data)
          localStorage.setItem('data', JSON.stringify(data))
        })
      } else{
        setAllData(lsData)
      }
    }
    loadData()
  }, [])

  console.log({allData})
  return (
    <LayoutOne>
      <div className="page warehouse-search-page">
        <LocationsContext.Provider value={{ data: filteredData(), filters, setFilters, initialFiliters }}>
          <Top />
          <Bottom />
        </LocationsContext.Provider>
      </div>
    </LayoutOne>
  )
}

export default WarehouseSearchPage
