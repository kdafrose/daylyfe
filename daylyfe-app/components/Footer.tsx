import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SerifText from './SerifText'
import { router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
        <View style={styles.footerContentBox}>
            <View style={styles.footerContent}>
                <TouchableOpacity 
                style={styles.todayButton}
                onPress={()=>router.push('/CalendarStack/dailyTodays')}
                >
                    <SerifText style={{fontSize:14}}>today</SerifText>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => router.push('/Calculator')}
                >
                    <FontAwesome5 
                    name="calculator" 
                    size={30}  
                    solid={false} // false = regular, true = solid
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.footerContent}>
                    <View style={styles.footerIconsLeft}>
                        <FontAwesome5 
                        name="tint"
                        size={25}
                        solid={false}
                        />
                    <Text>Water</Text>
                    </View>

                    <View style={styles.footerIconsLeft}>
                        <FontAwesome5
                        name="shoe-prints"
                        style={{ transform: [{ rotate: '270deg' }] }}
                        size={25}
                        />
                        <Text>Steps</Text>
                    </View>
            </View>
        </View>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
    container:{
        padding:18,
        marginBottom:8,
    },
    footerContentBox:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footerContent:{
        flexDirection:'row',
        width:150,
        height:30,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    footerIconsLeft:{
        alignItems:'center',
        justifyContent:'flex-end',
        height:40
    },
    todayButton:{
        width:65,
        height:35,
        backgroundColor:'#F6BFBF',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        borderLeftWidth:2,
        borderBottomWidth:2,
        marginLeft:4
    }
})