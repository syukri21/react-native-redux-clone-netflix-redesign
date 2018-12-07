import { users } from '../userDataDummy';

const authUser = (state, action) => {
	let username = state.users.find((user) => (action.username = user.username));
	let email = state.users.find((user) => (action.email = user.email));

	alert(action.username);
	if (username === undefined) {
		alert('Username sudah ada cari nama lain !');
		return false;
	} else if (email === undefined) {
		alert('Email sudah terpakai gunakan email lain !');
		return false;
	} else if (action.username === undefined || action.username === '') {
		alert('Isi username terlebih dahulu');
		return false;
	} else if (action.email === undefined || action.email === '') {
		alert('Isi email terlebih dahulu');
		return false;
	} else if (action.password === undefined || action.password === '') {
		alert('Isi password terlebih dahulu');
		return false;
	}

	return true;
};

const addUserReducer = (state, action) => {
	if (!authUser(state, action)) return state;

	let newUser = {
		username: action.username,
		email: action.name,
		password: action.password
	};

	// return {
	//     ...state,
	//     users: [
	//         ...state.users,
	//         newUser
	//     ]
	// }

	return state;
};

const loginUserReducer = (state, action) => {
	let login = {
		username: action.username,
		password: action.password
	};

	let data = state.users.find((user) => login.username == user.username);

	if (data == undefined) {
		alert('Member tidak ada');
		return state;
	}

	if (login.password != data.password) {
		alert('Password Anda Salah');
		return state;
	}

	let restData = state.users.filter((user) => login.username != user.username);

	let newData = {
		...data,
		isLoged: true
	};

	return {
		...state,
		users: [
			...restData,
			newData
		],
		isUserLoged: true
	};
};

const logoutUserReducer = (state, action) => {
	let newData = users;
	return {
		...state,
		users: newData,
		isUserLoged: false
	};
};

export { addUserReducer, loginUserReducer, logoutUserReducer };
