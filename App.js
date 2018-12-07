import { createStackNavigator, createAppContainer } from 'react-navigation';
import { fromLeft } from 'react-navigation-transitions';

import Login from './src/screen/Login';
import ForgotPassword from './src/screen/ForgotPassword';
import SignUp from './src/screen/SignUp';
import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import WatchList from './src/screen/WatchList';
import Search from './src/screen/Search';

const App = createStackNavigator(
	{
		Login,
		ForgotPassword,
		SignUp,
		Home,
		Detail,
		WatchList,
		Search
	},
	{
		initialRouteName : 'Login',
		headerMode       : 'none',
		transitionConfig : () => fromLeft(800)
	}
);

export default createAppContainer(App);
