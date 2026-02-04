import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenLayout from '@/components/ScreenLayout'
import GeneralAddMenu from '@/components/GeneralAddMenu'

const Calculator = () => {
  return (
    <ScreenLayout>
      <View>
          <Text>Calculator</Text>
      </View>
      <GeneralAddMenu/>
    </ScreenLayout>
  )
}

export default Calculator

const styles = StyleSheet.create({})