import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

const Header = ({AppTitle}) => {
  return (
    <View style={styles.header}>
      <Icons
        name="menu-outline"
        color={'white'}
        size={30}
        style={styles.iconMenu}
        onPress={() => console.log('hello')}
      />
      <Text style={styles.title}>{AppTitle}</Text>
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
  );
};

const styles = StyleSheet.create({
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
  iconMenu: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
    paddingLeft: 10,
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
