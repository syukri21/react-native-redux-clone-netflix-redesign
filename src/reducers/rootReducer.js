import { film } from '../dataDummy';
import { deleteWatchListReducer, addWatchListReducer } from './watchListFilmReducer';

let initState = {
	film: film,
	watchListFilm: film
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'DELETE_WATCHLIST':
			break;
		case 'ADD_WATCHLIST':
			break;
		default:
			break;
	}

	if (action.type === 'DELETE_WATCHLIST') {
		return deleteWatchListReducer(state, action);
	} else if (action.type === 'ADD_WATCHLIST') {
		return addWatchListReducer(state, action);
	} else if (action.type === 'RESET') {
		return initState;
	}
	return state;
};

export default rootReducer;
