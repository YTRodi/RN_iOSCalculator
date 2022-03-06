import { useState, useRef } from 'react';

enum Operators {
  sum,
  substract,
  multiply,
  divide,
}

const useCalculator = () => {
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

  return {
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
  };
};

export default useCalculator;
