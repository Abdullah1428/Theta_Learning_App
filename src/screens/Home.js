import React, {useState, useEffect} from 'react';

import {StyleSheet, View, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import SubjectBoxList from '../components/SubjectBoxList';
import Header from '../components/Header';
import Profile from '../components/Profile';
import VideoSection from '../components/VideoSection';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';

import subjects from '../resources/dummyData/subjects.json';
import entrance from '../resources/dummyData/entrance.json';
import competitive from '../resources/dummyData/competitive.json';
import speical from '../resources/dummyData/special.json';
import foreign from '../resources/dummyData/foreign.json';

const Home = ({navigation}) => {
  const [subjectsData, setSubjectsData] = useState([]);
  const [entranceData, setEntranceData] = useState([]);
  const [competitiveData, setCompetitiveData] = useState([]);
  const [speicalData, setSpecialData] = useState([]);
  const [foreignData, setForeigndata] = useState([]);

  useEffect(() => {
    setSubjectsData(subjects);
    setEntranceData(entrance);
    setCompetitiveData(competitive);
    setSpecialData(speical);
    setForeigndata(foreign);
  }, []);

  const handleOnPress = () => {
    navigation.navigate('profile');
  };

  const handleSubjectNavigation = () => {
    navigation.navigate('tutor');
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#C04848', '#480048']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.userSection}>
        <Header
          AppTitle={'Theta Learning App'}
          icon1={'menu-outline'}
          icon2={'search-outline'}
          icon3={'notifications-outline'}
        />
        <View style={{marginTop: hp('5')}} />
        <Profile handleOnPress={handleOnPress} />
        <View style={{marginTop: hp('5')}} />
      </LinearGradient>

      <View style={styles.courseSection}>
        <Text style={styles.greeting}>Hi, what would you learn today?</Text>
        <View>
          <SubjectBoxList
            data={subjectsData}
            subjectName={'Course Subjects'}
            handleSubjectNavigation={handleSubjectNavigation}
          />
          <SubjectBoxList data={entranceData} subjectName={'Entrance Exams'} />
          <SubjectBoxList data={foreignData} subjectName={'Foreign Exams'} />
          <SubjectBoxList
            data={competitiveData}
            subjectName={'Competitive Exams'}
          />
          <SubjectBoxList data={speicalData} subjectName={'Special Skills'} />
        </View>
        <View style={{marginTop: hp('5')}} />
      </View>

      <Text style={styles.courseMainTitleVideos}>Popular Videos</Text>
      <View style={styles.videoFlex}>
        <VideoSection
          subjectName={'Physics'}
          subjectTopic={'understanding motion'}
        />
        <VideoSection
          subjectName={'Programming'}
          subjectTopic={'data structures'}
        />
      </View>

      <Text style={styles.courseMainTitle}>Popular Questions</Text>
      <View style={styles.popularQuestionsBox}>
        <Text style={styles.popularQuestionsBoxHeading}>
          Explore some popular questions asked on Theta
        </Text>
        <Text style={styles.popularQuestionsBoxText}>
          1 : What is Devops and how can it be used?
        </Text>
        <Text style={styles.popularQuestionsBoxText}>
          2 : What is pythagoras theoram?
        </Text>
        <Text style={styles.popularQuestionsBoxText}>
          3 : What is periodic Table?
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 60,
  },
  userSection: {
    flex: 0.3,
  },
  courseSection: {
    flex: 0.7,
  },
  greeting: {
    marginTop: hp('2'),
    marginLeft: wp('5'),
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  videoFlex: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  popularQuestionsBox: {
    marginTop: hp('1'),
    width: wp('90'),
    height: hp('30'),
    borderRadius: 10,
    backgroundColor: '#D3CCE3',
    alignSelf: 'center',
  },
  popularQuestionsBoxText: {
    width: wp('70'),
    marginTop: hp('2'),
    marginLeft: wp('5'),
    color: 'black',
    fontSize: 16,
  },
  popularQuestionsBoxHeading: {
    width: wp('70'),
    marginTop: hp('2'),
    marginLeft: wp('5'),
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseMainTitle: {
    marginTop: hp('2'),
    marginLeft: wp('5'),
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseMainTitleVideos: {
    marginLeft: wp('5'),
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
