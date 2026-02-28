import { StyleSheet, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import NotesList from '@/components/NotesComponents/NotesList';
import DrawerHeader from '@/components/LayoutComponents/DrawerHeader';
import React from 'react'
import SerifText from '@/components/SerifText'
import { useRouter } from 'expo-router';

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


const sampleFolders = ["Work Meeting Notes", "Workouts Routines 2026"]

const pinnedNotesColors = ["#DDBAD9", "#F6BFBF", "#F9D69E", "#D0E4A1", "#BBE6F1", "#FF6868", "#FBD4C0"]

const NotesHome = () => {
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
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DrawerHeader title='Notes' backgroundColorProp='' paddingProp={24} paddingLeftProp={50}/>
        <View style={styles.contentContainer}>
          {/**Pinned Notes */}
          <View style={styles.sectionBox}>
            <SerifText style={styles.titleStyle}>Pinned Notes</SerifText>
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
          {/**Folders */}
          <View style={styles.sectionBox}>
            <SerifText style={styles.titleStyle}>Folders</SerifText>
              <View style={{flexWrap:'wrap', flexDirection:'row'}}>
                {sampleFolders.map((item, index) => (
                  <TouchableOpacity 
                  key={index} 
                  style={{gap:1, marginRight:12}}
                  onPress={() => {router.push({
                    pathname:'/(NotesStack)/NotesFolder',
                    params: {
                      folderId:index,
                      folderName:item
                    }
                  })}}
                  >
                    <FontAwesomeIcon icon={faFolder} size={85} color='#F9D69E'/>
                    <SerifText style={{fontSize:12, width:80}}>{item}</SerifText>
                  </TouchableOpacity>
                ))}
              </View>
          </View>
          {/**Year */}
          <View style={styles.sectionBox}>
            <SerifText style={styles.titleStyle}>2026📚</SerifText>
            <View style={styles.notesBox}>
              <NotesList />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default NotesHome

export const styles = StyleSheet.create({
    container:{
      backgroundColor:'#F8E1CD',
      flex:1,
      ...StyleSheet.absoluteFillObject,
  },
  contentContainer:{
    padding:16
  },
  titleStyle:{
    fontSize:24,
  },
  pinnedStickies:{
    width:85,
    height:90,
    borderRadius:5
  },
  sectionBox:{
    gap:16,
    marginBottom:12
  },
  notesBox:{
    backgroundColor:'rgba(251, 212, 192, 0.6)',
    paddingHorizontal:16,
    borderColor:'#595959',
    borderWidth:0.5,
    borderRadius:20
  },
  eachNoteRow:{
    paddingTop:10,
    paddingBottom:10,
    borderBottomColor:'#595959',
    borderBottomWidth:0.5
  }
})