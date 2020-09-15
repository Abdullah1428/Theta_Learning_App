import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const VideoSection = ({subjectName, subjectTopic}) => {
  return (
    <View>
      <View style={styles.videoBox}>
        <Text style={styles.videoSubject}>{subjectName}</Text>
        <Icons
          name="play-circle-sharp"
          style={styles.videoPlayIcon}
          size={25}
        />
        <Text style={styles.videoDescription}>{subjectTopic}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoBox: {
    marginTop: hp('1'),
    width: wp('45'),
    height: hp('15'),
    borderRadius: 10,
    backgroundColor: '#134E5E',
  },
  videoSubject: {
    fontSize: 15,
    color: 'white',
    marginLeft: wp('5'),
    marginTop: Platform.OS === 'ios' ? hp('8') : hp('6'),
  },
  videoPlayIcon: {
    color: 'white',
    marginTop: Platform.OS === 'ios' ? hp('1') : hp('1'),
    marginLeft: wp('2'),
  },
  videoDescription: {
    fontSize: 10,
    color: 'white',
    marginLeft: wp('10'),
    marginTop: hp('-2'),
  },
});

export default VideoSection;
