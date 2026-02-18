import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useRouter, useNavigation, usePathname} from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import SerifText from '../SerifText'
import React, {FC} from 'react'

interface CalendarHeaderProps{
    title:string,
    backgroundColorProp:string,
    paddingProp:number
}

const CalendarHeader:FC<CalendarHeaderProps> = ({title, backgroundColorProp, paddingProp}) => {
    const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor:backgroundColorProp, padding:paddingProp,}]}>
        <View style={styles.header}>
            <SerifText style={{fontSize:24, color:'#FFF',}}>{title}</SerifText>
            <TouchableOpacity>
                <Ionicons
                    name="menu"
                    style={{color:'#FFF',}}
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

export default CalendarHeader;

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