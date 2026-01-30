import {useFonts} from 'expo-font'
import { Drawer } from 'expo-router/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import {View, Text} from 'react-native'


export default function RootLayout() {
  {/**loading the fonts */}
    const [fontsLoaded] = useFonts({
        "DMSerifDisplay-Regular": require("../assets/fonts/DMSerifDisplay-Regular.ttf"),
      });

    if (!fontsLoaded) return null;

    return (
      <Drawer screenOptions={{
        headerShown:false,
        drawerPosition:'right'
        }}>

        <Drawer.Screen 
          name="index"
          options={{ 
            drawerLabel:'Home',
            title:'Home',
            headerShown:true
          }}
        />
        <Drawer.Screen 
          name="CalendarStack"
          options={{ 
            drawerLabel:'Calendar',
            title:'Calendar',
            headerShown:true
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
