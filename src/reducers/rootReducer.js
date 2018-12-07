import { film } from '../dataDummy';
import { users } from '../userDataDummy';
import { deleteWatchListReducer, addWatchListReducer } from './watchListFilmReducer';
import { searchFilmsReducer } from './searchListReducer';
import { loginUserReducer, logoutUserReducer } from './userReducer';
import { closeDrawReducer, openDrawReducer } from './drawerReducer';
let initState = {
	film           : film,
	watchListFilm  : [],
	searchListFilm : [],
	searchData     : null,
	users          : users,
	isUserLoged    : false,
	drawOpen       : false
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
		case 'ON_OPEN_DRAWER':
			return openDrawReducer(state, action);
			break;
		case 'ON_CLOSE_DRAWER':
			return closeDrawReducer(state, action);
			break;
		default:
			return initState;
			break;
	}
};

export default rootReducer;
