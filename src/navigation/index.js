import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import userProfile from '../screens/userProfile';
import Settings from '../screens/Settings';

//console.disableYellowBox = true;

const AppScreens = createStackNavigator(
  {
    home: {
      screen: Home,
    },
    profile: {
      screen: userProfile,
    },
    settings: {
      screen: Settings,
    },
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
  },
);

export default createAppContainer(AppScreens);
