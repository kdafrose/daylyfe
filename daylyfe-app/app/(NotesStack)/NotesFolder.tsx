import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { styles as fStyles } from './NotesHome';
import { colorEventTags as notesColors } from '../(CalendarStack)/AddCalendarEvent';
import { useLocalSearchParams, useRouter } from 'expo-router';
import SerifText from '@/components/SerifText';
import Header from '@/components/LayoutComponents/Header';

const sampleNotes =[ 
    // the Preview will be capped at a certain length
  {
    notesTitle:'Lasagna Soup Recipe',
    preview:'Ingredients: 1 cup crushed tomatoes 1 tbs tomato concentrate 2 cups beef broth',
    date:'2026-01-29'
  },
  {
    notesTitle:'2026 Wishlist',
    preview:'F4 Mario Brush, Charlotte Tilbury',
    date:'2026-01-30'
  },
  {
    notesTitle:'Birthday Ideas',
    preview:'24 Bday ideas:',
    date:'2026-02-1'
  },
  {
    notesTitle:'Library Pass',
    preview:'8363738282',
    date:'2026-02-09'
  },
    {
    notesTitle:'Lasagna Soup Recipe',
    preview:'Ingredients: 1 cup crushed tomatoes 1 tbs tomato concentrate 2 cups beef broth',
    date:'2026-01-29'
  },
  {
    notesTitle:'2026 Wishlist',
    preview:'F4 Mario Brush, Charlotte Tilbury',
    date:'2026-01-30'
  },
  {
    notesTitle:'Birthday Ideas',
    preview:'24 Bday ideas:',
    date:'2026-02-1'
  },
  {
    notesTitle:'Library Pass',
    preview:'8363738282',
    date:'2026-02-09'
  }
]

interface Notes{
    title:string,
    date:string,
    preview:string
}

const NotesFolder = () => {
    const router = useRouter();
    const { folderId, folderName } = useLocalSearchParams();

    useEffect(() => {
        // grab all notes in the db in this folder
        setNoteCollection([])
    }, [folderId])

    const [noteCollection, setNoteCollection] = useState<Notes[]>([])

  return (
    <View style={styles.container}>
        <Header title={folderName.toString()} backgroundColorProp='#F8E1CD' paddingProp={12}/>
        <ScrollView style={{paddingVertical:16}}>
            {/**Notes */}
            <View>
                {noteCollection.length === 0 ? (       
                    <View style={styles.emptyScreen}>  
                        <SerifText style={{fontSize:24, opacity:0.4}}>No Notes</SerifText>
                    </View>
                ) : (
                    <View>
                        <TouchableOpacity style={styles.selectButton}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <SerifText>Select</SerifText>
                        </TouchableOpacity>
    
                        <View style={{flexWrap:'wrap', flexDirection:'row', gap:2}}>
                            {sampleNotes.map((item, index) => (
                                <TouchableOpacity 
                                style={{gap:8, marginRight:6, paddingVertical:4}} key={index}
                                onPress={() => {
                                    router.push({
                                        pathname:'/(NotesStack)/EditNotes',
                                        params: {
                                            notesId:index, // change this
                                            title:item.notesTitle
                                        }
                                    })
                                }}
                                >
                                    <View style={[fStyles.pinnedStickies, {backgroundColor:notesColors[index % 7], padding:5,}]}>
                                        <SerifText style={{fontSize:10, width:80}}>{item.preview}</SerifText>
                                    </View>
                                    <SerifText style={{fontSize:12, width:80, textAlign:'center'}}>{item.notesTitle}</SerifText>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    </View>
  )
}

export default NotesFolder

const styles = StyleSheet.create({
    container:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'#F8E1CD',
    flex:1,
    padding:16,
    },
    selectButton:{
        flexDirection:'row',
        alignItems:'center',
        gap:6,
        marginVertical:4
    },
    emptyScreen:{
        flex:1,
        alignItems:'center'
    }
})