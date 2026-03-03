import { StyleSheet, View, TouchableOpacity, FlatList} from 'react-native'
import React, {useEffect, FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import SerifText from '../SerifText'
import { useRouter } from 'expo-router'

/**
 * This is to show all of the notes that is within the database 
 * @returns A Flatlist of buttons that redirects to EditNotes.tsx of a certain note
 */

const sampleNotes = [
  {
    notesTitle:'Lasagna Soup Recipe',
    preview:'Ingredients: 1 cup crushed tomatoes 1 tbs tomato concentrate 2 cups beef broth',
    date:'2026-01-29',
    folder:'Recipes'
  },
  {
    notesTitle:'2026 Wishlist',
    preview:'F4 Mario Brush, Charlotte Tilbury',
    date:'2026-01-30',
    folder:'Notes'
  },
  {
    notesTitle:'Birthday Ideas',
    preview:'24 Bday ideas:',
    date:'2026-02-1',
    folder:'Notes'
  },
  {
    notesTitle:'Library Pass',
    preview:'8363738282',
    date:'2026-02-09',
    folder:'Passwords'
  }
]

interface NotesListProps{
    onPress?: (id:number, notesTitle:string) => void;
}

const NotesList:FC<NotesListProps> = ({onPress}) => {
    const router = useRouter();

    const goToNote = (id:number, noteTitle:string) => {
    router.push({
      pathname:'/(NotesStack)/EditNotes',
      params: {
          notesId:id, // change this
          title:noteTitle
      }
    })
  }

  return (
    <View style={styles.notesBox}>
      <FlatList 
        data={sampleNotes}
        keyExtractor={(_,index) => index.toString()}
        scrollEnabled={false}
        renderItem={({item, index}) => {
        return (
            <TouchableOpacity 
            key={index} 
            style={styles.eachNoteRow}
            onPress={() => onPress? 
                onPress(index, item.notesTitle) : goToNote(index, item.notesTitle)
            }
            >
                <SerifText>{item.notesTitle}</SerifText>
                <SerifText>{item.date}</SerifText>
                <SerifText style={{fontSize:12}}>{item.preview}</SerifText>
                <View style={{flexDirection:'row', gap:6, alignItems:'center'}}>
                    <FontAwesomeIcon 
                    icon={faFolder}
                    color='rgba(251, 185, 152, 0.6)'
                    />
                    <SerifText>{item.folder}</SerifText>
                </View>
            </TouchableOpacity>
        )
        }}
        />
    </View>
  )
}

export default NotesList

const styles = StyleSheet.create({
    eachNoteRow:{
    paddingTop:10,
    paddingBottom:10,
    borderBottomColor:'#595959',
    borderBottomWidth:0.5
  },
    notesBox:{
    backgroundColor:'rgba(251, 212, 192, 0.6)',
    paddingHorizontal:16,
    borderColor:'#595959',
    borderWidth:0.5,
    borderRadius:20
  },
})