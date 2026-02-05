import { View, Text, StyleSheet, TouchableOpacity,FlatList } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'
import SerifText from './SerifText'
import React, { FC, useState } from 'react'

interface Products{
    productName:string,
    price:number
}

interface BudgetCategoriesProps {
    categoryName:string,
    mainBgColor:string,
    accentBgColor:string,
    icon:string
    total:number,
    progress:number,
    items: Products[]
}

/**
 * BudgetCategories component - Displays a budget category with spending progress and itemized expenses.
 * 
 * @component
 * @param {BudgetCategoriesProps} props - The component props
 * @param {string} props.categoryName - The name of the budget category
 * @param {string} props.mainBgColor - The main background color for the category
 * @param {string} props.accentBgColor - The accent background color for highlights
 * @param {number} props.total - The total budget amount for this category
 * @param {number} props.progress - The spending progress percentage
 * @param {Array} props.items - Array of expense items in this category
 * 
 * @returns {JSX.Element} A view component displaying the budget category with spending breakdown and edit button
 * 
 * @example
 * <BudgetCategories
 *   categoryName="Shopping"
 *   mainBgColor="#FF6B6B"
 *   accentBgColor="#FFE66D"
 *   total={500}
 *   progress={65}
 *   items={[...]}
 * />
 */
const BudgetCategories:FC<BudgetCategoriesProps> = ({categoryName, mainBgColor, accentBgColor, icon, total, progress, items}) => {

  return (
      <View style={[styles.outerBox, {backgroundColor:mainBgColor,borderColor:accentBgColor}]}> 
      <View style={{justifyContent:'flex-end',  flexDirection:'row', height:20, marginRight:16}}>
        <TouchableOpacity style={[styles.editButton, {backgroundColor:accentBgColor}]} onPress={() => {}}>
            <SerifText style={{color: 'white', textAlign:'center'}}>edit</SerifText>
        </TouchableOpacity>
      </View>
        <View style={styles.titleSpendingsBox}>
            <View style={styles.iconBox}>
                <CircularProgress
                radius={45}
                activeStrokeWidth={6}
                inActiveStrokeWidth={6}
                value={progress}
                inActiveStrokeColor='#FFFFFF'
                inActiveStrokeOpacity={0.2}
                showProgressValue={false}
                activeStrokeColor={accentBgColor}
                title={icon}
                titleFontSize={43}
                />
                <SerifText style ={{fontSize:24, marginLeft:12}}>{categoryName}</SerifText>
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <SerifText style={[styles.progressPercentage, {color:accentBgColor}]}>{progress}%</SerifText>
                <SerifText style={styles.totalAmount}>${total}</SerifText>
            </View>
        </View>

        <View style={styles.itemsBoxView}>
            <View style={styles.itemsBox}>
                <FlatList
                data={items}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <View style={[styles.itemsList, {borderBottomColor:mainBgColor}]}>
                            <SerifText style={styles.itemsText}>{item.productName}</SerifText>
                            <SerifText style={styles.itemsText}>${item.price}</SerifText>
                        </View>
                    )
                }}
                />
            </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    outerBox:{
        width:360,
        height:'auto',
        borderRadius:20,
        paddingVertical:12,
        borderWidth:1
    },
    editButton:{
        width:45,
        borderRadius:15,
        justifyContent:'center',
    },
    progressPercentage:{
        fontSize:28,
    },
    totalAmount:{
        fontSize:24
    },
    titleSpendingsBox:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginRight:16,
    },
    iconBox:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:200,
        marginLeft:12
    },
    
    itemsBoxView:{
        width:'auto',
        alignItems:'center',
        paddingTop:12
    },
    itemsBox:{
        backgroundColor:'#FFFFFF',
        width:340,
        height:'auto',
        borderRadius:15,
    },
    itemsList:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12,
        borderBottomWidth:0.3,
        marginHorizontal:12
    },
    itemsText:{
        fontSize:16
    }
})

export default BudgetCategories;