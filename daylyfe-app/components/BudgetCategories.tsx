import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import SerifText from './SerifText'
import React from 'react'

const BudgetCategories = (props:any) => {
  return (
      <View style={styles.outerBox}> 

      <View style={{justifyContent:'flex-end',  flexDirection:'row', height:20, marginRight:16}}>
        <TouchableOpacity style={styles.editButton} onPress={() => {}}>
            <SerifText style={{color: 'white', textAlign:'center'}}>edit</SerifText>
        </TouchableOpacity>
      </View>

        <View style={styles.titleSpendingsBox}>
            <View style={styles.iconBox}>
                {/* <Image source={require('')}/> */}
                <Text>icon here</Text>
                <SerifText style ={{fontSize:20}}>
                    {props.categoryName}
                </SerifText>
            </View>

            <View>
                <SerifText style={styles.progressPercentage}>{props.progress}</SerifText>
                <SerifText style={styles.totalAmount}>{props.total}</SerifText>
            </View>
            
        </View>

        <View style={styles.itemsBoxView}>
            <View style={styles.itemsBox}>
                <SerifText style={styles.itemsText}>Sephora</SerifText>
                <SerifText style={styles.itemsText}>$78</SerifText>
            </View>
        </View>
       
      </View>
  )
}

const styles = StyleSheet.create({
    outerBox:{
        backgroundColor:'#DDBAD9',
        width:350,
        height:'auto',
        borderRadius:20,
        paddingVertical:12,
        borderColor:'#9B8098',
        borderWidth:1
    },
    editButton:{
        backgroundColor:'#9B8098',
        width:45,
        borderRadius:15,
        justifyContent:'center',
    },
    progressPercentage:{
        fontSize:28,
        color:'#9B8098',
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
        width:200
    },
    itemsBoxView:{
        width:'auto',
        alignItems:'center',
        paddingTop:16
    },
    itemsBox:{
        backgroundColor:'#FFFFFF',
        width:320,
        height:'auto',
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12
    },
    itemsText:{
        fontSize:16
    }
})

export default BudgetCategories;