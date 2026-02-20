import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import SerifText from '@/components/SerifText'
import { styles as cStyles } from './AddItem'
import { styles as eventStyles } from '../(CalendarStack)/AddCalendarEvent'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { EmojiPopup } from 'react-native-emoji-popup';

interface AddCategoryProps{
    setCloseAddCategory: (goBack:boolean) => void
}

const AddCategory = ({setCloseAddCategory}:AddCategoryProps) => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [categoryIcon, setCategoryIcon] = useState('');
    const [newCategoryColor, setNewCategoryColor] = useState('☕️');

  return (
    <View style={cStyles.container}>
        {/**Header */}
      <View style={[cStyles.headerContainer,{gap:40}]}>
        <TouchableOpacity
        onPress={() => setCloseAddCategory(false)}
        >
            <FontAwesomeIcon icon="arrow-left" size={25}/>
        </TouchableOpacity>
        <SerifText style={{fontSize:24}}>Add Custom Category</SerifText>
      </View>
        {/**Add Button */}
        <TouchableOpacity style={cStyles.addButtonContainer}>
            <View style={cStyles.addButton}>
                <SerifText>add</SerifText>
            </View>
        </TouchableOpacity>


        <View style={eventStyles.container}>
            <View style={eventStyles.column}>
                {/**Category Name */}


            </View>
        </View>

    </View>
  )
}

export default AddCategory

const styles = StyleSheet.create({})