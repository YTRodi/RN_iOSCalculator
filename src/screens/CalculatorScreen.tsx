import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';

import Button from '../components/Button';

import { styles } from '../theme/appTheme';

const gray = '#9B9B9B';
const orange = '#FF9427';

enum Operators {
  sum,
  substract,
  multiply,
  divide,
}

const CalculatorScreen = () => {
  const [prevNumber, setPrevNumber] = useState<string>('0');
  const [number, setNumber] = useState<string>('0');

  const lastOperation = useRef<Operators>();

  const clearNumber = () => {
    setNumber('0');
    setPrevNumber('0');
  };

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

  const onChangeNumberToPrev = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const onDivide = () => {
    onChangeNumberToPrev();
    lastOperation.current = Operators.divide;
  };

  const onMultiply = () => {
    onChangeNumberToPrev();
    lastOperation.current = Operators.multiply;
  };

  const onSubstract = () => {
    onChangeNumberToPrev();
    lastOperation.current = Operators.substract;
  };

  const onSum = () => {
    onChangeNumberToPrev();
    lastOperation.current = Operators.sum;
  };

  const onCalculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }

    setPrevNumber('0');
  };

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
