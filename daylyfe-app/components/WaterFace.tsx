import { StyleSheet, Text, View } from 'react-native'
import Level1 from "../assets/images/level1.svg"
import Level2 from "../assets/images/level2.svg"
import Level3 from "../assets/images/level3.svg"
import Level4 from "../assets/images/level4.svg"
import Level5 from "../assets/images/level5.svg"
import Level6 from "../assets/images/level6.svg"
import Level7 from "../assets/images/level7.svg"
import Level8 from "../assets/images/level8.svg"
import Level9 from "../assets/images/level9.svg"
import Level10 from "../assets/images/level10.svg"
import React, {FC} from 'react'

interface WaterFaceProps{
    progress:number
}

const FACE_LEVELS = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10];

const WaterFace:FC<WaterFaceProps> = ({progress}) => {
  const index = Math.min(Math.floor(progress / 10), 9); // 0–9
  const FaceSvg = FACE_LEVELS[index];

  return <FaceSvg width={120} height={120} />;
};

export default WaterFace;

const styles = StyleSheet.create({})