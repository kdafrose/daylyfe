import { View, StyleSheet, TouchableOpacity, FlatList, Modal, Pressable} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import SerifText from '@/components/SerifText'
import DatePicker from '@/components/CalendarComponents/DatePicker'
import React, {useState} from 'react'

const colorEventTags = ["#DDBAD9", "#F6BFBF", "#F9D69E", "#D0E4A1", "#BBE6F1", "#FF6868", "#FBD4C0"]
const repeatOptions = ["Never", "Daily", "Weekly", "Monthly", "Yearly"]
const alertOptions = ["None", "On Event", "15 minute before", "30 minutes before", "1 hour before", "2 hours before", "1 day before"]

const AddCalendaraEvent = () => {
  // event data to the db
  const [eventTitle, setEventTitle] = useState('');
  const [eventNotes, setEventNotes] = useState('')
  const [chosenColor, setChosenColor] = useState('#DDBAD9');
  const [chosenRepeat, setChosenRepeat] = useState('Never');
  const [chosenAlert,setChosenAlert] = useState('None');
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>('YYYY-MM-DD at HH:MM AM/PM');
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>('YYYY-MM-DD at HH:MM AM/PM');

  // modal states
  const [openAlertMenu, setOpenAlertMenu] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {/**Adding event title */}
        <View> 
          <TextInput 
          onChangeText={setEventTitle}
          placeholder='Add Title'
          value={eventTitle}
          style={styles.titleStyle}
          />
          <TextInput 
          onChangeText={setEventNotes}
          placeholder='Notes...'
          value={eventTitle}
          style={styles.textStyle}
          />
          <View style={styles.horizontalLine}></View>
        </View>
        {/**Start */}
        <View >
          <View style={styles.sectionRow}>
            <SerifText style={styles.textStyle}>Start</SerifText>
            <TouchableOpacity
            onPress={() => setShowStartDatePicker(true)}
            >
              <SerifText style={styles.dateButton}>{selectedStartDate}</SerifText>
            </TouchableOpacity>
            <Modal
            transparent
            visible={showStartDatePicker}
            onRequestClose={() => setShowStartDatePicker(false)}
            >
              <Pressable 
              style={styles.opacityBox}
              onPress={() => setShowStartDatePicker(false)}
              />
              <DatePicker 
              onDateChange={(dateString)=> {
                setSelectedStartDate(dateString)
              }} // wtv onDateChange is called, take that value to selectedStartDate
              />
            </Modal>

          </View>
          <View style={styles.horizontalLine}></View>
        </View>
        {/**End */}
        <View>
          <View style={styles.sectionRow}>
            <SerifText style={styles.textStyle}>End</SerifText>
            <TouchableOpacity
            onPress={() => setShowEndDatePicker(true)}
            >
              <SerifText style={styles.dateButton}>{selectedEndDate}</SerifText>
            </TouchableOpacity>
            <Modal
            transparent
            visible={showEndDatePicker}
            onRequestClose={() => setShowEndDatePicker(false)}
            >
              <Pressable 
              style={styles.opacityBox}
              onPress={() => setShowEndDatePicker(false)}
              />
              <DatePicker 
              onDateChange={(dateString)=> {
                setSelectedEndDate(dateString)
              }} // wtv onDateChange is called, take that value to selectedStartDate
              />
            </Modal>
          </View>
          <View style={styles.horizontalLine}></View>
        </View>
        {/**Color */}
        <View>
          <View style={styles.sectionRow}>
            <SerifText style={styles.textStyle}>Color</SerifText>
            <View style={[styles.colorButton, {backgroundColor:chosenColor}]}></View>
          </View>
          <FlatList 
          data={colorEventTags}
          horizontal
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return(
              <TouchableOpacity 
              style={{paddingRight:12, paddingVertical:6}}
              onPress={() => setChosenColor(item)}
              >
                <View style={[styles.colorButton,{backgroundColor:item}]}></View>
              </TouchableOpacity>
            )
          }}
          />
          <View style={styles.horizontalLine}></View>
        </View>
        {/**Repeat */}
        <View>
          <View style={styles.sectionRow}>
            <SerifText style={styles.textStyle}>Repeat</SerifText>
            <SerifText>{chosenRepeat}</SerifText>
          </View>
            <FlatList 
            data={repeatOptions}
            horizontal
            scrollEnabled={false}
            keyExtractor={(_,index) => index.toString()}
            renderItem={({item}) => {
              const isSelected = item === chosenRepeat // true if chosenRepeat and item is the same
              return (
                <TouchableOpacity
                style={{paddingRight:12, paddingVertical:6}}
                onPress={() => setChosenRepeat(item)}
                >
                  <SerifText style={[
                    styles.repeatButtonOptions,
                    isSelected && {
                      backgroundColor: 'rgba(250, 127, 122, 0.2)',
                    },
                    ]}>{item}</SerifText>
                </TouchableOpacity>
              )
            }}
            />
            <View style={styles.horizontalLine}></View>
        </View>
        {/**Alert */}
        <View>
          <View style={styles.sectionRow}>
            <SerifText style={styles.textStyle}>Alert</SerifText>
            <TouchableOpacity
            onPress={() => setOpenAlertMenu(true)}
            >
              <SerifText>{chosenAlert}</SerifText>
            </TouchableOpacity>
          </View>
          <Modal
          animationType='fade'
          visible={openAlertMenu}
          onRequestClose={() => setOpenAlertMenu(false)}
          transparent={true}
          >
          <Pressable 
          style={styles.opacityBox}
          onPress={() => setOpenAlertMenu(false)}
          />
          <View style={styles.modalCenter}>
            <View style={styles.alertBox}>

            <SerifText style={styles.textStyle}>Alert Time</SerifText>
            <SerifText style={{color:'#8A94A6'}}>Select alert time</SerifText>
              <FlatList 
              data={alertOptions}
              scrollEnabled={false}
              keyExtractor={(_,index) => index.toString()}
              renderItem={({item}) => {
                const isSelected = item === chosenAlert
                return (
                  <TouchableOpacity
                  onPress={() => setChosenAlert(item)}
                  style={[
                    styles.alertOptionsButtons,
                    isSelected && {
                      backgroundColor:'rgba(250, 127, 122, 0.2)'
                    }
                  ]}
                  > 
                    <SerifText >{item}</SerifText>
                  </TouchableOpacity>
                )
              }}
              />
            </View>
          </View>
          </Modal>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:32,
    paddingVertical:16
  },
  column:{
    justifyContent:'flex-start'
  },
  horizontalLine:{
    borderBottomWidth:0.3,
    borderBottomColor:'#8A94A6',
    opacity:0.5,
    marginVertical:6
  },
  titleStyle:{
    fontFamily:'DMSerifDisplay-Regular',
    fontSize:26
  },
  textStyle:{
    fontFamily:'DMSerifDisplay-Regular',
    fontSize:22
  },
  sectionRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  dateButton:{
    fontSize:14
  },
  colorButton:{
    width:20,
    height:20,
    borderRadius:20,
  },
  repeatButtonOptions:{
    backgroundColor:'rgba(138, 148, 166, 0.2)',
    paddingHorizontal:6,
    paddingVertical:2,
    borderRadius:20
  },
  opacityBox:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:"#F8E1CD",
    opacity:0.1,
  },
  modalCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    justifyContent:'center',
    height: 380,
    width: '60%', 
    padding:16
  },
  alertOptionsButtons:{
    backgroundColor:'rgba(138, 148, 166, 0.3)',
    alignItems:'center',
    marginVertical:6,
    paddingVertical:6,
    borderRadius:20
  }
})

export default AddCalendaraEvent;