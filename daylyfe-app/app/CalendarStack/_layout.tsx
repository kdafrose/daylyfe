import { Stack } from 'expo-router';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import ScreenLayout from '@/components/ScreenLayout';

export default function HomeLayout() {

  const backButtonCss: NativeStackNavigationOptions = {
    headerShown:true,
    headerBackButtonDisplayMode:'minimal',
    headerShadowVisible:false,
    headerStyle:{backgroundColor:'transparent'}
  }
  return (
    <ScreenLayout>
    <Stack>
      <Stack.Screen 
      name="calendar" 
      options={{ headerShown:false }}
      />
      <Stack.Screen 
      name="addCalendarEvent" 
      options={{ 
        headerTitle: 'New Event',
        ...backButtonCss
      }} 
      />
      <Stack.Screen 
      name="addCalendarTask" 
      options={{ 
        headerTitle: 'New Task',
        ...backButtonCss
      }} 
      />
      <Stack.Screen 
      name="dailyTodays" 
      options={{ 
        headerTitle: "Daily's",
        ...backButtonCss
      }} 
      />
    </Stack>
    </ScreenLayout>
  );
}
