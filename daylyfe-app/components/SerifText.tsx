import { Text, StyleSheet, TextProps } from 'react-native'
import React from 'react'

interface SerifTextProps extends TextProps {
  children: React.ReactNode
}

const SerifText: React.FC<SerifTextProps> = ({children, style}) => {
  return (
    <Text style={[styles.serifText, style ]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  serifText:{
    fontFamily:'DMSerifDisplay-Regular',
  }
})

export default SerifText