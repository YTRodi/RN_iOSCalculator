import React from 'react';
import { Text, View } from 'react-native';

import Button from '../components/Button';

import { styles } from '../theme/appTheme';

const gray = '#9B9B9B';
const orange = '#FF9427';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <Button text="C" backgroundColor={gray} />
        <Button text="+/-" backgroundColor={gray} />
        <Button text="del" backgroundColor={gray} />
        <Button text="/" backgroundColor={orange} />
      </View>

      <View style={styles.row}>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" backgroundColor={orange} />
      </View>

      <View style={styles.row}>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" backgroundColor={orange} />
      </View>

      <View style={styles.row}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" backgroundColor={orange} />
      </View>

      <View style={styles.row}>
        <Button text="0" full />
        <Button text="." />
        <Button text="=" backgroundColor={orange} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
