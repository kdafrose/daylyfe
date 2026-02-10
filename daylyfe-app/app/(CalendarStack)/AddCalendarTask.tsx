import { View, StyleSheet, TouchableOpacity, FlatList, Modal, Pressable} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { styles as taskStyles } from './AddCalendarEvent'
import SerifText from '@/components/SerifText'
import DatePicker from '@/components/CalendarComponents/DatePicker'
import React, {useState} from 'react'

const AddCalendarTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskNotes, setTaskNotes] = useState('');
  const [taskStartDate, setTaskStartDate] = useState<string | null>('YYYY-MM-DD at HH:MM AM/PM');
  const [taskEndDate, setTaskEndDate] = useState<string | null>('YYYY-MM-DD at HH:MM AM/PM');

  // modal states
  const [showStartDatePicker, setShowDateStartPicker] = useState(false)
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showTaskReview, setShowTaskReview] = useState(false)

  function saveTask(){
    // implement this
  }

  return (
    <View style={taskStyles.container}>
      <View style={taskStyles.column}>
        <TextInput 
        placeholder='Add Title'
        onChangeText ={setTaskTitle}
        value={taskTitle}
        style={taskStyles.titleStyle}
        />
        <TextInput 
        placeholder='Notes...'
        onChangeText ={setTaskNotes}
        value={taskNotes}
        style={taskStyles.textStyle}
        />
        <View style={taskStyles.horizontalLine}></View>
        {/**Save */}
        <View>
          <View style={taskStyles.sectionRow}>
                        <SerifText style={taskStyles.textStyle}>Start</SerifText>
            <TouchableOpacity
            onPress={() => setShowDateStartPicker(true)}
            >
              <SerifText style={taskStyles.dateButton}>{taskStartDate}</SerifText>
            </TouchableOpacity>
            <Modal
            transparent
            visible={showStartDatePicker}
            onRequestClose={() => setShowDateStartPicker(false)}
            >
              <Pressable 
              style={taskStyles.opacityBox}
              onPress={() => setShowDateStartPicker(false)}
              />
              <DatePicker 
              onDateChange={(dateString)=> {
                setTaskStartDate(dateString)
              }} // wtv onDateChange is called, take that value to selectedStartDate
              />
            </Modal>
          </View>
          <View style={taskStyles.horizontalLine}></View>
        </View>
        {/**End */}
        <View>
          <View style={taskStyles.sectionRow}>
            <SerifText style={taskStyles.textStyle}>End</SerifText>
            <TouchableOpacity
            onPress={() => setShowEndDatePicker(true)}
            >
              <SerifText style={taskStyles.dateButton}>{taskEndDate}</SerifText>
            </TouchableOpacity>
            <Modal
            transparent
            visible={showEndDatePicker}
            onRequestClose={() => setShowEndDatePicker(false)}
            >
              <Pressable 
              style={taskStyles.opacityBox}
              onPress={() => setShowEndDatePicker(false)}
              />
              <DatePicker 
              onDateChange={(dateString)=> {
                setTaskEndDate(dateString)
              }} // wtv onDateChange is called, take that value to selectedStartDate
              />
            </Modal>
          </View>
          <View style={taskStyles.horizontalLine}></View>
        </View>

        <View style={taskStyles.saveBox}>
          <TouchableOpacity 
          onPress={() => setShowTaskReview(true)}
          style={taskStyles.saveButton}
          >
            <SerifText style={{color:'white', fontSize:16}}>Save</SerifText>
          </TouchableOpacity>
      </View>

        <View >
        <Modal
        transparent
        animationType='fade'
        visible={showTaskReview}
        onRequestClose={() => setShowTaskReview(false)}
        >
          <View style={{flex:1, alignItems:'center', top:140}}>
            <View style={[taskStyles.reviewEventBox, {height:'40%'}]}>
              <View style={{padding:16}}>
                <SerifText style ={{fontSize:20, paddingBottom:16, textAlign:'center'}}>Task Preview</SerifText>
                <SerifText style ={taskStyles.reviewContent}>Event: {taskTitle}</SerifText>
                <SerifText style ={taskStyles.reviewContent}>{taskNotes}</SerifText>
                <SerifText style ={taskStyles.reviewContent}>Start: {taskStartDate}</SerifText>
                <SerifText style ={taskStyles.reviewContent}>End: {taskEndDate}</SerifText>
              </View>
              <View style={taskStyles.reviewButtonsRow}>
                <TouchableOpacity
                onPress={()=> saveTask()}
                style={taskStyles.saveButton}
                >
                  <SerifText>Save</SerifText>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => setShowTaskReview(false)}
                style={[taskStyles.saveButton, {backgroundColor:'rgba(138, 148, 166, 0.4)', width:80}]}
                >
                  <SerifText>Go Back</SerifText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      </View>
    </View>
  )
}


export default AddCalendarTask;