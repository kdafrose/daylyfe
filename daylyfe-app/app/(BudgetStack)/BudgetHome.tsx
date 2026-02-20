import { StyleSheet, View, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import SerifText from '@/components/SerifText'
import React, {useState, useEffect} from 'react'
import Header from '@/components/LayoutComponents/Header'
import DailyBudgetTracker from '@/components/BudgetComponents/DailyBudgetTracker'
import BudgetCategories from '@/components/BudgetComponents/BudgetCategories'
import AddItem from './AddItem'
import AddCategory from './AddCategory'


  const name = 'Shopping';
  const items:Items[] = [
    {
      productName:"Sephora",
      price:78
    },
    {
      productName:"Aritzia",
      price:81.23
    }
  ]

interface Items{
  productName:string,
  price:number
}
interface Categories{
  category:string,
  items:Items[],
  totalPrice:number
}

function formatCategories(){
  // grab by id and user_id
  // set Name
  // loop through the items prie and set totalPrice
  //items[]

  //create a Categories object
  // return formatted categories in an []
}

function formatNumber(num:number){ return Number(num.toFixed(2))}

const BudgetHome = () => {
  
  const [allCategories, setAllCategories] = useState<Categories[]>([]);
  const budget = 250
  const [total, setTotal] = useState(0)
  const [remaining, setRemaining] = useState(budget);

  //open modals
  const [openAddItem, setOpenAddItem] = useState(false);
  const [openAddCategory, setOpenAddCategory] = useState(false)
  
  function toPercentage(totalSpending:number){
    let total = (totalSpending / budget) * 100;
    return Number(total.toFixed(2));
  }

  //TODO:grab all categories in the db
  useEffect(() => {
    let totalCat = 0 
    for (const item of items){
      totalCat += item.price
    }
    let formattedCategories:Categories[] = [{
      category:name,
      items:items, 
      totalPrice:Number(totalCat.toFixed(2))
    }]
    setAllCategories(formattedCategories)
    setTotal(totalCat)
    setRemaining(prev => prev - totalCat)
  },[])

  return (
    <View style={styles.container}>
      <Header title='Budget' backgroundColorProp='#F8E1CD' paddingProp={24}/>
      <ScrollView >
        {/**Date */}
        <View style={styles.dateRow}>
          <TouchableOpacity>
            <FontAwesomeIcon 
            icon={faAngleLeft}
            size={25}
            />
          </TouchableOpacity>
          <SerifText style={{fontSize:24}}>April 12, 2026</SerifText>
          <TouchableOpacity>
            <FontAwesomeIcon 
            icon={faAngleRight}
            size={25}
            />
          </TouchableOpacity>
        </View>

        {/**Daily Budget Tracker */}
        <DailyBudgetTracker 
        budget={formatNumber(budget)}
        total={formatNumber(total)}
        remaining={formatNumber(remaining)}
        progress={toPercentage(budget - remaining)}
        />
        {/**Add Item and Custom Category Buttons */}
        <View style={{marginHorizontal:24, gap:12}}>
          <View style={styles.addButtonsContainer}>
            <TouchableOpacity 
            style={styles.addButtons}
            onPress={() => setOpenAddItem(true)}
            >
              <FontAwesomeIcon icon={faPlus} color='#FF6868'/>
              <SerifText style={{fontSize:16}}>Add Item</SerifText>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.addButtons, {backgroundColor:'#D9D9D9', width:140, borderRadius:20, justifyContent:'center', padding:4}]}
            onPress={() => setOpenAddCategory(true)}
            >
              <FontAwesomeIcon icon={faPlus}/>
              <SerifText style={{fontSize:16}}>custom category</SerifText>
            </TouchableOpacity>
          </View>
          {/**Add Item Modal */}
          <Modal
          visible={openAddItem}
          onRequestClose={() => setOpenAddItem(false)}
          >
            <AddItem setCloseAddItem={setOpenAddItem} />
          </Modal>
          {/**Custom Category Modal */}
          <Modal
          visible={openAddCategory}
          onRequestClose={() => setOpenAddCategory(false)}
          >
            <AddCategory setCloseAddCategory={setOpenAddCategory}/>
          </Modal>

          {allCategories.map((item, index) => (
            <View key={index}>
              <BudgetCategories 
                categoryName={item.category}
                mainBgColor='#DDBAD9'
                accentBgColor='#9B8098'
                icon='🛒'
                total={item.totalPrice}
                progress={toPercentage(item.totalPrice)}
                items={item.items}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default BudgetHome

const styles = StyleSheet.create({
  container:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'#F8E1CD',
    flex:1,
  },
  dateRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:8
  },
  addButtons:{
    flexDirection:'row', 
    alignItems:'center', 
    gap:4,
  },
  addButtonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})