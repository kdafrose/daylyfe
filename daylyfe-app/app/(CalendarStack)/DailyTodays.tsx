import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList} from 'react-native'
import { useState } from 'react';
import Event from '@/components/DailyComponents/Event';
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';
import { FontAwesome6 } from '@expo/vector-icons'
import DashedLine from 'react-native-dashed-line';
import SerifText from '@/components/SerifText'
import React from 'react'
import Header from '@/components/Header'

const exampleData = [
  {
    eventTitle:"MORNING ROUTINE",
    time:"5:00am-5:30am",
    notes:"Starting a new routine hopefully this will work on my face as the winter is drying up my skin hella",
    eventColor:'#DDBAD9'
  },
  {
    eventTitle:"Matcha time and get ready for work",
    time:"6:00am-7:45m",
    notes:"Try the new matcha poweder from Davids Tea!",
    eventColor:'#F9D69E' // this will change based on what the user will pick on the Add Event Page
  }
]

const DailyTodays = () => {
  return (
    <View style={styles.container}>
      <Header title="Daily's" backgroundColorProp='#F8E1CD'/>
      <ScrollView style={{padding:24}} >
        <View style={styles.dayContainer}>
            <View>
              <SerifText style={{fontSize:24}}>February 3, 2026</SerifText>
              <SerifText style={{fontSize:20}}>Tuesday</SerifText>
              <SerifText style={{fontSize:16}}>Notes..</SerifText>
            </View>

            <TouchableOpacity>
              <FontAwesome6 
              name='smile'
              size={45}
              color='#887747'
              />
            </TouchableOpacity>
        </View>

        <View>
          <FlatList 
          data={exampleData}
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => {

            return (
              <View style={styles.EventBox}>
                <View style={styles.timelineBox}>
                  <View style={[styles.EventTimeline, {backgroundColor:item.eventColor}]}>
                    <SerifText style={{color:'#FFFFFF', fontSize:18}}>{index + 1}</SerifText>
                  </View>
                  <DashedLine 
                  dashLength={8} 
                  axis='vertical'
                  dashThickness={2}
                  style={{flex:1}}
                  />
                </View>
                <Event 
                  eventTitle={item.eventTitle} 
                  time={item.time} 
                  notes={item.notes} 
                />
            </View>
            )
          }}
          />
        </View>
        
      </ScrollView>
      
      {/* <TouchableOpacity style={styles.addToDoContainer}>
          <FontAwesome6
          name='list-check'
          size={25}
          />
      </TouchableOpacity> */}

      {/* <View style={styles.EventBox}>
            <View style={styles.timelineBox}>
              <View style={styles.EventTimeline}>
                <SerifText style={{color:'#FFFFFF', fontSize:18}}>{index + 1}</SerifText>
              </View>
              <DashedLine 
              dashLength={8} 
              axis='vertical'
              dashThickness={2}
              style={{flex:1}}
              />
            </View>

            <Event eventTitle={exampleData[0].eventTitle} time={exampleData[0].time} notes={exampleData[0].notes} />
          </View> */}
 
    </View>
  )
}

export default DailyTodays;

const styles = StyleSheet.create({
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
      paddingVertical:4
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
    }
})