import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useRouter, useNavigation, usePathname} from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import React, {FC} from 'react'
import { styles as headerStyles } from './Header'
import { Ionicons } from '@expo/vector-icons'
import SerifText from '../SerifText'

interface DrawerHeaderProps{
    title:string,
    backgroundColorProp:string,
    paddingProp:number,
    paddingLeftProp:number
}

const DrawerHeader:FC<DrawerHeaderProps> = ({title, backgroundColorProp, paddingProp, paddingLeftProp}) => {
    const navigation = useNavigation();

    return (
    <View style={[headerStyles.container, styles.drawerHeader, {backgroundColor:backgroundColorProp, padding:paddingProp, paddingLeft:paddingLeftProp}]}>
        <SerifText style={{fontSize:24}}>{title}</SerifText>
        <TouchableOpacity>
            <Ionicons 
            name="menu"
            size={24}
            onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer())}}
            />
        </TouchableOpacity>
      
    </View>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({
    drawerHeader:{
        justifyContent:'space-between',
        marginLeft:'auto',
        width:'70%',
        flexDirection:'row',
    }
})