import { Stack } from "expo-router";
import {useFonts} from 'expo-font'
import { Drawer } from 'expo-router/drawer';
import { StackScreen } from "react-native-screens";


export default function RootLayout() {
  {/**loading the fonts */}
    const [fontsLoaded] = useFonts({
        "DMSerifDisplay-Regular": require("../assets/fonts/DMSerifDisplay-Regular.ttf"),
      });

    if (!fontsLoaded) return null;

    return (
      <Drawer screenOptions={{
        headerShown:false
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

      </Drawer>
  );
}
