const onAddUser = (username, email, password) => ({
	type: 'ON_ADD_USER',
    username,
    email,
    password
});

const onLogin = (username, password) => ({
	type: 'ON_LOGIN',
    username,
    password
});

const onLogout = () => ({
	type : 'ON_LOGOUT',

})

export { onAddUser, onLogin, onLogout };