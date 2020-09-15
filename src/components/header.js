import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = ({
  AppTitle,
  icon1,
  icon2,
  icon3,
  handlePress,
  handleSettings,
}) => {
  return (
    <View style={styles.header}>
      <Icons
        name={icon1}
        color={'white'}
        size={30}
        style={styles.iconMenu}
        onPress={handlePress}
      />
      <Text style={styles.title}>{AppTitle}</Text>
      <Icons name={icon2} color={'white'} size={25} style={styles.iconSearch} />
      <Icons
        name={icon3}
        color={'white'}
        size={25}
        style={styles.iconNotify}
        onPress={handleSettings}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconMenu: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
  },
  title: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconSearch: {
    paddingTop: Platform.OS === 'ios' ? 65 : 10,
    paddingLeft: 10,
  },
  iconNotify: {
    paddingTop: Platform.OS === 'ios' ? 65 : 10,
    paddingLeft: 10,
  },
});

export default Header;
