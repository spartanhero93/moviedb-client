import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import { Provider } from 'react-redux'
// import { MuiThemeProvider } from '@material-ui/core/styles'

import './index.css'
import App from './App'
//import registerServiceWorker from './registerServiceWorker';

// import store from './redux/store'
// import theme from './MuiTheme'

// ReactDOM.render(
//   <Provider store={store}>
//     <MuiThemeProvider theme={theme}>
//       <App />
//     </MuiThemeProvider>
//   </Provider>,
//   document.getElementById('root')
// )
const container = document.getElementById('root') 
const root = createRoot(container)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

//registerServiceWorker();
/**
 * Credits
 * icons <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
 */
