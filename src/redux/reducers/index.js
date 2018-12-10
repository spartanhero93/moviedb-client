const initialState = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, ...action.data }
    case 'CHANGE_PAGE':
      return console.log('CHANGE_PAGE called')
    case 'TEST':
      return console.log(action.data)
    default:
      return state
  }
}

export default reducer
