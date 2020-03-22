import React, {useState} from 'react'
import '../stylesheets/search.css'

function Search({api}) {

	// State
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('Year')
    
	// Functions
	const populateYears = function(e) {
		for (let y = 2020; y >= 1900; y--) {
			let option = document.createElement('option')
			option.innerText = y
			e.target.appendChild(option)
		}
	}
  const handleSubmit = function(e) {

		// Prevent default form reload
    e.preventDefault();

    // Rule out default values
    {
      let query; 
      if((title === 'Movie title...') || (title === '')) return
      else if (year === 'Any') {

        // Query api with title only
        console.log('Result : query with only title')
        query = `https://www.omdbapi.com/?s=${title}&apikey=62326ae9&`
      }
      else {

        // Query api with title and year
        console.log('Result : query with both title and year')
        query = `https://www.omdbapi.com/?s=${title}&y=${year}&apikey=62326ae9&`
      }

      api(query)
    }
  }
	
  return (
    <div className='Search'> 
      
      <form onSubmit={handleSubmit}>
        <div className='inputs'>

					<label htmlFor='title'>Title</label>
          <input 
          name='title' 
          className='title search' 
          type='text'
          value={title}
          onFocus={e => setTitle('')}
          onChange={e => setTitle(e.target.value)}>
          </input>

					<label htmlFor='year'>Year</label>
          <select 
					name='year' 
          className='years dropdown'
					onMouseOver={populateYears}
          onChange={e => setYear(e.target.value)}>
						<option defaultValue>Any</option>
          </select>
        </div> 

        <div className='submit'>
          <button className='submit button' type='submit'> Submit </button>
        </div>
      </form>

    </div>
  )
}

export default Search
