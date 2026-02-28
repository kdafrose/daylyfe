import { StyleSheet, View, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
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

const NotesList = () => {
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
    <View>
      <FlatList 
        data={sampleNotes}
        keyExtractor={(_,index) => index.toString()}
        scrollEnabled={false}
        renderItem={({item, index}) => {
        return (
            <TouchableOpacity 
            key={index} 
            style={styles.eachNoteRow}
            onPress={() => {
            goToNote(index, item.notesTitle)
            }}
            >
            <SerifText>{item.notesTitle}</SerifText>
            <SerifText>{item.date}</SerifText>
            <SerifText style={{fontSize:12}}>{item.preview}</SerifText>
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
  }
})