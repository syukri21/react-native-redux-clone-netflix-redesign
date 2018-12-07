const closeDrawReducer = (state, action) => {
	return {
		...state,
		drawOpen : false
	};
};

const openDrawReducer = (state, action) => {
	return {
		...state,
		drawOpen : true
	};
};

export { closeDrawReducer, openDrawReducer };
