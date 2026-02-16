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
                return 0
            default:
                return 100
        }
    }

    const showDrawer = () => {
        switch(routeName){
            case '/AddCalendarEvent':
            case '/AddCalendarTask':
                return 0;
            default:
                return 100;
        }
    }

    // const backButtonLocation = () => {
    //     switch(routeName){
    //         case '/DailyTodays':
    //         case '/':
    //             return router.push('/(CalendarStack)/CalendarHome');
    //         default:
    //             return router.back();
    //     }
    // }

  return (
    <View style={[styles.container, {backgroundColor:backgroundColorProp, padding:paddingProp,}]}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons
                    name="chevron-back"
                    size={24}
                    style={{opacity:showBack()}}
                    onPress={() => {
                        // backButtonLocation();
                        router.push('/(CalendarStack)/CalendarHome');
                    }}
                />
            </TouchableOpacity>

            <SerifText style={{fontSize:24,}}>{title}</SerifText>
            <TouchableOpacity>
                <Ionicons
                    name="menu"
                    style={{ opacity:showDrawer()}}
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

const styles = StyleSheet.create({
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