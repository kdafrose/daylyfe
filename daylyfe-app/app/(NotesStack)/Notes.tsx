import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThumbTack, faCheck,} from '@fortawesome/free-solid-svg-icons'
import SerifText from '@/components/SerifText'
import React, {useState, useEffect} from 'react'
import { useLocalSearchParams } from 'expo-router'
import Header from '@/components/LayoutComponents/Header'

const sampleNote = [
    {
        title:'Lasagna Soup Recipe',
        date:'April 12 2026',
        note:'Fall Season Meal 1!!!'
    }
]

const Notes = () => {

    // TODO:Grabbing from the database
    const {notesId, title} = useLocalSearchParams();
    useEffect(() => {

    },[notesId])

    // TODO: Set the data of the note
    const [isPinned, setIsPinned] = useState(false); 
    const [noteTitle, setNoteTitle] = useState<string>('');
    const [note, setNote] = useState(sampleNote[0].note);
    
    // TODO:Save the notes
    const saveNote = () => {
        // save to backend!
    }

    // TODO:Delete the note
    const deleteNote = () => {

    }

    

  return (
    <ScrollView style={styles.container}>
        <Header title='' backgroundColorProp='#F8E1CD' paddingProp={6}/>
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
                    <SerifText style={styles.dateStyle}>April 12, 2026</SerifText>
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
  )
}

export default Notes

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