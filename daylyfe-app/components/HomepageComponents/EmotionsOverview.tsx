import { StyleSheet, Text, View } from 'react-native'
import { emotions } from '../DailyComponents/EmotionPicker'
import { styles as eventStyles } from '@/app/(CalendarStack)/AddCalendarEvent'
import React, {FC, useEffect} from 'react'
import SerifText from '../SerifText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { JumpingTransition } from 'react-native-reanimated'

/**
 * EmotionsOverview.tsx
 * This is used to show to the user of all the emotions they have selected in DailyTodays.tsx
 * @returns Returns a week or month overview of emotions user has inputted
 */

interface EmotionsOverviewProps{
    type:string, // week or month
    date:string
}

const EmotionsOverview:FC<EmotionsOverviewProps> = ({type, date}) => {
    let numDaysInMonth = 31;
    const week = ["S", "M", "T", "W", "Th", "F", "S"]
    const sampleWeek = emotions.slice(0,7)
    useEffect(() => {
        // TODO:grab all emotions in a week or month
    })

  return (
   <View>
        <View style={{alignItems:'center', marginVertical:6}}>
            <SerifText style={eventStyles.textStyle}>March 3, 2026 - March 9, 2026</SerifText>
        </View>
        {type === "week" && 
            <View style={styles.weekContainer}>
                <View style={{gap:6}}>
                    <View style={styles.emotionRow}>
                        {sampleWeek.map((item, index) => (
                            <FontAwesomeIcon 
                            key={index}
                            icon={item.icon}
                            color={item.color}
                            size={45}
                            />
                        ))}
                    </View>
                    <View style={styles.weekContents}>
                        {week.map((item, index) => (
                            <SerifText key={index} style={{fontSize:16}}>{item}</SerifText>
                        ))}
                    </View>
                </View>
            </View>
        }
        {type === "month" &&
            <View>
            </View>
        }
   </View>
  )
}

export default EmotionsOverview

const styles = StyleSheet.create({
    weekContainer:{
        backgroundColor:'white',
        borderRadius:20,
        padding:12,
        paddingVertical:12,
        borderWidth:0.8
    },
    weekContents:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:18
    },
    emotionRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})