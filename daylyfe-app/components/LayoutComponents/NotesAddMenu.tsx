import { StyleSheet, View, TouchableOpacity, Modal, Pressable} from 'react-native'
import { useState } from 'react';
import SerifText from '../SerifText';
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

interface notesAddMenuProps {
    isPin:boolean,
    onPinChange: (pin:boolean) => void
    
}

//TODO:update sb to pin note
const pinNote = () => {

}

// TODO:Delete the note
const deleteNote = () => {

}

//TODO:Update db to move note to a folder
const addNoteToFolder = () => {

}



const NotesAddMenu = ({onPinChange, isPin}: notesAddMenuProps) => {
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
                        <SerifText style={{fontSize:18}}>Add to Folder</SerifText>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={[styles.buttons, {backgroundColor:'#DDBAD9',}]}
                        >
                            <FontAwesome6
                            name="folder-plus"
                            size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Pin</SerifText>
                        <TouchableOpacity 
                            onPress={() => {
                                onPinChange(!isPin)
                            }}
                            style={[styles.buttons, {backgroundColor:'#F9D69E',}]}
                        >
                            <FontAwesome6
                            name="thumbtack"
                            size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Move</SerifText>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={[styles.buttons, {backgroundColor:'#CDDEFF',}]}
                        >
                            <FontAwesome6
                            name="angles-right"
                            size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsBoxRow}>
                        <SerifText style={{fontSize:18}}>Delete</SerifText>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={[styles.buttons, {backgroundColor:'#FBD4C0',}]}
                        >
                            <FontAwesome6
                            name="trash-can"
                            size={20}
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

export default NotesAddMenu;

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        right: 18,
        bottom: -20, // height of footer\
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