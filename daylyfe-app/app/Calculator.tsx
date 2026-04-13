import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from 'react'
import React from 'react'
import DrawerHeader from '@/components/LayoutComponents/DrawerHeader'
import ScreenLayout from '@/components/LayoutComponents/ScreenLayout'
import SerifText from '@/components/SerifText'

function add(first: number, second: number) {
  return first + second;
}

function subtract(first: number, second: number) {
  return first - second;
}

function multiply(first: number, second: number) {
  return first * second;
}

function divide(first: number, second: number) {
  if (second === 0) return Infinity; // more meaningful than a magic number
  return first / second;
}

// ─── Core calculation logic (pure function, no state calls inside) ────────────
// Respects order of operations: * and / before + and -
function calculateAnswer(numArray: number[], opsArray: string[]): number {
  // Work on copies so we don't mutate the originals
  let nums = [...numArray];
  let ops = [...opsArray];

  // Pass 1: handle * and /
  let i = 0;
  while (i < ops.length) {
    if (ops[i] === '*' || ops[i] === '/') {
      const result =
        ops[i] === '*'
          ? multiply(nums[i], nums[i + 1])
          : divide(nums[i], nums[i + 1]);

      // Replace the two operands with the result, remove the operator
      nums.splice(i, 2, result); // remove nums[i] and nums[i+1], insert result
      ops.splice(i, 1);          // remove ops[i]
      // don't increment i — re-check same position after splice
    } else {
      i++;
    }
  }

  // Pass 2: handle + and - (left to right)
  let result = nums[0];
  for (let j = 0; j < ops.length; j++) {
    if (ops[j] === '+') {
      result = add(result, nums[j + 1]);
    } else if (ops[j] === '-') {
      result = subtract(result, nums[j + 1]); // FIX: was backwards
    }
  }

  return result;
}

