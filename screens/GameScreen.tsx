import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

interface GameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: 'lower' | 'greater') {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    // console.log(minBoundary, maxBoundary);

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  console.log(currentGuess);

  return (
    <View style={styles.screen}>
      <Title name="Opponent's Guess" />
      <NumberContainer name={currentGuess} />
      <Card>
        <InstructionText name="Higher or lower?" />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <PrimaryButton name="-" onPress={() => nextGuessHandler('lower')} />{' '}
          </View>
          <View style={styles.buttons}>
            <PrimaryButton
              name="+"
              onPress={() => nextGuessHandler('greater')}
            />
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  buttons: {
    flex: 1,
  },
});
