import React, { useState, useEffect } from 'react'
import axiosRequest from './utils/axiosReques'
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import { LocationsContext } from './Contexts/LocationsContext';
import HomePage from './Pages/HomePage';
import WarehouseSearchPage from './Pages/WarehouseSearchPage';
import PropertyPage from './Pages/PropertyPage';
import data from './data.json'

function App() {

  const initialFiliters = {
    loc: "All Locations",
    cat: "All Types"
  }
  const [allData, setAllData] = useState([])
  const [selectedProperty, setSelectedProperty] = useState(null)
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


  return (
    <div className="App">
      <LocationsContext.Provider 
        value={{ 
          data: filteredData(), 
          filters, 
          setFilters, 
          initialFiliters,
          selectedProperty,
          setSelectedProperty
         }}>
          <Switch>
            <Route exact path='/'>
              <WarehouseSearchPage />
            </Route>
            <Route path='/warehouse-search'>
              <WarehouseSearchPage />
            </Route>
            <Route path='/property/:propertyId'>
              <PropertyPage />
            </Route>
          </Switch>
      </LocationsContext.Provider>
    </div>
  );
}

export default App;
