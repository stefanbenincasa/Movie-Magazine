import React, {useState} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../stylesheets/results.css'

function Results({searchResults, formPageOptions, notFound}) {

  // Functions
  const onClickHandler = function(e) {
    setPage(Number(e.target.innerText))
  }

  // Current page state of Results
	// Runs ONCE, when the component is first initalised
  const [page, setPage] = useState('1')

  // Determine validity of display - 'no result found' display based on response
	// Conditional rendering here
	if (notFound) {

		return <div className='Results'><h1>No such film in our catalogue</h1></div>
	}
	else {

		console.log(formPageOptions)
		// When displaying slides, display four, then onClick, move to the next four of the Cards
		return (
			<div className='Results'>

				<Pagination aria-label="Page navigation example"> 
					{
						formPageOptions.map((pageNumber, index) => {
							return (
								<PaginationItem key={index} id={index} >
									<PaginationLink href="#" onClick={onClickHandler}>
										{pageNumber.innerText}	
									</PaginationLink>
								</PaginationItem>
							)
						})
					}
				</Pagination>

				<Page movies={searchResults} currentPage={page} />
			</div>
		)
	}

}

// Slide comprised of four Cards
function Page({movies, currentPage}) {

  // Determine which movies to display
  let moviesToDisplay = []
  let upperLimit = 2 * currentPage
  let lowerLimit = upperLimit - 2
  
  // Create slides of two 
  for (let i = 0; i < movies.length; i++) {
    if ( (i >= lowerLimit) && (i < upperLimit) ) {
      moviesToDisplay.push(movies[i])
      console.log('Displaying ' + i + ' of Movies array')
    }
  }
  
  return (
    <div className='Page'>
      {
        moviesToDisplay.map((movie, index) => {
          return <Poster 
          key={index} 
          id={index} 
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
				  plot={movie.Plot}
          />
        })
      }
    </div>
  )
}

// Individual posters
function Poster({id, title, year, poster, plot}) {

  // Check dimensions to determine display possibility 
  if (poster === 'N/A') {

    return (
      <div className='Poster'>
        <p>Theatrical poster unavailable</p>
				<div className='overlay'>
					<h2>{title}</h2>
					<p>{plot}</p>
					<h3>{year}</h3>
				</div>
      </div>
    )
  }
  else {

    return (
      <div className='Poster'>
        <img 
        src={poster} 
        alt='Theatrical poster unavailable'
        height='100%'
        width='100%'
        />
        <div className='overlay'>
		  		<h2>{title}</h2>
					<p>{plot}</p>
					<h3>{year}</h3>
        </div>
      </div>
    )
  }
}

export default Results
