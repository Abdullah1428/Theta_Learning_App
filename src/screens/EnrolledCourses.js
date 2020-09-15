import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EnrolledCourses = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ada996', '#dbdbdb']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.courses}>
        <View style={styles.header}>
          <Icons
            name={'arrow-back-sharp'}
            color={'white'}
            size={25}
            style={styles.iconBack}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Enrolled Courses</Text>
        </View>
        <View style={{marginTop: hp('5')}} />
        <View style={styles.courseBox}>
          <View style={styles.courseFlex}>
            <Text style={styles.courseName}>Maths</Text>
            <Text style={styles.courseCompletion}>30% Completed</Text>
          </View>
          <Text style={styles.courseGo}>Go to Course</Text>
        </View>
        <View style={{marginTop: hp('5')}} />
        <View style={styles.courseBox}>
          <View style={styles.courseFlex}>
            <Text style={styles.courseName}>Maths</Text>
            <Text style={styles.courseCompletion}>30% Completed</Text>
          </View>
          <Text style={styles.courseGo}>Go to Course</Text>
        </View>
        <View style={{marginTop: hp('5')}} />
        <View style={styles.courseBox}>
          <View style={styles.courseFlex}>
            <Text style={styles.courseName}>Maths</Text>
            <Text style={styles.courseCompletion}>30% Completed</Text>
          </View>
          <Text style={styles.courseGo}>Go to Course</Text>
        </View>
        <View style={{marginTop: hp('5')}} />
        <View style={styles.courseBox}>
          <View style={styles.courseFlex}>
            <Text style={styles.courseName}>Maths</Text>
            <Text style={styles.courseCompletion}>30% Completed</Text>
          </View>
          <Text style={styles.courseGo}>Go to Course</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 60,
  },
  courses: {
    flex: 1,
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
    marginLeft: wp('16'),
  },
  courseBox: {
    width: wp('90'),
    height: Platform.OS === 'ios' ? hp('10') : hp('12'),
    backgroundColor: '#f7b733',
    borderRadius: 10,
    alignSelf: 'center',
  },
  courseFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: hp('1.5'),
    marginLeft: wp('4'),
  },
  courseCompletion: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: hp('1.5'),
    paddingRight: 20,
  },
  courseGo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: hp('1.5'),
    alignSelf: 'center',
  },
});

export default EnrolledCourses;
