import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { router } from "expo-router";
import Header from '@/components/Header';
import CalendarMonth from '@/components/CalendarMonth';
import SerifText from '@/components/SerifText';


const CalendarHome = () => {
  return (
    <View style={styles.container}>
      <Header title='' backgroundColorProp='#F6BFBF'/>
      <CalendarMonth />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F6BFBF',
  },
  calendarBox:{

  }
})

export default CalendarHome;