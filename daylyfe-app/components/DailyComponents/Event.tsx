import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import DashedLine from 'react-native-dashed-line'
import { AdvancedCheckbox } from 'react-native-advanced-checkbox'
import SerifText from '../SerifText'
import React, {FC, useState} from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

interface EventProps {
    eventTitle:string,
    time:string,
    notes:string,
    color:string | undefined,
    taskNum:number, 
}

interface todoProps{
    todoTask:string,
    isChecked:boolean
}

const sampleTodoDate = [ // Needs a foreign key of Event table to grab
    {
        todoTask:'Dont forget to do some yoga',
        isChecked: true
    },
     {
        todoTask:'Take a walk and breathe boi',
        isChecked:false
    }
]

function handleAddTodo() {
    // will persist to the database
}

const Event:FC<EventProps> = ({eventTitle, time, notes, color, taskNum}) => {
    const [todos,setTodos] = useState<todoProps[]>(sampleTodoDate); // HARDCODED
    const [contentHeight, setContentHeight] = useState(0)

  return (
    <View style={{flexDirection:'row', alignItems:'flex-start'}}>

        <View style={styles.timelineBox}>
            <View style={[styles.EventTimeline, {backgroundColor:color}]}>
            <SerifText style={{color:'#FFFFFF', fontSize:18}}>{taskNum + 1}</SerifText>
            </View>
            <DashedLine 
            dashLength={8} 
            axis='vertical'
            dashThickness={2}
            style={{ height:contentHeight *0.8}} //70% of the entire height of child
            />
        </View>

        <View 
        style={{paddingLeft:18}}
         onLayout={(event) => {
          setContentHeight(event.nativeEvent.layout.height); // measure height
        }}
        >
            <View style={styles.EventTitleSection}>
                <SerifText style={{fontSize:18}}>{eventTitle}</SerifText>
                <SerifText style={styles.time}>{time}</SerifText>
                <SerifText style={styles.notesBox}>{notes}</SerifText>
            </View>
            <TouchableOpacity 
            style={styles.todoButtonBox}
            onPress={() => setTodos(todos.concat({
                todoTask:'',
                isChecked:false
            }))}
            >
                {/* <View style={styles.checkBox}></View> */}
                <FontAwesome6 
                name='plus'
                size={15}
                color='#FF6868'
                />
                <SerifText>Add To Do</SerifText>
            </TouchableOpacity>

            <FlatList 
                data={todos}
                keyExtractor={(_,index) => index.toString()}
                scrollEnabled={false}
                renderItem ={({item, index}) => {
                    return (
                        <View style={styles.todoLine}>
                            <View style={{flexDirection:'row', alignItems:'center', gap:6}}>
                                <AdvancedCheckbox
                                value={item.isChecked}
                                // onValueChange={() => {}} Fill this in later
                                onValueChange={() => {
                                const updatedTodos = [...todos]; // create an array and add current todos
                                updatedTodos[index].isChecked = !updatedTodos[index].isChecked; // check todo based on index
                                setTodos(updatedTodos); // save changes of current and new todos (rewriting)
                            }}
                                size={18}
                                uncheckedColor='#8A94A6'
                                checkedColor='#F6BFBF'
                                />
                                {/* <SerifText>{item.todoTask}</SerifText> */}
                                <TextInput 
                                style={{fontFamily:'DMSerifDisplay-Regular'}}
                                value={item.todoTask}
                                onChangeText={(text) => {
                                const updatedTodos = [...todos]; // create new array with current todos list
                                updatedTodos[index].todoTask = text; // change the task
                                setTodos(updatedTodos); // save as rewrite for the new changes
                            }}
                                placeholder='Add new task...'
                                />
                        </View>
                        <View>
                            <TouchableOpacity
                            onPress={() => {
                                // deleteEvent(index)
                            }}
                            >
                                <FontAwesome6 
                                    name='x'
                                    size={12}
                                    color='#8A94A6'
                                    />
                            </TouchableOpacity>
                        </View>
                    </View>
                    )
                }}
            />
        </View>
    </View>

  )
}

export default Event

const styles = StyleSheet.create({
    EventTitleSection:{
        justifyContent:'flex-start',
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
    },
    EventBox:{
      flexDirection:'row',
      gap:15,
      paddingVertical:4,
    },
    EventTimeline:{
      backgroundColor:'#DDBAD9',
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center'
    },
    timelineBox:{
      alignItems:'center', 
      gap:8,
      paddingVertical:8
    },
    todoLine:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:12}
})