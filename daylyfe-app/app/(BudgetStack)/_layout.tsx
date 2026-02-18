import { usePathname, Stack } from 'expo-router';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useRouter, useNavigation } from 'expo-router';
import { useTheme, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import GeneralAddMenu from '@/components/LayoutComponents/GeneralAddMenu';
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout';

export default function BudgetLayout() {
    return (
        <ScreenLayout>
            {/**Screens */}
            <Stack initialRouteName='BudgetHome'>
                <Stack.Screen 
                name='BudgetHome'
                options={{
                    headerTitle:'Budget',
                    headerShown:false
                }}
                />
            </Stack>
            {/**End of Screens */}
            <GeneralAddMenu />
        </ScreenLayout>
    )
}