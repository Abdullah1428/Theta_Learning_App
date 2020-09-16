import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import grades from '../resources/dummyData/grades.json';
import Course from '../resources/dummyData/course.json';
import Session from '../resources/dummyData/session.json';

const FindTutor = ({navigation}) => {
  const [place, setplace] = useState('Home');
  const [grade, setGrade] = useState('Select your Grade/Class');
  const [course, setCourse] = useState('Select Course Mode');
  const [session, setSession] = useState('Select Session Mode');
  const [dateSelected, setDateSelected] = useState('Select your date and time');
  const [timeSelected, setTimeSelected] = useState('');

  const [gradeModal, set_modal_grade] = useState(false);
  const [courseModal, set_modal_course] = useState(false);
  const [sessionModal, set_modal_session] = useState(false);

  const [data, setdata] = useState([]);
  const [coursedata, setcoursedata] = useState([]);
  const [sessiondata, setsessiondata] = useState([]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  /*
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  */

  const handleConfirmDate = date => {
    //console.log('A date has been picked: ', date + 5);
    let selectDate = date.toString();
    let selectTime = date.toString();
    selectDate = selectDate.slice(4, 15);
    selectTime = selectTime.slice(16, 24);
    //console.log(selectDate);
    setDateSelected(selectDate);
    //console.log(selectTime)
    setTimeSelected(selectTime);
    hideDatePicker();
  };

  /*
  const handleConfirmTime = time => {
    //console.log('A time has been picked: ', time + 5);
    let selectTime = time.toString();
    selectTime = selectTime.slice(16, 24);
    //console.log(selectTime)
    setTimeSelected(selectTime);
    hideTimePicker();
  };
  */

  const handleGradeClass = grade => {
    setGrade(grade);
    set_modal_grade(false);
  };

  const handleCourse = course => {
    setCourse(course);
    set_modal_course(false);
  };

  const handleSession = session => {
    setSession(session);
    set_modal_session(false);
  };

  useEffect(() => {
    setdata(grades);
    setcoursedata(Course);
    setsessiondata(Session);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#ada996', '#dbdbdb']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.container}>
        <Icons
          name={'arrow-back-sharp'}
          color={'white'}
          size={25}
          style={styles.iconBack}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Finding Tutor</Text>

        <View>
          <Text style={styles.titleText}>
            Where would you like to take your course?
          </Text>
          <View style={styles.placeBoxFlex}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setplace('Home')}>
              <LinearGradient
                colors={['#0082c8', '#0082c8']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.placeBox}>
                <Text style={styles.placeBoxText}>Home</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setplace('Tutor Center')}>
              <LinearGradient
                colors={['#fe8c00', '#f83600']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.placeBox}>
                <Text style={styles.placeBoxText}>Tutor Center</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setplace('Online')}>
              <LinearGradient
                colors={['#89216B', '#DA4453']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.placeBox}>
                <Text style={styles.placeBoxText}>Online</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sectionHeader}>Place</Text>
            <Text style={styles.placeSelected}>{place}</Text>
            <View style={styles.line} />
          </View>

          <View>
            <Text style={styles.sectionHeader}>Class/Grade</Text>
            <TouchableOpacity onPress={() => set_modal_grade(true)}>
              <Text style={styles.placeSelected}>
                {grade === 'Select your Grade/Class' ? grade : 'Class ' + grade}
              </Text>
              <View style={styles.line} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.sectionHeader}>Course</Text>
            <TouchableOpacity onPress={() => set_modal_course(true)}>
              <Text style={styles.placeSelected}>{course}</Text>
              <View style={styles.line} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.sectionHeader}>Session Mode</Text>
            <TouchableOpacity onPress={() => set_modal_session(true)}>
              <Text style={styles.placeSelected}>{session}</Text>
              <View style={styles.line} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.sectionHeader}>Starting Date and Time</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => showDatePicker()}>
              <Text style={styles.placeSelected}>
                {dateSelected + ' ' + timeSelected}
              </Text>
              <View style={styles.line} />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                locale="en_PK" // Use "en_GB" here
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.sectionHeader}>Price Range</Text>
            <TextInput
              style={styles.Input}
              placeholder={'2000 - 3000'}
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
              clearTextOnFocus
              allowFontScaling={false}
              keyboardType={'number-pad'}
            />
            <View style={styles.line} />
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log('forward')}>
            <LinearGradient
              colors={['#FF512F', '#F09819']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.forwardButton}>
              <Text style={styles.buttonText}>Find Tutor</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/*
          <View>
            <Text style={styles.sectionHeader}>Starting Time</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => showTimePicker()}>
              <Text style={styles.placeSelected}>{timeSelected}</Text>
              <View style={styles.line} />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                locale="en_PK" // Use "en_GB" here
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />
            </TouchableOpacity>
          </View>
        */}
        </View>
      </LinearGradient>

      {/* style for modal -> select your grade */}
      <View>
        <Modal
          isVisible={gradeModal}
          style={{justifyContent: 'center'}}
          animationOutTiming={500}>
          <View style={styles.modal}>
            <View style={styles.modalBoxes}>
              <Text style={styles.modalBoxHeader}>Select Your Grade</Text>
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleGradeClass(item.grade)}>
                      <LinearGradient
                        colors={['#ada996', '#dbdbdb']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.modalBox}>
                        <Text style={styles.modalBoxText}>{item.grade}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
      {/* style for modal -> select your course mode */}
      <View>
        <Modal
          isVisible={courseModal}
          style={{justifyContent: 'center'}}
          animationOutTiming={500}>
          <View style={styles.modal}>
            <View style={styles.modalBoxes}>
              <Text style={styles.modalBoxHeader}>Select Your Course Mode</Text>
              <FlatList
                data={coursedata}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleCourse(item.course)}>
                      <LinearGradient
                        colors={['#ada996', '#dbdbdb']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.modalBoxCourse}>
                        <Text style={styles.modalBoxTextCourse}>
                          {item.course}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
      {/* style for modal -> select your session mode */}
      <View>
        <Modal
          isVisible={sessionModal}
          style={{justifyContent: 'center'}}
          animationOutTiming={500}>
          <View style={styles.modal}>
            <View style={styles.modalBoxes}>
              <Text style={styles.modalBoxHeader}>
                Select Your Session Mode
              </Text>
              <FlatList
                data={sessiondata}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleSession(item.session)}>
                      <LinearGradient
                        colors={['#ada996', '#dbdbdb']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.modalBoxCourse}>
                        <Text style={styles.modalBoxTextCourse}>
                          {item.session}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100'),
  },
  iconBack: {
    paddingTop: Platform.OS === 'ios' ? 60 : 5,
    marginLeft: wp('5'),
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? hp('-3') : hp('-5'),
    fontWeight: 'bold',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    marginLeft: wp('5'),
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  placeBoxFlex: {
    width: wp('95'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeBox: {
    marginLeft: wp('5'),
    width: wp('25'),
    height: hp('8'),
    borderRadius: 10,
  },
  placeBoxText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'ios' ? 24 : 16,
    alignSelf: 'center',
  },
  sectionHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: wp('10'),
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
  },
  placeSelected: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: wp('10'),
    paddingTop: Platform.OS === 'ios' ? 10 : 5,
  },
  line: {
    width: wp('90'),
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: hp('1'),
    borderColor: 'grey',
  },
  modal: {
    width: wp('80'),
    height: hp('40'),
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: '#FF512F',
    borderColor: '#FF512F',
    alignSelf: 'center',
  },
  modalBox: {
    width: wp('15'),
    height: hp('8'),
    borderRadius: 10,
    marginLeft: wp('8'),
    marginTop: hp('2'),
  },
  modalBoxText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'ios' ? 25 : 13,
    alignSelf: 'center',
  },
  modalBoxHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 20,
  },
  modalBoxCourse: {
    width: wp('30'),
    height: hp('8'),
    borderRadius: 10,
    marginLeft: wp('8'),
    marginTop: hp('2'),
  },
  modalBoxTextCourse: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'ios' ? 25 : 13,
    alignSelf: 'center',
  },
  Input: {
    marginLeft: wp('10'),
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  forwardButton: {
    width: wp('40'),
    height: hp('8'),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'ios' ? 20 : 12,
    alignSelf: 'center',
  },
});

export default FindTutor;
