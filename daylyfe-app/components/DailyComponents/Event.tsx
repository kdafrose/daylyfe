import { StyleSheet, View, TouchableOpacity } from 'react-native'
import SerifText from '../SerifText'
import React, {FC} from 'react'

interface EventProps {
    eventTitle:string,
    time:string,
    notes:string
}

const Event:FC<EventProps> = ({eventTitle, time, notes}) => {
  return (

    <View style={{height:'auto'}}>
        <View style={styles.EventTitleSection}>
            <SerifText style={{fontSize:18}}>{eventTitle}</SerifText>
            <SerifText style={styles.time}>{time}</SerifText>
            <SerifText style={styles.notesBox}>{notes}</SerifText>
        </View>
        <TouchableOpacity style={styles.todoButtonBox}>
            <View style={styles.checkBox}></View>
            <SerifText> + Add To Do</SerifText>
        </TouchableOpacity>
    </View>

  )
}

export default Event

const styles = StyleSheet.create({
    EventTitleSection:{
        justifyContent:'flex-start',
        height:'auto'
    },
    time:{
        color:'#8A94A6',
        fontSize:15
    }, 
    notesBox:{
        fontSize:14,
        width:300
    },
    checkBox:{
        width:15,
        height:15,
        borderRadius:2,
        borderColor:'#8A94A6',
        borderWidth:2
    },
    todoButtonBox:{
        paddingVertical:6,
        flexDirection:'row',
        alignItems:'center',
        gap:6
    }
})