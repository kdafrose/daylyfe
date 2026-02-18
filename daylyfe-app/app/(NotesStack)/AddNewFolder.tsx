import { StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import SerifText from '@/components/SerifText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles as folderStyle } from '../(CalendarStack)/AddCalendarEvent'
import { colorEventTags as folderColors } from '../(CalendarStack)/AddCalendarEvent'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import Header from '@/components/LayoutComponents/Header'

const AddNewFolder = () => {
    const [folderTitle, setFolderTitle] = useState('')
    const [chosenFolderColor, setChosenFolderColor] = useState('#F9D69E')

  return (
    <View style={styles.container}>
        <Header title='New Folder' backgroundColorProp='#F8E1CD' paddingProp={0}/>
        <View style={styles.folderContainer}>
            <FontAwesomeIcon icon={faFolder} size={160} color={chosenFolderColor}/>
            <View style={{height:'20%', alignItems:'center'}}>
                <TextInput 
                value={folderTitle}
                multiline
                onChangeText={setFolderTitle}
                placeholder='Add Title'
                style={{fontFamily:'DMSerifDisplay-Regular', fontSize:24}}
                />
                <View>
                    <FlatList 
                    data={folderColors}
                    horizontal
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                            style={{paddingRight:12, paddingVertical:6,}}
                            onPress={() => {
                                setChosenFolderColor(item)
                            }}
                            >
                                <View style={[folderStyle.colorButton , {backgroundColor:item}]}></View>
                            </TouchableOpacity>
                        )
                    }}
                    />

                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=> {}}
                    style={styles.saveButton}
                    >
                        <SerifText style={{ fontSize:18}}>Save</SerifText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default AddNewFolder

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:32,
        paddingVertical:16,
        backgroundColor:'#F8E1CD',
        flex:1
    },
    folderContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    saveButton:{
        width:70,
        height:30,
        borderRadius:15,
        backgroundColor:'#F6BFBF',
        justifyContent:'center',
        alignItems:'center'
    }
})