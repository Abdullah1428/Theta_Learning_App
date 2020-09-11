import React, {useState, useEffect} from 'react';

import {StyleSheet, View, Text, Image, Platform, FlatList} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import subjects from '../resources/dummyData/subjects.json';
import entrance from '../resources/dummyData/entrance.json';
import competitive from '../resources/dummyData/competitive.json';
import speical from '../resources/dummyData/special.json';
import foreign from '../resources/dummyData/foreign.json';

const splashScreen = ({navigation}) => {
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

  const renderSeparator = () => {
    return <View></View>;
  };

  const renderITEMS = ({item}) => {
    return (
      <LinearGradient
        colors={[item.color1, item.color2]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.subjectBox}>
        <View style={styles.subjectBoxCircle}>
          {/* image logo for subject */}
          <Image
            source={require('../resources/images/maths.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.subjectName}>{item.subjectName}</Text>
      </LinearGradient>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#C04848', '#480048']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.userSection}>
        {/* header section of the app */}
        <View style={styles.header}>
          <Icons
            name="menu-outline"
            color={'white'}
            size={30}
            style={styles.iconMenu}
            onPress={() => console.log('hello')}
          />
          <Text style={styles.title}>Theta Learning App</Text>
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
        <View style={{marginTop: hp('5')}} />
        {/* user profile section */}
        <View style={styles.profile}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.img}
          />
          <View>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.profileTitle}>Jon Doe</Text>
              <Text style={styles.profileDescription}>Class 9,Board Exam</Text>
            </TouchableOpacity>
            <View style={styles.gradeSelector}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.gradeSelector}>
                <Text style={styles.gradeSelected}>Class 9</Text>
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
        <View style={{marginTop: hp('5')}} />
      </LinearGradient>

      <View style={styles.courseSection}>
        <Text style={styles.greeting}>Hi, what would you learn today?</Text>

        <Text style={styles.courseMainTitle}>Course Subjects</Text>
        <View style={styles.coursesFlex}>
          {/* here we will add a box for each subject section */}
          <FlatList
            data={subjectsData}
            ItemSeparatorComponent={renderSeparator}
            renderItem={renderITEMS}
            enableEmptySections={true}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
        {/* end 1 */}
        <Text style={styles.courseMainTitle}>College Entrance Exams</Text>
        <View style={styles.coursesFlex}>
          {/* here we will add a box for each subject section */}
          <FlatList
            data={entranceData}
            ItemSeparatorComponent={renderSeparator}
            renderItem={renderITEMS}
            enableEmptySections={true}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
        {/* end 2 */}
        <Text style={styles.courseMainTitle}>Foreign Exams</Text>
        <View style={styles.coursesFlex}>
          {/* here we will add a box for each subject section */}
          <FlatList
            data={foreignData}
            ItemSeparatorComponent={renderSeparator}
            renderItem={renderITEMS}
            enableEmptySections={true}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
        {/* end 3 */}
        <Text style={styles.courseMainTitle}>Competitive Exams</Text>
        <View style={styles.coursesFlex}>
          {/* here we will add a box for each subject section */}
          <FlatList
            data={competitiveData}
            ItemSeparatorComponent={renderSeparator}
            renderItem={renderITEMS}
            enableEmptySections={true}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
        {/* end 4 */}
        <Text style={styles.courseMainTitle}>Special Skills</Text>
        <View style={styles.coursesFlex}>
          {/* here we will add a box for each subject section */}
          <FlatList
            data={speicalData}
            ItemSeparatorComponent={renderSeparator}
            renderItem={renderITEMS}
            enableEmptySections={true}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
        {/* end 5 */}

        {/* popular video section */}
        <Text style={styles.courseMainTitle}>Popular Videos</Text>
        <View style={styles.videoFlex}>
          <View style={styles.videoBox}>
            <Text style={styles.videoSubject}>Physics</Text>
            <Icons
              name="play-circle-sharp"
              style={styles.videoPlayIcon}
              size={25}
            />
            <Text style={styles.videoDescription}>understanding motion</Text>
          </View>
          <View style={styles.videoBox}>
            <Text style={styles.videoSubject}>Programming</Text>
            <Icons
              name="play-circle-sharp"
              style={styles.videoPlayIcon}
              size={25}
            />
            <Text style={styles.videoDescription}>understanding motion</Text>
          </View>
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
  userSection: {
    flex: 0.3,
  },
  courseSection: {
    flex: 0.7,
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
  greeting: {
    marginTop: hp('2'),
    marginLeft: wp('5'),
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subjectBox: {
    flexBasis: '45%',
    marginTop: hp('1'),
    width: wp('45'),
    height: hp('8'),
    borderRadius: 10,
    flexDirection: 'row',
    marginLeft: wp('3'),
  },
  subjectBoxCircle: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginTop: hp('1'),
    marginLeft: wp('3'),
  },
  subjectName: {
    color: 'white',
    fontSize: 16,
    marginTop: hp('2.5'),
    marginLeft: wp('2'),
  },
  coursesFlex: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  logo: {
    width: 32,
    height: 32,
    marginTop: hp('1'),
    alignSelf: 'center',
  },
  courseMainTitle: {
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
    marginTop: hp('8'),
  },
  videoPlayIcon: {
    color: 'white',
    marginTop: hp('1'),
    marginLeft: wp('2'),
  },
  videoDescription: {
    fontSize: 10,
    color: 'white',
    marginLeft: wp('10'),
    marginTop: hp('-2'),
  },
});

export default splashScreen;
