import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name="calendar" 
      options={{ headerShown:false }}
      />
      <Stack.Screen 
      name="addCalendarEvent" 
      options={{ 
        headerShown:true,
        headerTitle: 'Add Event',
        headerBackButtonDisplayMode:'minimal',
        headerShadowVisible:false,
        headerStyle:{backgroundColor:'transparent',}
      }} 
      />
    </Stack>
  );
}
