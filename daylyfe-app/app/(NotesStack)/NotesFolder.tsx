import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
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

const NotesFolder = () => {
    const router = useRouter();
    const { folderId, folderName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
        <Header title={folderName.toString()} backgroundColorProp='#F8E1CD' paddingProp={12}/>
        <ScrollView style={{paddingVertical:16}}>
            {/**Notes */}
            <View style={{flexWrap:'wrap', flexDirection:'row', gap:2}}>
                {sampleNotes.map((item, index) => (
                    <TouchableOpacity 
                    style={{gap:8, marginRight:6, paddingVertical:4}} key={index}
                    onPress={() => {
                        router.push({
                            pathname:'/(NotesStack)/Notes',
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
})