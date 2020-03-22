import React, { useState } from 'react'
import Search from './otherComponents/Search'
import Results from './otherComponents/Results'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './stylesheets/app.css'

function App() {

  const [searchResults, setResults] = useState({})
  const [displayState, setDisplay] = useState('initial')
	const [notFound, setNotFound] = useState(false)

	// Functions 
  const api = async function(query) {

    const getMoviesWithPlot = function(searchResponse) {
      
      const alteredMovies = new Promise((resolve, reject) => {

        let movies = []
        searchResponse.forEach(movie => {
          let currentMovie = fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=62326ae9&)`)
          .then(response => {
            return response.json()
          })
          movies.push(currentMovie)
        })

        // Ultimately, promise resolution should be an array of movies that contain plots
        resolve(movies)
      })

      return alteredMovies
    }

    // Construct query for general search and push movies without plot to array
		try {

			const rawSearch = await fetch(query)
			const searchResponse = await rawSearch.json()
			console.log(searchResponse)
			
			if(searchResponse.Error === 'Movie not found!') throw Error(searchResponse.Error) 

			// Search for movies again using moives from search and their ID's, the results shouls have a plot 
			const moviesWithPlot = await getMoviesWithPlot(searchResponse.Search)
			const movies = await Promise.all(moviesWithPlot)

			// Set state
			setResults(movies)
			setDisplay('results')
			if (notFound) setNotFound(false)
		}
		catch (Error) {

			// Log error
			console.log(Error.message)

			// Determine error type 
			switch (Error.message) { 

				case 'Movie not found!'	:	
							setNotFound(true);
							setDisplay('results');
							break;

				default	:	break;
			}

		}
    
  }

	const formPageOptions = function(e) {

		let amountOfPages = Math.ceil(searchResults.length / 2)
		let htmlElements = []

		for (let i = 1; i <= amountOfPages; i++) {

			let element
			element = document.createElement('option')

			if (i === 1) element.setAttribute('defaultValue', '')
			element.innerText = i
			htmlElements.push(element)
		}

		return htmlElements
	}

	// Main
  if (displayState === 'initial') {

    return (
      <div className='App center'>
        <Search api={api} style={{marginTop: '500px'}}/>
      </div>
    )
  }
  else if (displayState === 'results'){

    return (
      <div className="App">
        <Search api={api} />
        <Results 
				searchResults={searchResults}
				formPageOptions={formPageOptions()}
				notFound={notFound}
				/>
      </div>
    )
  }
}

export default App;
