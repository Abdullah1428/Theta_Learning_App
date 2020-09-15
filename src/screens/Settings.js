import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icons from 'react-native-vector-icons/Ionicons';

import ProfileSection from '../components/ProfileSection';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F37335', '#FDC830']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.profileSection}>
        <View style={styles.header}>
          <Icons
            name={'arrow-back-sharp'}
            color={'white'}
            size={25}
            style={styles.iconBack}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <ProfileSection />
      </LinearGradient>
      <View style={styles.settingsSection}>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.settings}>
            <Text style={styles.settingText}>Edit Profile</Text>
            <Icons
              name={'chevron-forward'}
              size={20}
              style={styles.forwardIcon}
            />
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.settings}>
            <Text style={styles.settingText}>Enrolled Courses</Text>
            <Icons
              name={'chevron-forward'}
              size={20}
              style={styles.forwardIcon}
            />
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.settings}>
            <Text style={styles.settingText}>Completed Courses</Text>
            <Icons
              name={'chevron-forward'}
              size={20}
              style={styles.forwardIcon}
            />
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.settings}>
            <Text style={styles.settingText}>Password Change</Text>
            <Icons
              name={'chevron-forward'}
              size={20}
              style={styles.forwardIcon}
            />
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.settings}>
            <Text style={styles.settingText}>My Subscriptions</Text>
            <Icons
              name={'chevron-forward'}
              size={20}
              style={styles.forwardIcon}
            />
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.settings}>
            <Text style={styles.settingText}>Logout</Text>
            <Icons
              name={'chevron-forward'}
              size={20}
              style={styles.forwardIcon}
            />
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 60,
  },
  profileSection: {
    flex: 0.4,
  },
  settingsSection: {
    flex: 0.6,
  },
  header: {
    flexDirection: 'row',
  },
  iconBack: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
    marginLeft: wp('5'),
  },
  headerText: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp('27'),
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100'),
    height: hp('7'),
    backgroundColor: '#ECE9E6',
  },
  line: {
    width: wp('100%'),
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  settingText: {
    marginTop: hp('2'),
    marginLeft: wp('5'),
    fontSize: 18,
    fontWeight: 'bold',
  },
  forwardIcon: {
    marginTop: hp('2'),
    marginLeft: wp('5'),
    paddingRight: 20,
  },
});

export default Settings;
