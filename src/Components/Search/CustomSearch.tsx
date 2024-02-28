import React from 'react'
import { Form } from 'react-bootstrap'

const CustomSearch = ({setSearch}:{setSearch:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div>
      <Form.Control type="search" onChange={(e)=>setSearch(e.target.value)}></Form.Control>
    </div>
  )
}

export default CustomSearch
