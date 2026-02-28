import { StyleSheet, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import Svg, { Ellipse, Path, Rect, Defs, ClipPath } from 'react-native-svg'
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedRect = Animated.createAnimatedComponent(Rect)

interface WaterCupProps{
    progress:number
}

const WaterCup:FC<WaterCupProps> = ({progress}) => {

    const cupHeight = 230;
    const fillHeight = useSharedValue(cupHeight);

    useEffect(() => {
      fillHeight.value = withTiming(cupHeight - (progress / 100) * cupHeight, {
      duration: 700,
    })
  }, [progress])

    // Animate the y + height of the clipping rect
    const animatedProps = useAnimatedProps(() => ({
        y: fillHeight.value,
        height: cupHeight - fillHeight.value,
    }))

  return (
    <View style={styles.container}>
        <View style={{ alignItems:'center'}}>
            <Svg height={350} width={260} viewBox='0 0 200 200' >

                <Defs>
                    {/* The clip rect slides up as water fills */}
                    <ClipPath id="waterClip">
                    <AnimatedRect
                        x={0}
                        width={200}
                        animatedProps={animatedProps}
                    />
                    </ClipPath>
                </Defs>

                <Path 
                d='M 20 0 L 180 0 L 150 230 L 50 230 Z' // M = move pen // L = Create line Z = zip/close path
                fill="rgba(217,217,217, 0.35)"
                stroke="rgba(217,217,217, 0.8)"
                strokeWidth={2}
                />

                <Path 
                d='M 20 0 L 180 0 L 150 230 L 50 230 Z' // M = move pen // L = Create line Z = zip/close path
                fill="rgba(100, 180, 255, 0.75)"
                clipPath="url(#waterClip)"
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
                fill="rgba(217,217,217, 0.35)"
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
    }
})