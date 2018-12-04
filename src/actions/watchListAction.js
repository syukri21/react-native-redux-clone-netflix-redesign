const deleteWatchList = (id) => ({
	type: 'DELETE_WATCHLIST',
	id
});

const addWatchList = (id) => ({
	type: 'ADD_WATCHLIST',
	id
});

const getWatchList = () => ({
	type: 'GET_WATCHLIST'
});

const getOneWatchListById = (id) => ({
	type: 'GET_ONE_WATCHLIST_BY_ID',
	id
});

export { deleteWatchList, addWatchList, getWatchList, getOneWatchListById };
