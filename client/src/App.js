import React, { useCallback, useEffect, useState } from 'react'

import Sidebar from './NewComponents/SideBar'
import SearchResults from './NewComponents/SearchResults'
// import CssBaseline from '@material-ui/core/CssBaseline'

/**redux */
// import { connect } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
/** components */
// import Main from './Containers/Main'
const URL = 'http://localhost:3001/api/movies/'



function App() {
  const [serverData, handleServerData] = useState({})
  const [userQuery, handleUserQuery] = useState('')


  const fetchData = () => {
    if(userQuery){
      fetch(URL + userQuery)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        handleServerData(data.data)
      })
    }
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return(
    <div>
      
      <h1>Hello World</h1>
      <input type='text' onChange={e => handleUserQuery(e.target.value)} />
      <button onClick={() => fetchData()}>Search!</button>
      <button onClick={() => console.log(serverData)}>Log data!</button>
      <div style={{display: 'flex', marginTop: '40px'}}>
        <Sidebar />
        <SearchResults serverData={serverData.results}/>
      </div>
    </div>
  )
}

// const ConnectedApp = () => {
//   return (
//     <div>   
//       <BrowserRouter>
//         <React.Fragment>
//           <CssBaseline />
//           <Main />
//         </React.Fragment>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// const mapStateToProps = state => ({
// state,
// })

// const App = connect(mapStateToProps)(ConnectedApp)


export default App
