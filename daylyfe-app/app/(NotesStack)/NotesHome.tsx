import { StyleSheet, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import NotesList from '@/components/NotesComponents/NotesList';
import PinnedNotes from '@/components/NotesComponents/PinnedNotes';
import DrawerHeader from '@/components/LayoutComponents/DrawerHeader';
import React from 'react'
import SerifText from '@/components/SerifText'
import { useRouter } from 'expo-router';



const sampleFolders = ["Work Meeting Notes", "Workouts Routines 2026"]

const NotesHome = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DrawerHeader title='Notes' backgroundColorProp='' paddingProp={24} paddingLeftProp={50}/>
        <View style={styles.contentContainer}>
          {/**Pinned Notes */}
          <View style={styles.sectionBox}>
            <SerifText style={styles.titleStyle}>Pinned Notes</SerifText>
            <PinnedNotes />
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
              <NotesList />
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
  sectionBox:{
    gap:16,
    marginBottom:12
  },
  eachNoteRow:{
    paddingTop:10,
    paddingBottom:10,
    borderBottomColor:'#595959',
    borderBottomWidth:0.5
  },
    pinnedStickies:{
    width:85,
    height:90,
    borderRadius:5
  },
})