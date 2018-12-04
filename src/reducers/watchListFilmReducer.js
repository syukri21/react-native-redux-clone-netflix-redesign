const deleteWatchListReducer = (state, action) => {
	let newFilm = state.watchListFilm.filter((film) => action.id !== film.id);
	return {
		...state,
		watchListFilm: newFilm
	};
};

const addWatchListReducer = (state, action) => {
	let cekId = state.watchListFilm.find((film) => action.id == film.id);
	if (cekId === undefined) {
		let newFilms = state.film.find((film) => action.id == film.id);
		return {
			...state,
			watchListFilm: [
				...state.watchListFilm,
				newFilms
			]
		};
	} else {
		return state;
	}
};

export { deleteWatchListReducer, addWatchListReducer };
