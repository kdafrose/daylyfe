import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native'
import React, {useState} from 'react'
import SerifText from '@/components/SerifText'
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout'
import { styles as cStyles } from './AddItem'
import { styles as eventStyles } from '../(CalendarStack)/AddCalendarEvent'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { EmojiPopup } from 'react-native-emoji-popup';

interface AddCategoryProps{
    setCloseAddCategory: (goBack:boolean) => void
}

const categoryColorTags = ["#DDBAD9", "#F6BFBF", "#F9D69E", "#D0E4A1", "#BBE6F1"]


const AddCategory = ({setCloseAddCategory}:AddCategoryProps) => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('☕️');
  const [newCategoryColor, setNewCategoryColor] = useState("#DDBAD9");
  
  const handleSetIcon = (newIcon:string) => {
    if (newIcon.length <= 2) { // emojis sometimes count as 2 chars
      setCategoryIcon(newIcon);
    }
  };
    //modals
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

  return (
    <View style={cStyles.container}>
        {/**Header */}
      <View style={[cStyles.headerContainer,{gap:40}]}>
        <TouchableOpacity
        onPress={() => setCloseAddCategory(false)}
        >
            <FontAwesomeIcon icon={faArrowLeft} size={25}/>
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
                <View>
                  <View style={eventStyles.sectionRow}>
                    <SerifText style={eventStyles.textStyle}>Category: </SerifText>
                    <TextInput 
                    value={newCategoryName}
                    onChangeText={setNewCategoryName}
                    placeholder='Category Name'
                    style={[{fontFamily:'DMSerifDisplay-Regular'}, eventStyles.textStyle]}
                    />
                  </View>
                  <View style={eventStyles.horizontalLine}></View>
                </View>
                {/**Icon */}
                <View>
                  <View style={eventStyles.sectionRow}>
                    <SerifText style={eventStyles.textStyle}>Icon:</SerifText>
                    {/* <View style={{alignItems:'center', gap:6}}>
                      <TextInput 
                      value={categoryIcon}
                      />
                      <EmojiPopup onEmojiSelected={setCategoryIcon}>
                        <SerifText>Choose Emoji</SerifText>
                      </EmojiPopup>
                    </View> */}
                  
                  <TextInput 
                  style={{fontSize:48, width:'30%',textAlign:'right'}}
                  value={categoryIcon} 
                  onChangeText={(icon) => handleSetIcon(icon)}
                  />
                  </View>
                  <View style={eventStyles.horizontalLine}></View>
                </View>
                {/**Color */}
                <View>
                  <View style={eventStyles.sectionRow}>
                    <SerifText style={eventStyles.textStyle}>Color: </SerifText>
                    <View style={[eventStyles.colorButton, {backgroundColor:newCategoryColor}]}></View>
                  </View>
                  <View style={{flexDirection:'row', gap:12, marginVertical:6}}>
                    {categoryColorTags.map((item, index) => (
                      <TouchableOpacity
                      key={index}
                      onPress={() => setNewCategoryColor(item)}
                      >
                        <View style={[eventStyles.colorButton, {backgroundColor:item}]}></View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
            </View>
        </View>

    </View>
  )
}

export default AddCategory

const styles = StyleSheet.create({})