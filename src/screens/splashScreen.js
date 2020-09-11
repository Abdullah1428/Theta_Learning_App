import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const splashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C04848', '#480048']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.userSection}>
        {/* header section of the app */}
        <View style={styles.header}>
          <Icons
            name="menu-outline"
            color={'white'}
            size={30}
            style={styles.iconMenu}
            onPress={() => console.log('hello')}
          />
          <Text style={styles.title}>Theta Learning App</Text>
          <Icons
            name="search-outline"
            color={'white'}
            size={25}
            style={styles.iconSearch}
          />
          <Icons
            name="notifications-outline"
            color={'white'}
            size={25}
            style={styles.iconNotify}
          />
        </View>
        <View style={{marginTop: hp('5')}} />
        {/* user profile section */}
        <View style={styles.profile}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.img}
          />
          <View>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.profileTitle}>Jon Doe</Text>
              <Text style={styles.profileDescription}>Class 9,Board Exam</Text>
            </TouchableOpacity>
            <View style={styles.gradeSelector}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.gradeSelector}>
                <Text style={styles.gradeSelected}>Class 9</Text>
                <Icons
                  name="chevron-down-outline"
                  color={'white'}
                  size={20}
                  style={styles.iconDown}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.courseSection}>
        <Text>Hello from Course Section</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 60,
  },
  userSection: {
    flex: 0.35,
  },
  courseSection: {
    flex: 0.65,
  },
  iconMenu: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
    paddingLeft: 10,
  },
  iconSearch: {
    paddingTop: Platform.OS === 'ios' ? 60 : 10,
    paddingLeft: 10,
  },
  iconNotify: {
    paddingTop: Platform.OS === 'ios' ? 60 : 10,
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  profile: {
    flexDirection: 'row',
  },
  img: {
    marginLeft: wp('5'),
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  profileTitle: {
    marginLeft: wp('5'),
    marginTop: hp('0.5'),
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDescription: {
    marginLeft: wp('5'),
    marginTop: hp('0.5'),
    color: 'white',
    fontSize: 15,
  },
  gradeSelector: {
    flexDirection: 'row',
  },
  gradeSelected: {
    marginLeft: wp('5'),
    marginTop: hp('1'),
    color: 'white',
    fontSize: 15,
  },
  iconDown: {
    color: 'white',
    paddingTop: 8,
    paddingLeft: 10,
  },
});

export default splashScreen;
