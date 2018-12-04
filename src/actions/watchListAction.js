const deleteWatchList = (id) => ({
	type: 'DELETE_WATCHLIST',
	id
});

const addWatchList = (id) => ({
	type: 'ADD_WATCHLIST',
	id
});

export { deleteWatchList, addWatchList };
