import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen'; 
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const [userNumber, setUserNumber] = useState<null | number>(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessedRounds, setGuessedRounds] = useState(0);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numOfRounds: number) {
    setGameIsOver(true);
    setGuessedRounds(numOfRounds)
  }

  function startNewGameHandler () {
    setUserNumber(null)
    setGuessedRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen startNewGame={startNewGameHandler} roundsNumber={guessedRounds} guessedNumber={userNumber} />;
  }

  return (
    <>
    <SafeAreaProvider style = {{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.appContainer}>
        <ImageBackground
          source={require('../Game/images/background.png')}
          imageStyle={styles.backgroundImage}
          resizeMode="cover"
          style={styles.appContainer}>
          <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
