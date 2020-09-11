import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import splashScreen from '../screens/splashScreen';

console.disableYellowBox = true;

const AppScreens = createStackNavigator(
  {
    splash: {
      screen: splashScreen,
    },
  },
  {
    initialRouteName: 'splash',
    headerMode: 'none',
  },
);

export default createAppContainer(AppScreens);
