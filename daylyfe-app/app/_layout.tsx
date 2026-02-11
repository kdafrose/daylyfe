import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { useFonts } from 'expo-font';


export default function RootLayout() {
  {/**loading the fonts */}
  const [fontsLoaded] = useFonts({
      "DMSerifDisplay-Regular": require("../assets/fonts/DMSerifDisplay-Regular.ttf"),
    });
  if (!fontsLoaded) return null;

    return (
      <Drawer
      initialRouteName='index'
      screenOptions={{
        headerShown:false,
        headerTintColor:'#000',
        drawerPosition:'right',
        drawerStyle:{
          backgroundColor:'#F6BFBF',
        },
        headerStyle:{
          backgroundColor:'#F8E1CD',
          shadowColor:'transparent',
        }
        }}
      >
        <Drawer.Screen 
          name="index"
          options={{ 
            drawerLabel:'Home',
            title:'Home',
            headerShown:true
          }}
        />
        <Drawer.Screen 
          name="(CalendarStack)"
          options={{ 
            drawerLabel:'Calendar',
            title:'Calendar',
            headerShown:false,
            headerStyle:{
              backgroundColor:'#F8E1CD',
              shadowColor:'transparent'
            },
          }}
        />
        <Drawer.Screen 
        name='(NotesStack)'
        options={{
          drawerLabel:'Notes',
          title:'Notes',
          headerShown:true,
          headerStyle:{
            backgroundColor:'#F8E1CD',
            shadowColor:'transparent'
          },
        }}
        />
         <Drawer.Screen 
          name="Calculator"
          options={{ 
            drawerLabel:'Calculator',
            title:'Calculator',
            headerShown:true
          }}
        />
      </Drawer>
  );
}
