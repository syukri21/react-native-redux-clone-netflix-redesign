import { film } from '../dataDummy';
import { deleteWatchListReducer, addWatchListReducer, getOneWatchListById } from './watchListFilmReducer';
import { searchFilmsReducer } from './searchListReducer';
let initState = {
	film: film,
	watchListFilm: film,
	searchListFilm: []
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
		default:
			return initState;
			break;
	}
};

export default rootReducer;
