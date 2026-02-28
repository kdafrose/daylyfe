import { StyleSheet,TouchableOpacity, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from 'react'
import React from 'react'
import DrawerHeader from '@/components/LayoutComponents/DrawerHeader'
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout'
import SerifText from '@/components/SerifText'

function add(first:number, second:number){
  return first + second;
}

function subtract(first:number, second:number){
  return first - (second);
}

function multiply(first:number, second:number){
  return first * second;
}

function divide(first:number, second:number){
  if (second === 0) {
    return -123456789;
  }
  return first / second;
}



const Calculator = () => {
  const [typedEquation, setTypedEquation] = useState(''); // the entire equation the user will see
  const [currentNum,setCurrentNum] = useState(''); // current number the user is typing

  const [answer,setAnswer] = useState(0);
  const [equation,setEquation] = useState<number[]>([])     // 4 _ 6 _ 9 
  const [operations,setOperations] = useState<string[]>([]);// _ + _ + _ 
  console.log(currentNum)
  console.log(equation)
  console.log(operations)

  function deleteLeftHandler(){
    let lastCharacter = typedEquation.at(-1)

    if(lastCharacter === ' '){ //operation
      setOperations(operations.slice(0, -1));
      setTypedEquation(typedEquation.slice(0,-3))

      const newCurrentCum = equation.at(-1)
      if(newCurrentCum === undefined) setCurrentNum('')
      else setCurrentNum(String(newCurrentCum))
    } 
    else if(lastCharacter === '.'){ //decimal point
      setTypedEquation(typedEquation.slice(0, -1));
      setCurrentNum(currentNum.slice(0,-1))
    } 
    else{
      setEquation(equation.slice(0,-1));
      setCurrentNum(currentNum.slice(0,-1));
      setTypedEquation(typedEquation.slice(0, -1));
    }
  }

  function calculateAnswer(numArray:number[],opsArray:string[]){
    let ans = 0;
    let ops = opsArray
    let nums = numArray

    for(let i = 0; i < ops.length; i++){
      if(ops[i] === '*' || ops[i] === '/'){
        ans = ops[i] === '*'
        ? multiply(nums[i], nums[i+1]): divide(nums[i], nums[i+1]);

        setOperations(ops.splice(i, 1)); // remove operation
        setEquation(nums.splice(i, 2));  // remove 2 numbers 
        i--;                             // since we removed one operation, go back 1
      }
    }

    let result = (ans === 0)? numArray[0]:ans
    for(let i = 0; i < ops.length; i++ ){
      if(ops[i] === '+'){
        result = add(result, nums[i+1])
      } else if (ops[i] === '-'){
        result = subtract(nums[i+1],result) // in case result is a bigger num 
      }
    }

    setAnswer(result);
  }

  return (
    <ScreenLayout>
      {/**Calculation Screen */}
      <DrawerHeader title='' backgroundColorProp='' paddingProp={24} paddingLeftProp={0}/>

      <View style={styles.calculateBox}>

        <View style={[styles.answersBox,{height:220}]}>
          <SerifText style={styles.answers}>{typedEquation}</SerifText>
        </View>
        {/**Answer Section */}
        <View style={[styles.answersBox,{height:50}]}>
          <SerifText style={styles.answers}>= {answer}</SerifText>
        </View>
      </View>
      {/**End Calculation Screen */}

      <View style={styles.wholeButtonBox}>
        {/**First row of Buttons */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity 
          style={styles.numberButtonSize}
          onPress={() => {
            setAnswer(0);         // actual answer set to 0
            setTypedEquation(''); // the app will show 0 (reset equation)
            setCurrentNum('')     // current number user is writing will reset
            setEquation(() => [])
            setOperations(() => [])
          }}
          >
            <SerifText style={styles.actions}>C</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.numberButtonSize}
          onPress={() => {
            setOperations(prev => [...prev, '*'])
            setEquation(prev => [...prev, Number(currentNum)])
            setCurrentNum('')
            setTypedEquation(typedEquation.concat(' x '))
          }}
          >
            <FontAwesome6  name ='xmark' size={30} color='white'/>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.numberButtonSize}
          onPress={() => {
            setOperations(prev => [...prev, '/'])
            setEquation(prev => [...prev, Number(currentNum)])
            setCurrentNum('')
            setTypedEquation(typedEquation.concat(' ÷ '))
          }}
          >
            <FontAwesome6  name ='divide' size={30} color='white'/>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.numberButtonSize}
          onPress={() => {
            deleteLeftHandler();
          }}
          >
            <FontAwesome6  name ='delete-left' size={30} color='white'/>
          </TouchableOpacity>
        </View>

        {/**Second row of Buttons */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('7'))
            setTypedEquation(typedEquation.concat('7'))
          }}
          >
            <SerifText style={styles.number}>7</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('8'))
            setTypedEquation(typedEquation.concat('8'))
          }}
          >
            <SerifText style={styles.number}>8</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('9'))
            setTypedEquation(typedEquation.concat('9'))
          }}
          >
            <SerifText style={styles.number}>9</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.numberButtonSize}
          onPress={() => {
            setOperations(prev => [...prev, '+'])
            setEquation(prev => [...prev, Number(currentNum)])
            setCurrentNum('')
            setTypedEquation(typedEquation.concat(' + '))
          }}
          >
            <FontAwesome6  name ='plus' size={30} color='white'/>
          </TouchableOpacity>
        </View>

        {/**Third row of Buttons */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
         onPress={() => {
            setCurrentNum(currentNum.concat('4'))
            setTypedEquation(typedEquation.concat('4'))
          }}
          >
            <SerifText style={styles.number}>4</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('5'))
            setTypedEquation(typedEquation.concat('5'))
          }}
          >
            <SerifText style={styles.number}>5</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('6'))
            setTypedEquation(typedEquation.concat('6'))
          }}
          >
            <SerifText style={styles.number}>6</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.numberButtonSize}
          onPress={() => {
            setOperations(prev => [...prev, '-'])
            setEquation(prev => [...prev, Number(currentNum)])
            setCurrentNum('')
            setTypedEquation(typedEquation.concat(' - '))
          }}
          >
            <FontAwesome6  name ='minus' size={30} color='white'/>
          </TouchableOpacity>
        </View>

        {/**Fourth row of Buttons */}
         <View style={styles.buttonsRow}>
          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('3'))
            setTypedEquation(typedEquation.concat('3'))
          }}
          >
            <SerifText style={styles.number}>3</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('2'))
            setTypedEquation(typedEquation.concat('2'))
          }}
          >
            <SerifText style={styles.number}>2</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('1'))
            setTypedEquation(typedEquation.concat('1'))
          }}
          >
            <SerifText style={styles.number}>1</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.equalButtonSize}
          onPress={() => {
            if (currentNum === "" || currentNum === ".") return;
            
            const currentNumValue = Number(currentNum);
            if (isNaN(currentNumValue)) return;

            const finalEq = [...equation, currentNumValue];
            setEquation(finalEq)
            calculateAnswer(equation, operations);
          }}
          >
            <FontAwesome6  name ='equals' size={30} color='white'/>
          </TouchableOpacity>
        </View>

        {/**Fifth row of Buttons (last) */}
        <View style={[styles.buttonsRow, {justifyContent:'flex-start', marginLeft:26, bottom:72}]}>
          <TouchableOpacity 
          style={[styles.numberButtonSize]}
          onPress={() => {
            const num = Number(currentNum) * 0.01;
            const newEquation = typedEquation.slice(0,typedEquation.length - currentNum.length) + String(num);

            setCurrentNum(String(num));
            setTypedEquation(newEquation);
          }}
          >
            <FontAwesome6 name='percent' size={30} color='white' />
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('0'))
            setTypedEquation(typedEquation.concat('0'))
          }}
          >
            <SerifText style={styles.number}>0</SerifText>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.numberButtonSize, {opacity:0.6}]}
          onPress={() => {
            setCurrentNum(currentNum.concat('.'))
            setTypedEquation(typedEquation.concat('.'))
          }}
          >
            <SerifText style={styles.number}>.</SerifText>
          </TouchableOpacity>
        </View>
        

      </View>
    </ScreenLayout>
  )
}

export default Calculator

const styles = StyleSheet.create({
  actions:{
    fontSize:32,
    color:'white'
  },
  number:{
    fontSize:32,
    color:'#000000'
  },
  wholeButtonBox:{
    flex:1,
    gap:15
  },
  numberButtonSize:{
    width:72,
    height:58,
    backgroundColor:'#F6BFBF',
    borderRadius:11,
    justifyContent:'center',
    alignItems:'center'
  },
  equalButtonSize:{
    width:72,
    height:130,
    backgroundColor:'#F6BFBF',
    borderRadius:11,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonsRow:{
    flexDirection:'row',
    gap:20,
    justifyContent:'center'
  },
  calculateBox:{
    height:340,
    padding:24,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  answers:{
    fontSize:40
  },
  answersBox:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width:355
  }
})