import { StyleSheet} from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack
    initialRouteName='DailyTodays'
    screenOptions={{
      animation:'none'
    }}
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