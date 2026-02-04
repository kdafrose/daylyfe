import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SerifText from '@/components/SerifText'
import React from 'react'
import Header from '@/components/Header'

const DailyTodays = () => {
  return (
    <View style={styles.container}>
      <Header title="Daily's" backgroundColorProp='#F8E1CD'/>
      <ScrollView style={{padding:24}} >
        <View style={styles.dayContainer}>
            <SerifText>February 3, 2026</SerifText>
            <SerifText>Tuesday</SerifText>
            <SerifText>Notes..</SerifText>
        </View>
      </ScrollView>
 
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

    }
})