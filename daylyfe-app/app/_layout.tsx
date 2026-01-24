import { Stack } from "expo-router";
import {useFonts} from 'expo-font'

export default function RootLayout() {
  {/**loading the fonts */}
      const [fontsLoaded] = useFonts({
          "DMSerifDisplay-Regular": require("../assets/fonts/DMSerifDisplay-Regular.ttf"),
        });
  
      if (!fontsLoaded) return null;
  return (
  <Stack>
    <Stack.Screen 
    name="components/calendar"
    options={{ title:"Calendar" }}
    />
  </Stack>
  );
}
