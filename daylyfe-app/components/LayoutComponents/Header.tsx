import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useRouter, useNavigation, usePathname} from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import SerifText from '../SerifText'
import React, {FC} from 'react'

interface HeaderProps{
    title:string,
    backgroundColorProp:string,
    paddingProp:number
}

const Header:FC<HeaderProps> = ({title, backgroundColorProp, paddingProp}) => {
    const router = useRouter();
    const navigation = useNavigation();
    const routeName = usePathname();

    const showBack = () => {
        switch(routeName){ // all home pages will not have a back button
            case '/CalendarHome':
            case '/NotesHome':
            case '/BudgetHome':
            case '/':
                return 'none'
            default:
                return 'flex'
        }
    }

    const showDrawer = () => {
        switch(routeName){
            case '/AddCalendarEvent':
            case '/AddCalendarTask':
            case '/AddNewFolder':
                return 'none';
            default:
                return 'flex';
        }
    }

const backRoute = () => {
    if (router.canGoBack()) {
        router.back(); 
    } else {
        router.replace('/');
    }
}
    // const canGoBack = router.canGoBack()

  return (
    <View style={[styles.container, {backgroundColor:backgroundColorProp, padding:paddingProp,}]}>
        <View style={styles.header}>
            <TouchableOpacity
            onPress={() => {
                backRoute()
            }}
            >
                <Ionicons
                    name="chevron-back"
                    size={24}
                    style={{display:showBack()}}
                />
            </TouchableOpacity>

            <SerifText style={{fontSize:24}}>{title}</SerifText>
            <TouchableOpacity>
                <Ionicons
                    name="menu"
                    style={{ display:showDrawer()}}
                    size={24}
                    onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer())}
                    }
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

export const styles = StyleSheet.create({
    container:{
        paddingTop:52,
        paddingBottom:0
    },
    header:{
        height:48,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    }
})