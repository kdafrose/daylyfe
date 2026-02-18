import { StyleSheet, View } from 'react-native'
import React, {useEffect} from 'react'
import { useLocalSearchParams } from 'expo-router'
import Header from '@/components/LayoutComponents/Header'
import AddNotes from '@/components/NotesComponents/AddNotes'

const sampleNote = [
    {
        title:'Lasagna Soup Recipe',
        date:'April 12 2026',
        note:'Fall Season Meal 1!!!'
    }
]

const EditNotes = () => {

    // TODO:Grabbing from the database
    const {notesId, title} = useLocalSearchParams();
    useEffect(() => {

    },[notesId])

  return (
    <View style={styles.container}>
        <Header title='' backgroundColorProp='#F8E1CD' paddingProp={6}/>
        <AddNotes
        //TODO:Change once gotten info from database 
        title={sampleNote[0].title}
        date={sampleNote[0].date}
        noteContent={sampleNote[0].note}
        />
    </View>
  )
}

export default EditNotes

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'#F8E1CD',
        flex:1,
        padding:20,
    }
})