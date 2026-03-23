import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import SerifText from '../SerifText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import NotesList from './NotesList'
import { styles as iStyles } from '@/app/(BudgetStack)/AddItem'
import React, {FC, useEffect} from 'react'
import { notesLinkProps } from '../DailyComponents/Event'


/**
 * 
 * @returns a link to an EditNotes.tsx of a certain id
 */

interface LinkNotesMenuProps{
    setCloseLinkNotes: (goBack:boolean) => void,
    setAddNewNotesLink: (newLink:notesLinkProps) => void
}
// TODO: Grab all Notes from the database
// useEffect(()=> {

// })


const LinkNotesMenu:FC<LinkNotesMenuProps> = ({setCloseLinkNotes, setAddNewNotesLink}) => {
  return (
    <View style={iStyles.container}>
        {/**Header */}
        <View style={iStyles.headerContainer}>
            <TouchableOpacity
            onPress={() => setCloseLinkNotes(false)}
            >
                <FontAwesomeIcon icon={faArrowLeft} size={25}/>
            </TouchableOpacity>
            <SerifText style={{fontSize:24}}>Add Note</SerifText>
        </View>
            <View style={{padding:24}}>
                {/**Notes Menu */}
                <NotesList 
                onPress={(id, notesTitle) => {
                    setCloseLinkNotes(false);
                    const link:notesLinkProps = {
                        id:id,
                        noteTitle:notesTitle
                    }
                    setAddNewNotesLink(link)
                }}
                />
            </View>
    </View>
  )
}

export default LinkNotesMenu

const styles = StyleSheet.create({

})