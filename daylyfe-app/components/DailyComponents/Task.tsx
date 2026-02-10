import { StyleSheet,View } from 'react-native'
import SerifText from '../SerifText'
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome6 } from '@expo/vector-icons';
import DashedLine from 'react-native-dashed-line';
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';
import React, {FC, useState} from 'react'

interface TaskProps{
    id:string
    title:string,
    time:string,
    taskTodo:string,
    taskChecked:boolean,
    onToggle: (id:string) => void;
}

const Task:FC<TaskProps> = ({id, title, time, taskTodo, taskChecked, onToggle}) => {
    const [checked,setChecked] = useState(false);
    const [taskDescription, setTaskDescription] = useState('')
    const [contentHeight, setContentHeight] = useState(0);
  return (
    <View style={{flexDirection:'row',alignItems:'flex-start'}}>
        <View style={{alignItems:'center', gap:8, paddingVertical:8, paddingLeft:2}}>
            <FontAwesome6 
            name='circle-check'
            color='#FFF'
            size={35}
            />
            <DashedLine 
            dashLength={8} 
            axis='vertical'
            dashThickness={2}
            style={{height:contentHeight * 0.66}}
            />
        </View>

        <View 
        style={styles.taskContainer}
        onLayout={(event) => {
          setContentHeight(event.nativeEvent.layout.height); // measure height
        }}
        >
        <SerifText style={{fontSize:18}}>{title}</SerifText>
        <SerifText style={styles.time}>{time}</SerifText>
        <View style={styles.taskLine}>
            <AdvancedCheckbox 
            value={checked}
            onValueChange={() => {setChecked(!checked)}}
            size={18}
            uncheckedColor='#8A94A6'
            checkedColor='#F6BFBF'
            />
            <SerifText style={{fontSize:14, paddingLeft:6}}>{taskTodo}</SerifText>
            <TextInput 
            
            />
        </View>
        </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    taskContainer:{
        width:300,
        paddingBottom:8,
        paddingRight:18,
        marginHorizontal:20,
    },
    time:{
        color:'#8A94A6',
        fontSize:15
    }, 
    task:{
        fontSize:14,
    },
    taskLine:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
})