import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, } from 'react-native'
import { useState } from 'react';
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';
import { FontAwesome6 } from '@expo/vector-icons'
import SerifText from '@/components/SerifText'
import React from 'react'
import Header from '@/components/Header'

const DailyTodays = () => {
  const [checked, setChecked] = useState(false);
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
          {/* <TextInput
          style={{}}
          // onChangeText={}
          // value={}
          placeholder="Start your day"
          keyboardType="numeric"
        /> */}
        {/* <AdvancedCheckbox
          value={checked}
          onValueChange={setChecked}
          label="Buy the damn bananas"
          checkedColor="#007AFF"
          uncheckedColor="#ccc"
          size={24}
    /> */}

        <View>

        </View>


      </ScrollView>
      
      <TouchableOpacity style={styles.addToDoContainer}>
          <FontAwesome6
          name='list-check'
          size={25}
          />
      </TouchableOpacity>
 
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
      justifyContent:'space-between'
    },
    addToDoContainer:{
      alignSelf:'flex-end',
      marginHorizontal:45,
      marginVertical:60

    }
})