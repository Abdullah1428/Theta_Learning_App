import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      />
      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.profileTitle}>Tariq Kamal</Text>
          <Text style={styles.profileDescription}>Class XII,Board Exam</Text>
        </TouchableOpacity>
        <View style={styles.gradeSelector}>
          <TouchableOpacity activeOpacity={0.5} style={styles.gradeSelector}>
            <Text style={styles.gradeSelected}>Class XII</Text>
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
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: 'white',
    borderWidth: 1,
  },
  profileTitle: {
    marginTop: hp('0.5'),
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  profileDescription: {
    marginLeft: wp('5'),
    marginTop: hp('0.5'),
    color: 'white',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradeSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradeSelected: {
    marginLeft: wp('5'),
    marginTop: hp('1'),
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
  iconDown: {
    color: 'white',
    paddingTop: 8,
    paddingLeft: 10,
    alignSelf: 'center',
  },
});

export default Profile;
