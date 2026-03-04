import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SerifText from "@/components/SerifText";
import DrawerHeader from "@/components/LayoutComponents/DrawerHeader";
import PinnedNotes from "@/components/NotesComponents/PinnedNotes";
import DailyBudgetTracker from "@/components/BudgetComponents/DailyBudgetTracker";
import EmotionsOverview from "@/components/HomepageComponents/EmotionsOverview";

//Footer, Layouts, and styles
import ScreenLayout from "@/components/LayoutComponents/ScreenLayout";
import GeneralAddMenu from "@/components/LayoutComponents/GeneralAddMenu";
import { styles as eventStyles } from "./(CalendarStack)/AddCalendarEvent";
import { useEffect } from "react";


const sampleSched = [
  {
    event:"Greg's Birthday",
    time:"All Day",
    note:"Don't forget to bring his bday gift before going",
    icon:'🎂'
  },
  {
    event:'Gym',
    time:'6:30pm - 8:00pm',
    note:'Leg Day',
    icon:'🏋🏻‍♀️'
  }
]

export default function index() {
  let currentDate = new Date().toLocaleDateString()

  // useEffect(() => {
  //   //TODO: Grab the events/tasks, pinned notes, budget for the day, and emotions of the week/month
  // })

  return (
    <ScreenLayout>
        <DrawerHeader title='DayLyfe' backgroundColorProp='' paddingLeftProp={40} paddingProp={24}/>
      <ScrollView style={styles.container}>
        <View style={{gap:12}}>
          {/**Today's Schedule */}
          <View>
            <SerifText style={eventStyles.titleStyle}>Today's Schedule</SerifText>
            <SerifText style={eventStyles.textStyle}>{currentDate}</SerifText>
            {sampleSched.map((item, index) => (
              <View 
              key={index}
              style={{flexDirection:'row', alignItems:'center', gap:12, paddingVertical:4}}>
                <View>
                  <Text style={{fontSize:48}}>{item.icon}</Text>
                </View>
                <View>
                  <SerifText style={{fontSize:19}}>{item.event}</SerifText>
                  <SerifText style={{color:'#8A94A6'}}>{item.time}</SerifText>
                  <SerifText>{item.note}</SerifText>
                </View>
              </View>
            ))}
          </View>
          {/**Todays Budget */}
          <SerifText style={eventStyles.titleStyle}>Budget</SerifText>
          <View style={styles.budgetBox}>
            <DailyBudgetTracker 
            budget={50}
            total={36}
            remaining={50-36}
            progress={72}
            />
          </View>
          {/**Pinned Notes */}
          <View>
            <SerifText style={eventStyles.titleStyle}>Pinned Notes</SerifText>
            <PinnedNotes />
          </View>
          {/**Emotion Week Overview */}
          <View>
            <EmotionsOverview type="week" date={currentDate}/>
          </View>
          {/** */}
        </View>
      </ScrollView>
      <GeneralAddMenu />
    </ScreenLayout>
  );
}
const styles = StyleSheet.create({    
  container:{
    flex:1,
    padding:12,
  },
  budgetBox:{
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius:20
  }
})

