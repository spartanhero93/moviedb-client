import './SearchResults.css'

function SearchResults({serverData}){
  console.log('results')
  console.log(serverData)

  if(serverData){
    const resultsArray = serverData;
    return(
      <div id="SearchResults">
        {resultsArray.map(item => (
          <div className='container' key={item.id}>
            <h4>Title: {item.title}, Language: {item.original_language}</h4>
            <div className="image-hover-container">
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="Descriptive Text" />
              <div className="overlay">
                  <div className="text">{item.overview}</div>
              </div>
            </div>
            <p>Released on: {item.release_date}</p>
            <p>Vote average: {item.vote_average}</p>
            <p>Vote count: {item.vote_count}</p>
          </div>
        ))}
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default SearchResults