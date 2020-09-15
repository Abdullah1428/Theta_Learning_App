import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';

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
    <View style={styles.container}>
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
            radius={100}
            innerRadius={60}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 60,
  },
  profileSection: {
    flex: 0.35,
  },
  statsSection: {
    flex: 0.65,
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
    height: hp('7'),
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
    paddingTop: 8,
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
});

export default userProfile;
