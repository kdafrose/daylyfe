import { StyleSheet, TextInput, View, ScrollView, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThumbTack, faCheck,} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import SerifText from '../SerifText'
import NotesAddMenu from '../LayoutComponents/NotesAddMenu'

interface AddNotesProps{
    title:string,
    date:string,
    noteContent:string
}


const AddNotes = ({title, date, noteContent}:AddNotesProps) => {

    // TODO:Save the notes
    const saveNote = () => {
        // save to backend!
        console.log('save note!')
    }

    const [isPinned, setIsPinned] = useState(false); 
    const [noteTitle, setNoteTitle] = useState<string>(title);
    const [note, setNote] = useState(noteContent);

  return (
    <View style={{flex:1}}>
        <ScrollView>
                <View style={styles.contentBox}>
                    {/** Title section */}
                    <View style={{flexDirection: 'row', alignItems: 'flex-start',}}>
                        <View style={{flex:1}}>
                            <TextInput 
                            value={noteTitle}
                            multiline
                            onChangeText={setNoteTitle}
                            style={[{fontFamily:'DMSerifDisplay-Regular', flexWrap:'wrap'}, styles.titleStyle]}
                            placeholder='Add Title...'
                            />
                            <SerifText style={styles.dateStyle}>{date}</SerifText>
                        </View>
                        <View style={styles.titleButtonsContainer}>
                            {isPinned && (
                            <FontAwesomeIcon icon={faThumbTack} size={18}/>
                            )}
                            <TouchableOpacity 
                            style={styles.checkSaveButton}
                            onPress={() => {saveNote();}}
                            >
                                <FontAwesomeIcon icon={faCheck} size={18}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/**Notes area */}
                    <View style={styles.editor}>
                        <TextInput 
                        value={note}
                        multiline
                        onChangeText={setNote}
                        style={{fontFamily:'DMSerifDisplay-Regular', fontSize:18}}
                        placeholder='New Note...'
                        />
                    </View>
                </View>
            </ScrollView>
        <NotesAddMenu
         isPin={isPinned}
         onPinChange={setIsPinned}
        />
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'#F8E1CD',
        flex:1,
        padding:20,
    },
    contentBox:{
        padding:6
    },
    titleStyle:{
        fontSize:24
    },
    dateStyle:{
        fontSize:20,
        color:'#8A94A6'
    },
    editor:{
        paddingVertical:6
    },
    checkSaveButton:{
        height:40,
        width:40,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F6BFBF'
    },
    titleButtonsContainer:{
        flexDirection:'row', 
        gap:12, 
        alignItems:'center',
        flexShrink: 0
    }
})