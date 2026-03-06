import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack
    initialRouteName='DailyTodays'
    >
        <Stack.Screen 
        name='DailyTodays'
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen 
        name='PreviewNote'
        options={{
            headerShown:false
        }}
        />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})