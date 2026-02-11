import { usePathname, Stack } from 'expo-router';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useRouter, useNavigation } from 'expo-router';
import { useTheme, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Footer and Layouts
import Header from '@/components/LayoutComponents/Header';
import GeneralAddMenu from '@/components/LayoutComponents/GeneralAddMenu';
import CalendarAddMenu from '@/components/LayoutComponents/CalendarAddMenu';
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout';



export default function CalendarHomeLayout() {

  const backButtonCss: NativeStackNavigationOptions = {
    headerShown:true,
    headerBackButtonDisplayMode:'default',
    headerShadowVisible:true,
    headerStyle:{
      backgroundColor:'#F8E1CD'
    },
    headerLargeTitleShadowVisible:false
  }
  const routerPath = usePathname();
  const router = useRouter();
  const navigation = useNavigation()
  const theme = useTheme();

  theme.colors.background = 'transparent';

  const renderMenu = () => {
    switch(routerPath){
      case '/DailyTodays':
      case '/':
        return <CalendarAddMenu />
      case '/AddCalendarEvent':
        return null;
      case '/AddCalendarTask':
        return null;
      default:
        return <GeneralAddMenu />
    }
  }
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
          // ...backButtonCss,
        }} 
        />

        <Stack.Screen 
        name="AddCalendarTask" 
        options={{ 
          headerTitle: 'New Task',
          headerShown:false,
          // ...backButtonCss,
        }} 
        />

        <Stack.Screen 
        name="DailyTodays" 
        options={{ 
        headerTitle: "Daily's",
        ...backButtonCss,
        headerShown:false,
        headerLeft: () => {
          return (
            <Ionicons
              name="chevron-back"
              size={24}
              onPress={() => {
                router.push('/(CalendarStack)/CalendarHome');
              }}
            />
          )
        },
        headerRight: () => (
          <Ionicons
          name="menu"
          size={24}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())}
          }
        />
        )
        }}
        />
      </Stack>
      {renderMenu()}
      </ScreenLayout>

  );
}
