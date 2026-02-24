import { StyleSheet, View, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, {useState} from 'react'
import { styles as eventStyles } from './(CalendarStack)/AddCalendarEvent'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import DrawerHeader from '@/components/LayoutComponents/DrawerHeader'
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout'
import WaterCup from '@/components/WaterTrackerComponents/WaterCup'
import WaterFace from '@/components/WaterTrackerComponents/WaterFace'
import SerifText from '@/components/SerifText'
import { FlatList } from 'react-native-gesture-handler'

const waterOptions = [
  {key:'100ml', amount:0.1},
  {key:'150ml', amount:0.15},
  {key:'200ml', amount:0.2},
  {key:'250ml', amount:0.25},
  {key:'500ml', amount:0.5},
  {key:'1L', amount:1},
  {key:'24oz', amount:0.71},
  {key:'32oz', amount:0.96},
  {key:'40oz', amount:1.183},
]

const WaterTracker = () => {
  const [addWaterAmount, setAddWaterAmount] = useState('100ml'); 
  const [progress, setProgress] = useState(0);
  const [chosenWater, setChosenWater] = useState(0);
  const [openWaterAmountMenu, setOpenWaterAmountMenu] = useState(false)

  const addWater = (amount:number) => {
    //TODO: Add this to the backend
    // water amount and progress
  }

  return (
    <ScreenLayout>
      <DrawerHeader title="Water Tracker" backgroundColorProp='' paddingProp={12} paddingLeftProp={0} />
      <View style={styles.cupContainer}>
        <WaterCup progress={12}/>
        <View style={styles.overlay}>
          <WaterFace progress={12} />
          <SerifText style={styles.textBig}>12%</SerifText>
        </View>
      </View>

      <View style={styles.trackerBoard}>
        <View>
          <SerifText style={styles.textBig}>Now</SerifText>
          <SerifText style={styles.textBig}>0.84L</SerifText>
        </View>
        <View>
          <SerifText style={styles.textBig}>Goal</SerifText>
          <SerifText style={styles.textBig}>3.0L</SerifText>
        </View>
      </View>

      <View style={styles.amountWaterBox}>

        <TouchableOpacity 
        style={styles.amountButton}
        onPress={() => setOpenWaterAmountMenu(true)}
        >
          <SerifText style={{fontSize:20}}>{addWaterAmount}</SerifText>
          <FontAwesomeIcon 
          icon={faChevronDown}
          size={18}
          />
        </TouchableOpacity>

        <Modal
        transparent
        visible={openWaterAmountMenu}
        onRequestClose={() => setOpenWaterAmountMenu(false)}
        >
          <Pressable 
          style={eventStyles.opacityBox}
          onPress={() => setOpenWaterAmountMenu(false)}
          />

          <View style={eventStyles.modalCenter}>
            <View style={eventStyles.alertBox}>
              <SerifText style={eventStyles.textStyle}>Water Drank</SerifText>
              <SerifText style={{color:'#8A94A6'}}>Select Water Amount</SerifText>

              <FlatList 
              data={waterOptions}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.key}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                  onPress={() => {
                    setAddWaterAmount(item.key)
                    //setChosenWater(waterOptions[index])
                    setOpenWaterAmountMenu(false)
                  }}
                  style={[eventStyles.alertOptionsButtons]}
                  >
                    <SerifText>{item.key}</SerifText>
                  </TouchableOpacity>
                )
              }}
              />

            </View>
          </View>
        </Modal>

        <TouchableOpacity 
        style={[styles.amountButton, {paddingVertical:6, width:80}]}
        // onPress={() => addWater()}
        >
          <SerifText>add</SerifText>
        </TouchableOpacity>
    
      </View>
    </ScreenLayout>
  )
}

export default WaterTracker

const styles = StyleSheet.create({
  cupContainer:{
    alignItems:'center',
  },
  overlay:{
    position:'absolute',
    alignItems:'center',
    right:120,
    bottom:100,
  },
  trackerBoard:{
    flexDirection:'row',
    marginHorizontal:48,
    justifyContent:'space-around',
    marginVertical:12
  },
  textBig:{
    fontSize:32
  },
  amountButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFE69E',
    width:120,
    borderRadius:20,
    gap:12,
    paddingVertical:6
  },
  amountWaterBox:{
    width:'100%',
    gap:12,
    alignItems:'center',
    marginVertical:24
  }
})