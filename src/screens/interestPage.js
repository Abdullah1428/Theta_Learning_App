import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import VideoSection from '../components/VideoSection';
import {TouchableOpacity} from 'react-native-gesture-handler';

const interestPage = ({navigation}) => {
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
          <Text style={styles.headerText}>Ai</Text>
        </View>
        <View style={{marginTop: hp('5')}} />

        <Text style={styles.recommendVideos}>Recommended Videos for Ai</Text>
        <View style={styles.videoFlex}>
          <VideoSection subjectName={'AI Intro'} subjectTopic={'Intro to AI'} />
          <VideoSection
            subjectName={'AI Algorithms'}
            subjectTopic={'Learn different algorithms'}
          />
        </View>

        <Text style={styles.recommendCourses}>Recommended Courses for Ai</Text>
        <LinearGradient
          colors={['#d66d75', '#e29587']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.box}>
          <Text style={styles.courseSubject}>Course 1</Text>
          <TouchableOpacity>
            <Text style={styles.enrollnow}>Enroll Now</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{marginTop: hp('2')}} />
        <LinearGradient
          colors={['#d66d75', '#e29587']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.box}>
          <Text style={styles.courseSubject}>Course 2</Text>
          <TouchableOpacity>
            <Text style={styles.enrollnow}>Enroll Now</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.recommendCourses}>Relevent Questions Asked</Text>
        <LinearGradient
          colors={['#304352', '#304352']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.boxQuestions}>
          <Text style={styles.question}>Difference between Ai and ML?</Text>
          <Text style={styles.question}>
            What is Supervised and Unsupervised Learning?
          </Text>
          <Text style={styles.question}>How AI algorithm works?</Text>
        </LinearGradient>
        <View style={{marginTop: hp('2')}} />
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
    marginLeft: wp('36'),
  },
  videoFlex: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  recommendVideos: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  recommendCourses: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90'),
    height: Platform.OS === 'ios' ? hp('12') : hp('9'),
    borderRadius: 10,
    alignSelf: 'center',
  },
  boxQuestions: {
    width: wp('90'),
    height: Platform.OS === 'ios' ? hp('12') : hp('15'),
    borderRadius: 10,
    alignSelf: 'center',
  },
  courseSubject: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 15,
  },
  enrollnow: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 15,
  },
  question: {
    fontSize: 15,
    color: 'white',
    paddingLeft: 20,
    paddingTop: 10,
  },
});

export default interestPage;
