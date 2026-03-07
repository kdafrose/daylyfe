import { StyleSheet,View} from 'react-native'
import React from 'react'
import {Calendar} from 'react-native-calendars';

const CalendarMonth = () => {

  return (
    <View style={styles.monthContainer}>
        <Calendar
        enableSwipeMonths
        theme={{
            calendarBackground:'#F6BFBF',
            monthTextColor: '#FFFFFF',
            textMonthFontSize: 30,
            textMonthFontWeight:'heavy',
            dayTextColor: '#FFFFFF',
            textDayFontSize: 18,
            arrowColor:'#FFFFFF',
            selectedDayTextColor:'#FF89A0',
            textSectionTitleColor:'#FFFFFF',
            textDayFontWeight:'bold',
            todayTextColor:'#FF89A0',
        }}
        onDayPress={(date) => {
            const dateString = new Date(date.year, date.month - 1, date.day)
            console.log(dateString.toDateString())
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