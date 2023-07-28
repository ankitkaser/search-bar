import React, { useState } from 'react'
import './app.css'
import SearchBar from './components/SearchBar'
import SetResultsList from './components/SetResultsList'

const App = () => {
  const [results, setResults] = useState([])
  return (
    <div className='app'>
     <div className='search-container'>
      <SearchBar setResults={setResults}/>
      <SetResultsList results={results}/>
     </div>

    </div>
  )
}

export default App