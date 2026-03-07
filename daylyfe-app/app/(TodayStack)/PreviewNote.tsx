import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import Header from '@/components/LayoutComponents/Header'
import SerifText from '@/components/SerifText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import GeneralAddMenu from '@/components/LayoutComponents/GeneralAddMenu'
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useRouter } from 'expo-router'
import { styles as eventStyles } from '../(CalendarStack)/AddCalendarEvent'
import { styles as noteStyles} from '../../components/NotesComponents/AddNotes'

const PreviewNote = () => {
    const router = useRouter();
    const {noteId, title} = useLocalSearchParams();
  return (
    <ScreenLayout>
        <Header title='' backgroundColorProp='' paddingProp={24} /> 
        <ScrollView>
            {/**Header Section */}
            <View style={styles.headerContainer}>
                <View>
                    <SerifText style={eventStyles.titleStyle}>Note Title</SerifText>
                    <SerifText style={noteStyles.dateStyle}>Date</SerifText>
                    <View style={{flexDirection:'row', gap:4, alignItems:'center'}}>
                        <FontAwesomeIcon icon={faFolder} color=''/>
                        <SerifText style={{fontSize:16}}>Folder Name</SerifText>
                    </View>
                </View>
                <TouchableOpacity
                onPress={() =>{
                    router.navigate({
                        pathname:'/(NotesStack)/EditNotes',
                        params:{
                            id:noteId,
                            noteTitle:title
                        }
                    })
                }}
                >
                    <View style={styles.editButton}>
                        <SerifText style={{fontSize:16}}>Edit</SerifText>
                    </View>
                </TouchableOpacity>
            </View>
            {/**Note Content */}
            <View style={styles.contentContainer}>
                <SerifText>
                    Content Here
                </SerifText>
            </View>
        </ScrollView>
        <GeneralAddMenu />
    </ScreenLayout>
  )
}

export default PreviewNote

const styles = StyleSheet.create({
    editButton:{
        backgroundColor:'#F6BFBF',
        width:50,
        height:24,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:24
    },
    contentContainer:{
        marginHorizontal:24,
        marginVertical:12
    }
})