import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import Pie from 'react-native-pie';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import SubjectBoxList from '../components/SubjectBoxList';

import overallSubjects from '../resources/dummyData/overallSubjects.json';

const userProfile = ({navigation}) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(overallSubjects);
  }, []);

  const handlePress = () => {
    navigation.goBack();
  };

  const handleSettings = () => {
    navigation.navigate('settings');
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#F37335', '#FDC830']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.profileSection}>
        <Header
          AppTitle={'User Profile'}
          icon1={'arrow-back-sharp'}
          icon2={'notifications-outline'}
          icon3={'md-settings'}
          handlePress={handlePress}
          handleSettings={handleSettings}
        />
        <ProfileSection />
      </LinearGradient>
      <View style={styles.statsSection}>
        <Text style={styles.heading}>Your Interests</Text>
        <View style={styles.interestBoxes}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('interest')}>
            <LinearGradient
              colors={['#6190E8', '#A7BFE8']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.interestBox}>
              <Text style={styles.interestboxHeading}>Ai</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient
              colors={['#6190E8', '#A7BFE8']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.interestBox}>
              <Text style={styles.interestboxHeading}>Data Science</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient
              colors={['#6190E8', '#A7BFE8']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.interestBox}>
              <Text style={styles.interestboxHeading}>Programming</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient
              colors={['#6190E8', '#A7BFE8']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.interestBox}>
              <Text style={styles.interestboxHeading}>Statistics</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>Total Watch Minutes</Text>
        <View style={styles.watchBoxes}>
          <LinearGradient
            colors={['#6190E8', '#A7BFE8']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.box}>
            <Text style={styles.boxHeading}>Today</Text>
            <Text style={styles.boxStats}>0 hrs</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#D1913C', '#FFD194']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.box}>
            <Text style={styles.boxHeading}>Weekly</Text>
            <Text style={styles.boxStats}>0 hrs</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#fd746c', '#ff9068']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.box}>
            <Text style={styles.boxHeading}>Monthly</Text>
            <Text style={styles.boxStats}>0 hrs</Text>
          </LinearGradient>
        </View>
        {/* watch ended here */}
        <View>
          <SubjectBoxList data={subjects} subjectName={'Performance'} />
        </View>
        <View style={styles.performance}>
          <Text style={styles.statistics}>Overall Statistics</Text>
          <Text style={styles.header}>All Subjects</Text>
          <Pie
            radius={Platform.OS === 'ios' ? 80 : 50}
            innerRadius={Platform.OS === 'ios' ? 50 : 20}
            sections={[
              {
                percentage: 15,
                color: '#C70039',
              },
              {
                percentage: 15,
                color: '#141E30',
              },
              {
                percentage: 15,
                color: '#00B4DB',
              },
              {
                percentage: 15,
                color: '#56ab2f',
              },
              {
                percentage: 20,
                color: '#DA22FF',
              },
              {
                percentage: 20,
                color: '#348F50',
              },
            ]}
            strokeCap={'butt'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 60,
  },
  profileSection: {
    flex: 0.3,
  },
  statsSection: {
    flex: 0.7,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  watchBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  box: {
    width: wp('30'),
    height: Platform.OS === 'ios' ? hp('6') : hp('6.5'),
    borderRadius: 10,
  },
  boxHeading: {
    alignSelf: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  boxStats: {
    alignSelf: 'center',
    paddingTop: Platform.OS === 'ios' ? 8 : 0,
    fontWeight: 'bold',
    color: 'white',
  },
  performance: {
    marginTop: hp('5'),
    alignSelf: 'center',
  },
  statistics: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'grey',
  },
  header: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
  },
  interestBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  interestboxHeading: {
    alignSelf: 'center',
    paddingTop: Platform.OS === 'ios' ? 18 : 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 11,
  },
  interestBox: {
    width: wp('20'),
    height: Platform.OS === 'ios' ? hp('6') : hp('5'),
    borderRadius: 10,
  },
});

export default userProfile;
