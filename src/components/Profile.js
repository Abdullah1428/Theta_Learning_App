import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = ({}) => {
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
    flexDirection: 'row',
  },
  img: {
    marginLeft: wp('5'),
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: 'white',
    borderWidth: 1,
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

export default Profile;
