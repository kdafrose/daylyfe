import { StyleSheet, View, TouchableOpacity} from 'react-native'
import React from 'react'
import SerifText from '../SerifText'
import { useRouter } from 'expo-router'


const samplePinnedNotes = [
  {
    notesTitle:'Lasagna Soup Recipe',
    preview:'Ingredients: 1 cup crushed tomatoes 1 tbs tomato concentrate 2 cups beef broth'
  },
  {
    notesTitle:'2026 Wishlist',
    preview:'F4 Mario Brush, Charlotte Tilbury'
  },
  {
    notesTitle:'Birthday Ideas',
    preview:'24 Bday ideas:'
  },
  {
    notesTitle:'Library Pass',
    preview:'8363738282'
  }
]

const pinnedNotesColors = ["#DDBAD9", "#F6BFBF", "#F9D69E", "#D0E4A1", "#BBE6F1", "#FF6868", "#FBD4C0"]

const PinnedNotes = () => {

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
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        {samplePinnedNotes.map((item, index) => (
        <TouchableOpacity 
        style={{gap:5, marginRight:6}}
        key={index}
        onPress={() => {
            goToNote(index, item.notesTitle)
        }}
        >
            <View style={[styles.pinnedStickies, {backgroundColor:pinnedNotesColors[index % 7], padding:5}]}>
            <SerifText style={{fontSize:10, width:80}}>{item.preview}</SerifText>
            </View>
            <SerifText style={{fontSize:12, width:80, textAlign:'center'}}>{item.notesTitle}</SerifText>
        </TouchableOpacity>
        ))}
    </View>
    </View>
  )
}

export default PinnedNotes

const styles = StyleSheet.create({
    pinnedStickies:{
    width:85,
    height:90,
    borderRadius:5
  },
})