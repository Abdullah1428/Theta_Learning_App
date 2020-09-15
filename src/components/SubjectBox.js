import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SubjectBox = ({item}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={[item.color1, item.color2]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.boxCircleView}>
          <View>
            <Image
              source={require('../resources/images/butt.png')}
              style={styles.logoView}
            />
          </View>
        </LinearGradient>
        <Text style={styles.subjectName}>{item.subjectName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boxView: {
    flex: 1,
    width: wp('20'),
    height: hp('12'),
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    opacity: 0.8,
  },
  boxCircleView: {
    backgroundColor: 'white',
    height: Platform.OS === 'ios' ? 70 : 50,
    width: Platform.OS === 'ios' ? 70 : 50,
    borderRadius: Platform.OS === 'ios' ? 70 / 2 : 50 / 2,
    marginTop: hp('1'),
    marginLeft: wp('3'),
  },
  logoView: {
    width: Platform.OS === 'ios' ? 32 : 26,
    height: Platform.OS === 'ios' ? 32 : 26,
    marginTop: hp('2'),
    alignSelf: 'center',
  },
  subjectName: {
    color: 'black',
    fontSize: 15,
    marginTop: hp('1'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: wp('2'),
  },
});

export default SubjectBox;
