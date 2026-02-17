import { StyleSheet, View, TouchableOpacity, Modal, Pressable} from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import SerifText from '../SerifText';
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

const GeneralAddMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

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
                            onPress={() => {
                                setOpenMenu(false)
                                router.push('/AddCalendarEvent')
                            }}
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
                            onPress={() => {
                                setOpenMenu(false);
                                router.push('/AddCalendarTask');
                            }}
                            style={[styles.buttons, {backgroundColor:'#F9D69E',}]}
                        >
                            <FontAwesome6
                            name="circle-check"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Note</SerifText>
                    <TouchableOpacity 
                        onPress={() => {
                            setOpenMenu(false)
                            router.push('/(NotesStack)/Notes')
                        }}
                        style={[styles.buttons, {backgroundColor:'#BBE6F1',}]}
                        >
                            <FontAwesome6
                            name="note-sticky"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Note Folder</SerifText>
                    <TouchableOpacity 
                        onPress={() => {
                            setOpenMenu(false)
                            router.push('/(NotesStack)/AddNewFolder')
                        }}
                        style={[styles.buttons, {backgroundColor:'#D0E4A1',}]}
                        >
                            <FontAwesome6
                            name="folder"
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

export default GeneralAddMenu;

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        right: 38,
        bottom: 0, // height of footer\
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
        bottom: 65, // height of footer\
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