// ─── Component ────────────────────────────────────────────────────────────────
const Calculator = () => {
  const [typedEquation, setTypedEquation] = useState('');
  const [currentNum, setCurrentNum] = useState('');
  const [answer, setAnswer] = useState<number | null>(null);
  const [equation, setEquation] = useState<number[]>([]);
  const [operations, setOperations] = useState<string[]>([]);

  // ─── Helpers ──────────────────────────────────────────────────────────────

  const handleReset = () => {
    setAnswer(null);
    setTypedEquation('');
    setCurrentNum('');
    setEquation([]);
    setOperations([]);
  };

  const handleOperation = (op: string, display: string) => {
    if (currentNum === '' && equation.length === 0) return; // nothing typed yet
    const num = currentNum === '' ? equation.at(-1) ?? 0 : Number(currentNum);
    setEquation(prev => [...prev, num]);
    setOperations(prev => [...prev, op]);
    setCurrentNum('');
    setTypedEquation(prev => prev + display);
  };

  const handleEquals = () => {
    if (currentNum === '' || currentNum === '.') return;

    const currentNumValue = Number(currentNum);
    if (isNaN(currentNumValue)) return;

    // FIX: build the complete arrays here and pass them directly —
    // don't rely on the equation state which hasn't updated yet
    const finalNums = [...equation, currentNumValue];
    const finalOps = [...operations];

    const result = calculateAnswer(finalNums, finalOps);
    setAnswer(result);

    // Optionally reset state so next input starts fresh
    setEquation([]);
    setOperations([]);
    setCurrentNum(String(result));
    setTypedEquation(String(result));
  };

  const handleDigit = (digit: string) => {
    // Prevent multiple decimal points in the same number
    if (digit === '.' && currentNum.includes('.')) return;
    setCurrentNum(prev => prev + digit);
    setTypedEquation(prev => prev + digit);
  };

  const handlePercent = () => {
    if (currentNum === '') return;
    const num = Number(currentNum) * 0.01;
    const numStr = String(num);
    setTypedEquation(prev => prev.slice(0, prev.length - currentNum.length) + numStr);
    setCurrentNum(numStr);
  };

  const handleDeleteLeft = () => {
    const lastChar = typedEquation.at(-1);

    if (lastChar === ' ') {
      // Last thing typed was an operator (stored as " + ", " - ", etc.)
      setOperations(prev => prev.slice(0, -1));
      setTypedEquation(prev => prev.slice(0, -3));
      // Restore the number that was before the operator as currentNum
      const restored = equation.at(-1);
      setEquation(prev => prev.slice(0, -1));
      setCurrentNum(restored !== undefined ? String(restored) : '');
    } else if (lastChar === undefined || typedEquation === '') {
      return; // nothing to delete
    } else {
      // Deleting a digit or decimal point
      setCurrentNum(prev => prev.slice(0, -1));
      setTypedEquation(prev => prev.slice(0, -1));
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <ScreenLayout>
      <DrawerHeader title='' backgroundColorProp='' paddingProp={24} paddingLeftProp={0} />

      <View style={{flex:1}}>
      {/* Display */}
      <View style={styles.calculateBox}>
        <View style={[styles.answersBox, { height: 110 }]}>
          <SerifText style={styles.answers}>{typedEquation || '0'}</SerifText>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.wholeButtonBox}>

        {/* Row 1: C  ×  ÷  ⌫ */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.numberButtonSize} onPress={handleReset}>
            <SerifText style={styles.actions}>C</SerifText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButtonSize} onPress={() => handleOperation('*', ' x ')}>
            <FontAwesome6 name='xmark' size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButtonSize} onPress={() => handleOperation('/', ' ÷ ')}>
            <FontAwesome6 name='divide' size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButtonSize} onPress={handleDeleteLeft}>
            <FontAwesome6 name='delete-left' size={30} color='white' />
          </TouchableOpacity>
        </View>

        {/* Row 2: 7  8  9  + */}
        <View style={styles.buttonsRow}>
          {['7', '8', '9'].map(d => (
            <TouchableOpacity key={d} style={[styles.numberButtonSize, { opacity: 0.6 }]} onPress={() => handleDigit(d)}>
              <SerifText style={styles.number}>{d}</SerifText>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.numberButtonSize} onPress={() => handleOperation('+', ' + ')}>
            <FontAwesome6 name='plus' size={30} color='white' />
          </TouchableOpacity>
        </View>

        {/* Row 3: 4  5  6  - */}
        <View style={styles.buttonsRow}>
          {['4', '5', '6'].map(d => (
            <TouchableOpacity key={d} style={[styles.numberButtonSize, { opacity: 0.6 }]} onPress={() => handleDigit(d)}>
              <SerifText style={styles.number}>{d}</SerifText>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.numberButtonSize} onPress={() => handleOperation('-', ' - ')}>
            <FontAwesome6 name='minus' size={30} color='white' />
          </TouchableOpacity>
        </View>

        {/* Row 4: 3  2  1  = (tall) */}
        <View style={styles.buttonsRow}>
          {['3', '2', '1'].map(d => (
            <TouchableOpacity key={d} style={[styles.numberButtonSize, { opacity: 0.6 }]} onPress={() => handleDigit(d)}>
              <SerifText style={styles.number}>{d}</SerifText>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.equalButtonSize} onPress={handleEquals}>
            <FontAwesome6 name='equals' size={30} color='white' />
          </TouchableOpacity>
        </View>

        {/* Row 5: %  0  . */}
        <View style={[styles.buttonsRow, {bottom: 72}]}>
          <TouchableOpacity style={styles.numberButtonSize} onPress={handlePercent}>
            <FontAwesome6 name='percent' size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.numberButtonSize, { opacity: 0.6 }]} onPress={() => handleDigit('0')}>
            <SerifText style={styles.number}>0</SerifText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.numberButtonSize, { opacity: 0.6 }]} onPress={() => handleDigit('.')}>
            <SerifText style={styles.number}>.</SerifText>
          </TouchableOpacity>
          <View style={{width: 72,height: 58,}}></View>
        </View>

      </View>

      </View>
    </ScreenLayout>
  )
}

export default Calculator

const styles = StyleSheet.create({
  actions: {
    fontSize: 32,
    color: 'white'
  },
  number: {
    fontSize: 32,
    color: '#000000'
  },
  calculateBox: {
    padding: 32,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex:2
},
  wholeButtonBox: {
    gap: 15,
  },
  numberButtonSize: {
    width: 72,
    height: 58,
    backgroundColor: '#F6BFBF',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
  equalButtonSize: {
    width: 72,
    height: 130,
    backgroundColor: '#F6BFBF',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center'
  },
  answers: {
    fontSize: 40
  },
  answersBox: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 355,
  }
})