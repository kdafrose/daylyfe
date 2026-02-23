import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Svg, Path} from 'react-native-svg'
import WaterFace from '@/components/WaterFace'

const WaterTracker = () => {
  return (
    <View>
      <WaterFace progress={10} />
    </View>
  )
}

export default WaterTracker

const styles = StyleSheet.create({})