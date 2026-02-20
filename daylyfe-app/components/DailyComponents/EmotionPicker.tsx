import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceGrinBeam, faFaceMeh, faFaceFrown, faFaceSadCry, faFaceGrinSquint, faFaceGrinHearts, faFaceAngry, faFaceRollingEyes, faFaceGrinStars, faFaceGrimace, IconDefinition } from '@fortawesome/free-solid-svg-icons'

const emotions = [
  { key: 'happy', icon: faFaceGrinBeam, color: '#FFC66B' },
  { key: 'excited', icon: faFaceGrinSquint, color: '#DDBAD9' },
  { key: 'flirty', icon: faFaceGrinHearts, color: '#F6BFBF' },
  { key: 'ecstatic', icon: faFaceGrinStars, color: '#2585A9' },
  { key: 'nervous', icon: faFaceGrimace, color: '#CDDEFF' },
  { key: 'meh', icon: faFaceMeh, color: '#D0E4A1' },
  { key: 'annoyed', icon: faFaceRollingEyes, color: '#EEAAC8' },
  { key: 'down', icon: faFaceFrown, color: '#D5B696' },
  { key: 'sad', icon: faFaceSadCry, color: '#506EA9' },
  { key: 'angry', icon: faFaceAngry, color: '#FF6868' },
]

interface EmotionPickerProps {
  onSelect: (emotion: {icon:IconDefinition, color:string}) => void
}

const EmotionPicker = ({onSelect}:EmotionPickerProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.emotionsBox}>
            {emotions.map((emotion) => (
            <TouchableOpacity
                key={emotion.key}
                onPress={() => {
                    onSelect({
                        icon:emotion.icon,
                        color:emotion.color
                    })
                }}
            >
                <FontAwesomeIcon
                icon={emotion.icon}
                size={45}
                color={emotion.color}
                />
            </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

export default EmotionPicker

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:20,
        top:180,
        left:50,
        width:320,
        padding:8
    },
    emotionsBox:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:18,
        alignItems:'center',
        justifyContent:'center'
    }
})