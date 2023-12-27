import { useParams } from 'react-router-dom';
import React from 'react'

const SearchPage = () => {
  let {id} = useParams();
  return (
    <div>{id}</div>
  )
}

export default SearchPage