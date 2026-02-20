import { StyleSheet, Text, View } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'
import SerifText from '../SerifText'
import React from 'react'

interface DailyBudgetProps{
    total:number,
    remaining:number,
    budget:number,
    progress:number
}

const DailyBudgetTracker = ({budget, total, remaining, progress}:DailyBudgetProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <CircularProgress 
        radius={65}
        activeStrokeWidth={6}
        inActiveStrokeWidth={6}
        value={progress}
        valueSuffix='%'
        title={`$${total.toString()}`}
        titleFontSize={20}
        inActiveStrokeColor='#FFFFFF'
        inActiveStrokeOpacity={0.2}
        activeStrokeColor='#5D6B3D'
        />
      </View>
      <View style={styles.trackingContainer}>
        <SerifText style={{fontSize:22}}>Today's Budget:</SerifText>
        <SerifText style={{fontSize:22}}>${budget}</SerifText>
        <SerifText style={{fontSize:22}}>Remaining:</SerifText>
        <SerifText style={{fontSize:22}}>${remaining}</SerifText>
      </View>
    </View>
  )
}

export default DailyBudgetTracker

const styles = StyleSheet.create({
    container:{
        margin:24,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    progressContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    trackingContainer:{
        alignItems:'flex-end'
    }
})