import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import userProfile from '../screens/userProfile';
import Settings from '../screens/Settings';
import EnrolledCourses from '../screens/EnrolledCourses';
import interestPage from '../screens/interestPage';
import FindTutor from '../screens/FindTutor';

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
    enrolled: {
      screen: EnrolledCourses,
    },
    interest: {
      screen: interestPage,
    },
    tutor: {
      screen: FindTutor,
    },
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
  },
);

export default createAppContainer(AppScreens);
