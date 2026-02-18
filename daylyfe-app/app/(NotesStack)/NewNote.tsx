import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '@/components/LayoutComponents/Header'
import AddNotes from '@/components/NotesComponents/AddNotes'

const NewNote = () => {

    const dateOnlyString = new Date().toDateString();

  return (
    <View style={styles.container}>
        <Header title='New Note' backgroundColorProp='#F8E1CD' paddingProp={6}/>
        <AddNotes 
        title=''
        date={dateOnlyString}
        noteContent=''
        />
    </View>
  )
}

export default NewNote

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'#F8E1CD',
        flex:1,
        padding:20,
    }
})