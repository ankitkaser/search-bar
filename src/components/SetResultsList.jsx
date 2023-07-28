import React from 'react'
import './setresultlist.css'
import { SearchResult } from './SearchResult'

const SetResultsList = ({results}) => {
  return (
    <div className='results-list'>
        {
           results.map((result, id) => {
            return <div key={id} className='search-result' onClick={(e) => alert(`name clicked ${result.name}`)}>{result.name}</div>
           })
        }
        
    </div>
  )
}

export default SetResultsList