import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList} from 'react-native'
import Event from '@/components/DailyComponents/Event';
import Task from '@/components/DailyComponents/Task';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceGrinBeam } from '@fortawesome/free-solid-svg-icons';
import SerifText from '@/components/SerifText'
import React, {useState} from 'react'
import Header from '@/components/LayoutComponents/Header'

const exampleData = [ // these will be sorted on render based on the times
  {
    title:"MORNING ROUTINE",
    eventType:'event',
    time:"5:00am-5:30am",
    notes:"Starting a new routine hopefully this will work on my face as the winter is drying up my skin hella",
    color:'#DDBAD9'
  },
  {
    title:"Matcha time and get ready for work",
    eventType:'event',
    time:"6:00am-7:45m",
    notes:"Try the new matcha poweder from Davids Tea!",
    color:'#F9D69E' // this will change based on what the user will pick on the Add Event Page
  },
  {
    title:"UI Team Meeting",
    eventType:'task',
    time:"11:00am-11:45m",
    notes:"Meeting with Martin and Nancy on Zoom also doing a long ass task to see if it will overlap or not",
  },
  {
  title:"MORNING ROUTINE",
  eventType:'event',
  time:"5:00am-5:30am",
  notes:"Starting a new routine hopefully this will work on my face as the winter is drying up my skin hella",
  color:'#FBD4C0'
  },
]

const DailyTodays = () => {
  return (
    <View style={styles.container}>
      <Header title="Daily's" backgroundColorProp='#F8E1CD' paddingProp={24}/>
      <ScrollView style={{padding:24}} >
        <View style={styles.dayContainer}>
            <View>
              <SerifText style={{fontSize:24}}>February 3, 2026</SerifText>
              <SerifText style={{fontSize:20}}>Tuesday</SerifText>
              <SerifText style={{fontSize:16}}>Notes..</SerifText>
            </View>

            <TouchableOpacity>
              <FontAwesomeIcon 
                icon={faFaceGrinBeam}
                size={45}
                color='#ffc66bff'
                />
            </TouchableOpacity>
        </View>

        {/**eventType:event */}
        <FlatList 
        data={exampleData}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {

          return (
            <View style={{alignSelf:'flex-start'}}>
            {item.eventType === 'event' && (
              <Event
                eventTitle={item.title}
                time={item.time}
                notes={item.notes}
                color={item.color}
                taskNum={index}
              />
            )}
            {item.eventType === 'task' && (
              <Task 
              // id={'1'}
              title={item.title}
              time={item.time}
              taskTodo ={item.notes}
              taskChecked={false}
              // onToggle={() => {}}
              />
            )}
          </View>
          )
        }}
        />
        
      </ScrollView>
    </View>
  )
}

export default DailyTodays;

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F8E1CD',
        flex:1,
        ...StyleSheet.absoluteFillObject,
    },
    dayContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:10
    },
    addToDoContainer:{
      alignSelf:'flex-end',
      marginHorizontal:45,
      marginVertical:60
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
      justifyContent:'flex-start',
      alignItems:'center',
      gap:8,
      alignSelf:'stretch',
      backgroundColor:'red'
    }
})