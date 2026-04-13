import React, {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useFonts } from 'expo-font';
import { CommonActions } from '@react-navigation/native';


export default function RootLayout() {
  {/**loading the fonts */}
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(true)
  const [fontsLoaded] = useFonts({
    "DMSerifDisplay-Regular": require("../assets/fonts/DMSerifDisplay-Regular.ttf"),
  });
  const router = useRouter();
  
   // Redirect once auth state is known and fonts are loaded
  useEffect(() => {
    if (!fontsLoaded || isAuthenticated === null) return
    if (isAuthenticated) {
      router.replace('/')          // go to homepage
    } else {
      router.replace('/Signin')    // go to sign in
    }
  }, [isAuthenticated, fontsLoaded])

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
            headerShown:false
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
          headerShown:false,
        }}
                listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: '(NotesStack)' }],
              })
            );
          },
        })}
        />
        <Drawer.Screen 
        name='(BudgetStack)'
        options={{
          drawerLabel:'Budget',
          title:'Budget',
          headerShown:false,
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
          headerShown:false
        }}
        />
        <Drawer.Screen 
        name="WaterTracker"
        options={{
          title:"Water Tracker",
          headerShown:false
        }}
        />
        <Drawer.Screen 
        name='(TodayStack)'
        options={{
          drawerItemStyle:{
            display:'none'
          }
        }}
        />
        <Drawer.Screen 
        name='Signin'
        options={{
          drawerItemStyle:{
            display:'none'
          }
        }}
        />
        <Drawer.Screen 
        name='Onboarding'
        options={{
          drawerItemStyle:{
            display:'none'
          }
        }}
        />
      </Drawer>
  );
}
