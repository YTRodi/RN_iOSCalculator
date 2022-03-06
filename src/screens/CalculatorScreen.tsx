import React from 'react';
import { Text, View } from 'react-native';

import Button from '../components/Button';
import useCalculator from '../hooks/useCalculator';

import { styles } from '../theme/appTheme';

const gray = '#9B9B9B';
const orange = '#FF9427';

const CalculatorScreen = () => {
  const {
    prevNumber,
    number,
    clearNumber,
    buildNumber,
    plusLess,
    onDelete,
    onDivide,
    onMultiply,
    onSubstract,
    onSum,
    onCalculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text
        style={styles.result}
        numberOfLines={1}
        ellipsizeMode="tail"
        adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <Button text="C" backgroundColor={gray} action={clearNumber} />
        <Button text="+/-" backgroundColor={gray} action={plusLess} />
        <Button text="del" backgroundColor={gray} action={onDelete} />
        <Button text="/" backgroundColor={orange} action={onDivide} />
      </View>

      <View style={styles.row}>
        <Button text="7" action={buildNumber} />
        <Button text="8" action={buildNumber} />
        <Button text="9" action={buildNumber} />
        <Button text="x" backgroundColor={orange} action={onMultiply} />
      </View>

      <View style={styles.row}>
        <Button text="4" action={buildNumber} />
        <Button text="5" action={buildNumber} />
        <Button text="6" action={buildNumber} />
        <Button text="-" backgroundColor={orange} action={onSubstract} />
      </View>

      <View style={styles.row}>
        <Button text="1" action={buildNumber} />
        <Button text="2" action={buildNumber} />
        <Button text="3" action={buildNumber} />
        <Button text="+" backgroundColor={orange} action={onSum} />
      </View>

      <View style={styles.row}>
        <Button text="0" full action={buildNumber} />
        <Button text="." action={buildNumber} />
        <Button text="=" backgroundColor={orange} action={onCalculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
