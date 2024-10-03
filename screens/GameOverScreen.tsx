import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

interface GameOverScreenProps {
  roundsNumber : number,
  guessedNumber: number,
  startNewGame: () => void;
}

function GameOverScreen(props: GameOverScreenProps) {
  return <View style={styles.rootContainer}>
    <Title name='GAME OVER!' />
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require("../images/success.png")}></Image>
    </View>
    <Text style={styles.summaryText}>Your phone needed <Text style={styles.higlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.higlight}>{props.guessedNumber}</Text>.</Text>
    <PrimaryButton onPress={props.startNewGame } ><Text style={styles.text}>Start New Game</Text></PrimaryButton>
  </View>
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    margin: 36
  },
  image: {
    height: "100%",
    width: "100%"
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    
  },
  summaryText: {
    fontFamily: "Poppins-Regular",
    fontSize: 24,
    textAlign: "center",
    color: "black"
  },
  higlight: {
    fontFamily: "Poppins-Black",
    fontSize: 21,
    color: Colors.primary800,
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "white"
  }
})

export default GameOverScreen;
