import { StyleSheet, View } from 'react-native'
import React, {FC, useEffect} from 'react'
import Svg, {Ellipse, Path} from 'react-native-svg'
import Animated from 'react-native-reanimated'
import Defs from 'react-native-svg'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface WaterCupProps{
    progress:number
}

const WaterCup:FC<WaterCupProps> = ({progress}) => {

    const cupHeight = 230;
    const fillHeight = useSharedValue(cupHeight);

    useEffect(() => {
        fillHeight.value = withTiming((progress/100) * cupHeight), {
            duration: 500
        }
    }, [progress])

    const animateFill = useAnimatedStyle(() => ({
        height:fillHeight.value,
        y:cupHeight - fillHeight.value
    }))

  return (
    <View style={styles.container}>
        <View style={{ alignItems:'center'}}>
            <Svg height={350} width={260} viewBox='0 0 200 200' >
                <Path 
                d='M 20 0 L 180 0 L 150 230 L 50 230 Z' // M = move pen // L = Create line Z = zip/close path
                fill="rgba(217,217,217, 0.9)"
                stroke="rgba(217,217,217, 0.8)"
                strokeWidth={2}
                />
                {/**Top of cup */}
                <Ellipse 
                cx={100} // middle of view box
                cy={0}
                rx={80} // (180 - 20) / 2
                ry={10} 
                fill="rgba(217,217,217, 0.9)"
                stroke="rgba(217,217,217, 0.8)"
                strokeWidth={2}
                />
                {/**Bottom of cup */}
                <Ellipse 
                cx={100}
                cy={230}
                rx={50}
                ry={5}
                fill="rgba(217,217,217, 0.9)"
                
                />
            </Svg>
        </View>
    </View>
  )
}

export default WaterCup

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    cupFill:{
        backgroundColor:'#90CAF9', 
        bottom:0, 
        width:120, 
        height:230,
        position:'absolute'
    },
    faceOverlay:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
})