import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './src/screen/Login';
import ForgotPassword from './src/screen/ForgotPassword';
import SignUp from './src/screen/SignUp';
import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import WatchList from './src/screen/WatchList';

const App = createStackNavigator(
	{
		Login: Login,
		ForgotPassword: ForgotPassword,
		SignUp: SignUp,
		Home: Home,
		Detail: Detail,
		WatchList: WatchList
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
	}
);

export default createAppContainer(App);
