import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import SubjectBox from './SubjectBox';

const {width, heigth} = Dimensions.get('window');

let flatList;

/*
function infinteScroll(dataList) {
  const numberOfData = dataList.length;
  let scrollValue = 0;
  let scrolled = 0;

  setInterval(function() {
    scrolled++;
    if (scrolled < numberOfData) {
      scrollValue = scrollValue + width;
    } else {
      scrollValue = 0;
      scrolled = 0;
    }

    flatList.scrollToOffset({animated: true, offset: scrollValue});
  }, 3000);
}
*/

const SubjectBoxList = ({data, subjectName, handleSubjectNavigation}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const [dataList, setDataList] = useState([]);
  // infinteScroll(dataList);

  useEffect(() => {
    setDataList(data);
  });

  if (data && data.length) {
    return (
      <View>
        <Text style={styles.courseMainTitle}>{subjectName}</Text>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <SubjectBox
                item={item}
                handleSubjectNavigation={handleSubjectNavigation}
              />
            );
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    );
  }

  console.log('Please provide Images');
  return null;
};

const styles = StyleSheet.create({
  courseMainTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default SubjectBoxList;
