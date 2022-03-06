import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Button from '../components/Button';

import { styles } from '../theme/appTheme';

const gray = '#9B9B9B';
const orange = '#FF9427';

const CalculatorScreen = () => {
  const [prevNumber, setPrevNumber] = useState<string>('0');
  const [number, setNumber] = useState<string>('0');

  const clearNumber = () => setNumber('0');

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const plusLess = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    return setNumber(`-${number}`);
  };

  const onDelete = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length < 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
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
        <Button text="/" backgroundColor={orange} action={clearNumber} />
      </View>

      <View style={styles.row}>
        <Button text="7" action={buildNumber} />
        <Button text="8" action={buildNumber} />
        <Button text="9" action={buildNumber} />
        <Button text="x" backgroundColor={orange} action={clearNumber} />
      </View>

      <View style={styles.row}>
        <Button text="4" action={buildNumber} />
        <Button text="5" action={buildNumber} />
        <Button text="6" action={buildNumber} />
        <Button text="-" backgroundColor={orange} action={clearNumber} />
      </View>

      <View style={styles.row}>
        <Button text="1" action={buildNumber} />
        <Button text="2" action={buildNumber} />
        <Button text="3" action={buildNumber} />
        <Button text="+" backgroundColor={orange} action={clearNumber} />
      </View>

      <View style={styles.row}>
        <Button text="0" full action={buildNumber} />
        <Button text="." action={buildNumber} />
        <Button text="=" backgroundColor={orange} action={clearNumber} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
