import { film } from '../dataDummy';
import { deleteWatchListReducer, addWatchListReducer } from './watchListFilmReducer';

let initState = {
	film: film,
	watchListFilm: film
};

const rootReducer = (state = initState, action) => {
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
