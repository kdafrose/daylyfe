import { StyleSheet, View, TouchableOpacity, Modal, Pressable} from 'react-native'
import { useState } from 'react';
import SerifText from './SerifText';
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

const CalendarAddMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <View style={styles.container}>

        <TouchableOpacity 
        onPress={() => setOpenMenu(true)}
        style={[styles.buttons, {backgroundColor:'#F6BFBF',}]}
        >
            <FontAwesome6
            name="plus"
            size={22.5}
            />
        </TouchableOpacity>
            <Modal
            animationType='fade'
            visible={openMenu}
            transparent={true}
            onRequestClose={() => setOpenMenu(false)}
            >
                <Pressable style={styles.opacityBox}/>
                <View style={styles.modalBox}>
                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Event</SerifText>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={[styles.buttons, {backgroundColor:'#DDBAD9',}]}
                        >
                            <FontAwesome6
                            name="calendar-check"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Task</SerifText>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={[styles.buttons, {backgroundColor:'#F9D69E',}]}
                        >
                            <FontAwesome6
                            name="circle-check"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Add Note</SerifText>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={[styles.buttons, {backgroundColor:'#CDDEFF',}]}
                        >
                            <FontAwesome6
                            name="paperclip"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                    <TouchableOpacity 
                        onPress={() => setOpenMenu(false)}
                        style={[styles.buttons, {backgroundColor:'#F6BFBF',}]}
                        >
                            <FontAwesome6
                            name="xmark"
                            size={22.5}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
  )
}

export default CalendarAddMenu;

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        right: 38,
        bottom: 70, // height of footer\
        marginVertical:8,
        justifyContent:'space-evenly',
    },
    buttons:{
        height:40,
        width:40,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    modalBox:{
        position:'absolute',
        right: 38,
        bottom: 54, // height of footer\
        marginVertical:8,
        justifyContent:'space-evenly',
        height:240
    },
    opacityBox:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:"#F8E1CD",
        opacity:0.9,
    },
    buttonsBoxRow:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        alignContent:'space-evenly',
        gap:10,
    }
})