import { StyleSheet, View, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {use, useState} from 'react'
import { styles as itemStyle} from '../(CalendarStack)/AddCalendarEvent'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SerifText from '@/components/SerifText'

interface AddItemProps{
  setCloseAddItem: (goBack:boolean) => void;
}

interface Category{
  category:string,
  color:string
}

const sampleCategories:Category[] = [
  {
    category: "Shopping",
    color: "#DDBAD9" // soft purple – lifestyle / discretionary
  },
  {
    category: "Food & Groceries",
    color: "#F6BFBF" // soft coral – everyday essentials
  },
  {
    category: "Transportation",
    color: "#F9D69E" // warm yellow – movement / commuting
  },
  {
    category: "Bills & Utilities",
    color: "#D0E4A1" // calm green – stable recurring costs
  },
  {
    category: "Health & Wellness",
    color: "#BBE6F1" // light blue – calm / self-care
  },
  {
    category: "Groceries",
    color: "#FF6868" // bold red – fun / energy
  }
]

function addItem(item:string, price:number, category:Category){
  // TODO:Add item to backend
}

const AddItem = ({setCloseAddItem}:AddItemProps) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [chosenCategory, setChosenCategory] = useState<Category>(sampleCategories[0])

  const priceStringToNum = () => {
    // TODO: Changing the string to a number (decimal)
  }

  return (
    <View style={styles.container}>
      {/**Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity 
        onPress={() => {setCloseAddItem(false)}}
        >
          <FontAwesomeIcon 
          icon={faArrowLeft}
          size={25}
          />
        </TouchableOpacity>
        <SerifText style={{fontSize:24}}>Add Item</SerifText>
      </View>
      {/**Add Button */}
      <TouchableOpacity 
      style={styles.addButtonContainer}
      
      >
        <View style={styles.addButton}>
          <SerifText>add</SerifText>
        </View>
      </TouchableOpacity>

      <View style={itemStyle.container}>
        <View style={itemStyle.column}>
          {/**Product Name */}
          <View>
            <TextInput 
            onChangeText={setItemName}
            value={itemName}
            placeholder='Add Product'
            style={itemStyle.textStyle}
            />
            <View style={itemStyle.horizontalLine}></View>
          </View>

          {/**Price */}
          <View>
            <View style={itemStyle.sectionRow}>
              <SerifText style={itemStyle.textStyle}>Price</SerifText>
              <View style={{flexDirection:'row', gap:2}}>
              <SerifText style={itemStyle.textStyle}>$</SerifText>
              <TextInput 
              value={itemPrice}
              onChangeText={setItemPrice}
              keyboardType='decimal-pad'
              placeholder='20.00'
              style={itemStyle.textStyle}
              />
              </View>
            </View>
            <View style={itemStyle.horizontalLine}></View>
          </View>

          {/**Category */}
          <View>
            <View style={itemStyle.sectionRow}>
              <SerifText style={itemStyle.textStyle}>Category</SerifText>
              <SerifText style={[itemStyle.repeatButtonOptions, {backgroundColor:chosenCategory.color}]}>{chosenCategory.category}</SerifText>
            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap', marginVertical:8}}>
              {sampleCategories.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style ={[itemStyle.repeatButtonOptions, {backgroundColor:item.color, margin:6}]}
                    onPress={() => {
                      setChosenCategory({
                        category:item.category,
                        color:item.color
                      })
                    }}
                    >
                      <SerifText>{item.category}</SerifText>
                    </TouchableOpacity>
              ))}
            </View>
          </View>

        </View>
      </View>
    </View>
  )
}

export default AddItem

export const styles = StyleSheet.create({
    container:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor:'#F8E1CD'
    },
    headerContainer:{
      marginTop:50,
      paddingHorizontal:24,
      paddingVertical:18,
      flexDirection:'row',
      alignItems:'center',
      gap:100
    },
    addButtonContainer:{
      alignItems:'flex-end',
      paddingHorizontal:24,
      justifyContent:'center',
    },
    addButton:{
      width:60,
      backgroundColor:'rgba(246, 191, 191, 0.7)',
      borderRadius:20,
      paddingVertical:4,
      alignItems:'center'
    },
    category:{
      borderRadius:20,
      paddingHorizontal:12,
      paddingVertical:4
    },
    listContents: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})