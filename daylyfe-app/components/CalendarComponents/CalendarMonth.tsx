import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {Calendar, CalendarUtils} from 'react-native-calendars';

const CalendarMonth = () => {

  return (
    <View style={styles.monthContainer}>
       {/* <FlatList
        data={daysOfWeek}
        horizontal
        showsHorizontalScrollIndicator={false} // removes the horizontal scroll bar
        keyExtractor={d => d.day} // render keys at runtime, this appraoch is going to be much better
        renderItem={({item}) => { // This deconstructs the list and automatically goes to the element of list
        return <Text style={{}} >{item.day}</Text> 
        }}
        /> */}
        <Calendar
        enableSwipeMonths
        theme={{
            calendarBackground:'#F6BFBF',
            monthTextColor: '#FFFFFF',
            textMonthFontSize: 30,
            textMonthFontWeight:'heavy', // or your bold font
            dayTextColor: '#FFFFFF',
            textDayFontSize: 18,
            arrowColor:'#FFFFFF',
            selectedDayTextColor:'#FF89A0',
            textSectionTitleColor:'#FFFFFF',
            textDayFontWeight:'bold',
            todayTextColor:'#FF89A0',
            
        }}
        />
    </View>
  )
}

export default CalendarMonth

const styles = StyleSheet.create({
    monthContainer:{
        height:340,
        backgroundColor:'#F6BFBF'
    },
    calendar:{
        backgroundColor:'#F6BFBF',

    }
})