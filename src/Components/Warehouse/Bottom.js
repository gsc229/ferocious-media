import React, {useContext} from 'react'
import { LocationsContext } from '../../Pages/LocationsContext'

const Bottom = () => {

  const data = useContext(LocationsContext)
  console.log({data})
  return (
    <div className='warehouse-bottom'>
      
    </div>
  )
}

export default Bottom
