import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Icon from "react-native-vector-icons/FontAwesome"
import Icons from "react-native-vector-icons/Entypo" 
import GuessLogText from '../components/ui/GuessLogText';

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
  onGameOver: (num: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  const guessRoundsLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary =1,
    maxBoundary= 100
  }, [])

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
    setGuessRounds(prev => [newRndNumber, ...prev])
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
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Icons style={styles.buttonText} name='minus' size={16} />
              </PrimaryButton>    
          </View>
          <View style={styles.buttons}>
            <PrimaryButton
              
              onPress={() => nextGuessHandler('greater')}
            ><Icons style={styles.buttonText} name='plus' size={16} /></PrimaryButton>
            
          </View>
        </View>
      </Card>
      <View style={styles.scroll}>
        {/* {guessRounds.map((num,key) => <Text key={key}>{num}</Text>)} */}
        <FlatList  data={guessRounds}  renderItem={(itemData) => <GuessLogText guess={itemData.item} roundNumber={guessRoundsLength - itemData.index} />}  keyExtractor={(item) => item.toString()} />
      </View>
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
    fontFamily: "Poppins-Regular"
  },
  buttons: {
    flex: 1,
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: "Poppins-Regular"
  },
  scroll: {
    flex: 1
  }
});
