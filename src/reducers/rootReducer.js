import { film } from '../dataDummy';
import { users } from '../userDataDummy';
import { deleteWatchListReducer, addWatchListReducer } from './watchListFilmReducer';
import { searchFilmsReducer } from './searchListReducer';
import { loginUserReducer, logoutUserReducer } from './userReducer';

let initState = {
	film           : film,
	watchListFilm  : film,
	searchListFilm : [],
	searchData     : null,
	users          : users,
	isUserLoged    : false
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'DELETE_WATCHLIST':
			return deleteWatchListReducer(state, action);
			break;
		case 'ADD_WATCHLIST':
			return addWatchListReducer(state, action);
			break;
		case 'RESET':
			return initState;
			break;
		case 'ON_SEARCH':
			return searchFilmsReducer(state, action);
			break;
		case 'ON_LOGIN':
			return loginUserReducer(state, action);
			break;
		case 'ON_LOGOUT':
			return logoutUserReducer(state, action);
			break;
		default:
			return initState;
			break;
	}
};

export default rootReducer;
