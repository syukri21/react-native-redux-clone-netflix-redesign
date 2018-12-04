const deleteWatchListReducer = (state, action) => {
	let newFilm = state.watchListFilm.filter((film) => action.id !== film.id);
	return {
		...state,
		watchListFilm: newFilm
	};
};

const addWatchListReducer = (state, action) => {
	let newFilms = state.film.find((film) => action.id == film.id);
	return {
		...state,
		watchListFilm: [
			...state.watchListFilm,
			newFilms
		]
	};
};

export { deleteWatchListReducer, addWatchListReducer };
