import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from "expo-router";
import ScreenLayout from '@/components/ScreenLayout';


const calendar = () => {
  // flatlist is better on React Native over mapping to build a list
    // reason is that flat list is already optimized to show data of a huge list
    // Must Haves Props:
      // data: pass in the array of records that we want to list
      // 
    const daysOfWeek = [ // element = daysOfWeek
      {day:'Mon', key:'1'}, // item
      {day:'Tues', key:'2'}, // the key can be used for every list, but better to use keyExtractor
      {day:'Wedn', key:'3'},
      {day:'Thurs', key:'4'},
      {day:'Fri', key:'5'},
      {day:'Sat', key:'6'},
      {day:'Sun', key:'7'},
    ];

  return (
    <View style={{position:'relative'}}>
      <View style={style.calendarBox}>
        <FlatList
          data={daysOfWeek}
          horizontal
          showsHorizontalScrollIndicator={false} // removes the horizontal scroll bar
          keyExtractor={d => d.day} // render keys at runtime, this appraoch is going to be much better
          renderItem={({item}) => { // This deconstructs the list and automatically goes to the element of list
          return <Text style={style.weeks} >{item.day}</Text> 
         }}
         />
         <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => router.push('/CalendarStack/addCalendarEvent')}>
          <Text>Add Event</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/CalendarStack/addCalendarTask')}>
          <Text>Add Task</Text>
        </TouchableOpacity>

         </View>
      </View>

      <View style={style.dailysBox}>
        <Text>HEllo</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  calendarBox:{
    backgroundColor:'#F6BFBF',
    height:400,
  },
  dailysBox:{
    backgroundColor:'#F8E1CD',
    borderRadius:30,
    height:370,

    position: 'absolute',
    top: 370,        // 👈 controls overlap amount
    left: 0,
    right: 0,
  },
  weeks:{
    marginHorizontal:15,
  },
})

export default calendar;