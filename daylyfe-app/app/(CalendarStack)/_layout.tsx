import { usePathname, Stack } from 'expo-router';
import { useTheme} from '@react-navigation/native';

// Footer and Layouts
import GeneralAddMenu from '@/components/LayoutComponents/GeneralAddMenu';
import CalendarAddMenu from '@/components/LayoutComponents/CalendarAddMenu';
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout';



export default function CalendarHomeLayout() {

  const routerPath = usePathname();
  const theme = useTheme();

  theme.colors.background = 'transparent';
  
  return (
    <ScreenLayout>
    <Stack initialRouteName='CalendarHome'>
        <Stack.Screen 
        name="CalendarHome" 
        options={{ 
        headerTitle:"Calendar",
        headerShown:false,
        }}
        />

        <Stack.Screen 
        name="AddCalendarEvent" 
        options={{ 
          headerTitle: 'New Event',
          headerShown:false,
        }} 
        />

        <Stack.Screen 
        name="AddCalendarTask" 
        options={{ 
          headerTitle: 'New Task',
          headerShown:false,
        }} 
        />
      </Stack>
      </ScreenLayout>

  );
}
