import { StyleSheet, View} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import SerifText from '../SerifText'
import { Calendar } from 'react-native-calendars'
import React, {useState, useEffect} from 'react'

type DatePickerProps = {
  onDateChange: (date: string) => void
};

const DatePicker = ({ onDateChange }: DatePickerProps) => {

    const [time, setTime] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

     const onChange = (event: any, selectedDate?: Date) => {
        if (!selectedDate) return

        setTime(prevDate => {
            const newDate = new Date(prevDate)

            newDate.setHours(selectedDate.getHours())
            newDate.setMinutes(selectedDate.getMinutes())
            newDate.setSeconds(0)

            return newDate
        })
    }
    
    const timeString = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    })

    useEffect(() => {
        if (!selectedDate) return;

        const fullDate = `${selectedDate} at ${timeString}`;
        onDateChange(fullDate);
    }, [selectedDate, timeString, onDateChange]); // changes only when the selectedDate and timestring changes

  return (
    <View style={styles.container}>
        <View style={styles.calendarContainer}>
            <Calendar 
            style={styles.calendar}
            enableSwipeMonths
            markedDates={{
                ...(selectedDate && { 
                [selectedDate]: {
                    selected: true,
                    selectedColor: '#FF89A0',
                    selectedTextColor:'#FFF'
                },
                }),
            }}
            onDayPress={(day) => {
            setSelectedDate(day.dateString); // "YYYY-MM-DD"
            }}
            theme={{
                textMonthFontSize: 30,
                textMonthFontWeight:'heavy',
                textDayFontSize: 18,
                arrowColor:'#FF89A0',
                selectedDayTextColor:'#FF89A0',
                textDayFontWeight:'bold',
            }}
            />
            <View style={styles.timePickerRow}>
                <SerifText style={{marginVertical:18, fontSize:20, marginLeft:16}}>Time:</SerifText>
                <DateTimePicker
                testID="dateTimePicker"
                value={time}
                mode='time'
                onChange={onChange}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <SerifText style={{fontSize:18}}>{selectedDate} at {timeString}</SerifText>
            </View>
        </View>
    </View>
  )
}

export default DatePicker;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    calendar:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center'
        width:350
    },
    calendarContainer:{
        backgroundColor:'#FFFFFF',
        padding:12,
        borderRadius:20,
    },
    timePickerRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    }
})