import { combineReducers } from 'redux';

const initialState = {
	counter: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TEST':
			alert('this was a test');
			break;

		default:
			return state;
	}
};

const rootReducer = combineReducers(reducer);

export default reducer;
