const searchFilmsReducer = (state, action) => {
	if (action.title === '')
		return {
			...state,
			searchListFilm: []
		};

	let regex = new RegExp(action.title, 'i');
	let films = state.film.filter((film) => regex.test(film.title));
	return {
		...state,
		searchListFilm: films
	};
};

export { searchFilmsReducer };
