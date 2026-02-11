import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect} from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles as cStyle } from './DailyTodays';
import Header from '@/components/LayoutComponents/Header';
import CalendarMonth from '@/components/CalendarMonth';
import Event from '@/components/DailyComponents/Event';
import Task from '@/components/DailyComponents/Task';
import SerifText from '@/components/SerifText';

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


const CalendarHome = () => {

  useEffect(() => { // use this to grab dailys for the day user clicks on

  },[])

  return (
    <ScrollView 
    style={styles.container}
    showsVerticalScrollIndicator={false}
    >
      <Header title='' backgroundColorProp='#F6BFBF' paddingProp={24}/>
      <CalendarMonth />
      <View style={{padding:24}}>
        <View style={cStyle.dayContainer}>
          <View>
            <SerifText style={{fontSize:24}}>February 10, 2026</SerifText>
            <SerifText style={{fontSize:20}}>Tuesday</SerifText>
            <SerifText style={{fontSize:16}}>Notes..</SerifText>
          </View>
           <TouchableOpacity>
              <FontAwesome6 
              name="face-grin-beam"
              iconStyle="solid"
              size={45}
              color='#887747'
              />
              {/* <FontAwesomeIcon icon="fa-solid fa-face-grin-beam" /> */}
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

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%'
  },
})

export default CalendarHome;