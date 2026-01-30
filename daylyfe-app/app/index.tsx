import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import BudgetCategories from "@/components/BudgetCategories";
import { router } from "expo-router";
import ScreenLayout from "@/components/ScreenLayout";

export default function Index() {

  const name = 'Shopping';
  const items = [
    {
      productName:"Sephora",
      price:78
    },
    {
      productName:"Aritzia",
      price:81.23
    }
  ]

  return (
    <ScreenLayout>
      <View>
        <Text style={styles.container} >Getting started with React Native!!</Text>
        <Text style={styles.nameContainer}>My name is {name}</Text>

        <BudgetCategories 
          categoryName={name}
          mainBgColor='#DDBAD9'
          accentBgColor='#9B8098'
          icon='🛒'
          total={159.23}
          progress={63.7}
          items={items}
        />
      
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container:{
        fontSize:45
      },
      nameContainer:{
        fontSize:20
      }
})

