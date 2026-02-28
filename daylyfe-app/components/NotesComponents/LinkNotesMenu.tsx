import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import SerifText from '../SerifText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { styles as cStyle } from '@/app/(CalendarStack)/AddCalendarEvent'
import { styles as iStyles } from '@/app/(BudgetStack)/AddItem'
import React, {FC, useEffect} from 'react'

/**
 * 
 * @returns a link to an EditNotes.tsx of a certain id
 */

interface LinkNotesMenuProps{
    setCloseLinkNotes: (goBack:boolean) => void;
}
// TODO: Grab all Notes from the database
// useEffect(()=> {

// })

const sampleNotes = [
    {
        title:'Lasagna Soup Recipe',
        date:'2026 Feb 28',
        smallPreview:'This is recipe takes about 10 mins'
    },
    {
        title:'Lasagna Soup Recipe',
        date:'2026 Feb 28',
        smallPreview:'This is recipe takes about 10 mins'
    },
    {
        title:'Lasagna Soup Recipe',
        date:'2026 Feb 28',
        smallPreview:'This is recipe takes about 10 mins'
    },
    {
        title:'Lasagna Soup Recipe',
        date:'2026 Feb 28',
        smallPreview:'This is recipe takes about 10 mins'
    }
]

const LinkNotesMenu:FC<LinkNotesMenuProps> = ({setCloseLinkNotes}) => {
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
        {/**Notes Menu */}
        <View>
            <FlatList 
            data={sampleNotes}
            scrollEnabled={false}
            keyExtractor={(_,index) => index.toString()}
            renderItem={() => {
                return (
                    <TouchableOpacity >
                        
                    </TouchableOpacity>
                )
            }}
            />   

        </View>
    </View>
  )
}

export default LinkNotesMenu

const styles = StyleSheet.create({})